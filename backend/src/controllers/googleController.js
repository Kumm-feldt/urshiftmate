const { google } = require("googleapis");
const { getRefreshToken } = require("./userController");
const { builtinModules } = require("module");
const {Workplace} = require("../models/Workplace");
const {User} = require("../models/User");
const dateFile = require("./dates.json");

require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);


// ############################ Helper Functions ##############################

function getDates(ind = 0) {
  let index = Number(ind)
  let currentDate = new Date(); // parse the input string as Date

  for(let i = 0; i<dateFile.length; i++){
    const from = new Date(dateFile[i].weekOneStart);
    const to = new Date(dateFile[i].weekTwoEnd);

    if (currentDate >= from && currentDate <= to) {
      return {
        weekOneStart: dateFile[i + index].weekOneStart,
        weekOneEnd: dateFile[i + index].weekOneEnd,
        weekTwoStart: dateFile[i + index].weekTwoStart,
        weekTwoEnd: dateFile[i + index].weekTwoEnd,
        checkDay: dateFile[i + index].checkDate,
      };
    }

  }

  return null; // If no match found
}

async function isActiveCalendar(googleId, calName, isPrimary){
  try{
    const userInfo = await User.findOne({googleId});
    if (!userInfo || !userInfo.calendars) {
      return false;
    }
    
    const calendars = userInfo.calendars;
    const trimmedCalName = calName?.trim(); // Trim the input

    
    // Also trim the stored calendar names for comparison
    const hasMatch = calendars.some(calendar => 
      calendar.trim() === trimmedCalName || 
      (isPrimary === true && calendar.trim() === "Primary")
    );
    
    return hasMatch;
    
  } catch(err){
    console.log("Error in isActiveCalendar:", err);
    return false;
  }
}


// #### DELETE CALENDAR #####
async function deleteCalendar(req, res){
  let googleId = req.session?.googleId;
  let calendarToDelete = req.body?.calendarId;
  let primary = req.body?.primary;

 
  if (!googleId) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  if (typeof calendarToDelete !== "string" || !calendarToDelete.trim()) {
    return res.status(400).json({ error: "summary is required" });
  }



    try{
      const check = await User.findOne({googleId});
      // Function to check primary Calendars that their summary is not "Primary"
      // ** remember that the db has a default of "Primary" in the calendar field
      if(check && primary && calendarToDelete != "Primary"){
          const hasMatch = check.calendars.some(calendar => 
             calendar.trim() === "Primary")
          if(hasMatch){
            calendarToDelete = "Primary"
          }
        
      }
      // pull the calendar from the array; returns the *old* doc by default
      const result = await User.updateOne(
        { googleId },
        { $pull: { calendars: { calendarId: calendarToDelete.trim() } } }
      );
      if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // If nothing was modified, the calendar wasn't present
    if (result.modifiedCount === 0) {
      return res.status(200).json({ removed: false, message: "Calendar not found in list" });
    }

    return res.status(200).json({ removed: true });


    }catch(err){
    console.error("Error deleting calendar:", err);
    return res.status(500).json({ error: "Internal server error" });
    }
}

// #### ADD CALENDAR ####
async function addCalendar(req, res){
  let googleId = req.session?.googleId;
  let calendarId = req.body?.calendarId;
  let calendarName = req.body?.summary;

  if (!googleId) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  if (typeof calendarName !== "string" || !calendarName.trim()) {
    return res.status(400).json({ error: "summary is required" });
  }

    try{
      // pull the calendar from the array; returns the *old* doc by default
      const result = await User.updateOne(
        { googleId },
        { $push: { calendars: {calendarId, calendarName: calendarName.trim() } } }
      );
      if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ added: true });


    }catch(err){
    console.error("Error adding calendar:", err);
    return res.status(500).json({ error: "Internal server error" });
    }
}


// ############################ Process Data Functions ##############################
async function getGoogleCalendars(req, res, next){
  const googleId = req.session.googleId
  let calendarList = []
   try{
    const refreshToken = await getRefreshToken(googleId);
    if(!refreshToken){
      throw new Error("No refresh token found. Please re-authenticate.");
    }

    oauth2Client.setCredentials({refresh_token: refreshToken})
    const calendar = google.calendar({version: "v3", auth: oauth2Client});

    const response  = await calendar.calendarList.list(); // get the list of available calendars
    if(response.data.items && response.data.items.length > 0){
      // for ... of to handle async functions
      for(const calendar of response.data.items) {
          const activeStatus = await isActiveCalendar(googleId, calendar.summary, calendar.primary);
          calendarList.push({
            calendarId: calendar.id,
            calendarSummary: calendar.summary,
            primary: calendar.primary || false,
            activeCalendar: activeStatus
          });
        }
         res.locals.googleCalendarList = calendarList;
          return next();
    }
  }catch (error) {

      console.error("Error in getDetailEventsMiddleware:", error);
      if (!res.headersSent) {
        next(error); 
      }
    }
   


}


// !===================== modify this function to obtain data from other calendars as well ===========

async function getEvents(googleId, dates, week)
{
  let startDate = new Date()
  let endDate = new Date()

  if(week == "first"){
     startDate = new Date(dates.weekOneStart).toISOString();
     endDate = new Date(dates.weekOneEnd).toISOString();
  }else{
     startDate = new Date(dates.weekTwoStart).toISOString();
     endDate = new Date(dates.weekTwoEnd).toISOString();
  }


  try{
    const refreshToken = await getRefreshToken(googleId);
    
    if (!refreshToken) {
      throw new Error("No refresh token found. Please re-authenticate.");
      }
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.events.list({
        calendarId: "c_7975778d748742b67dab5baa7ee47365a2f73f30e5f0a2c36085912a5cc07580@group.calendar.google.com",
        timeMin: startDate,
        timeMax: endDate,
        singleEvents: true,
        orderBy: "startTime",
      });

      return response.data.items;


} catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(`Error fetching events: ${error}`);
  }


}

function filterDateEvents(startDateTime, endDateTime) {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  // Extract only the date part
  const startStr = startDate.toLocaleDateString("en-US");
  const endStr = endDate.toLocaleDateString("en-US");

  // If both are the same day → just one date
  if (startStr === endStr) {
    return startStr;
  }

  // Otherwise → show range
  return `${startStr} - ${endStr}`;
}

async function filterEvents(googleId, eventList){
  let filteredData = [];
  try{
    let user = await User.find({googleId});
    let jobs = await Workplace.find(user._id);
  
    if(jobs.length > 0 ){
  
      eventList.forEach((event)=>{
        if(event.summary && event.summary.toLowerCase().includes("shift")){
  
         jobs.forEach((job)=>{
  
          if(event.summary.toLowerCase().includes(job.workplace.toLowerCase())){
            let totalHours = (new Date(event.end.dateTime) - new Date(event.start.dateTime)) / (1000 * 60 * 60);
            let totalWage = totalHours * job.hourlyRate;
  
  
            filteredData.push({
              workplace: job.workplace,
              wage: job.hourlyRate,
              date: filterDateEvents(event.start.dateTime, event.end.dateTime),
              startTime: new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              endTime: new Date(event.end.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),

              totalWage: Math.round(totalWage * 100) / 100,
              totalHours: Math.round(totalHours * 100) / 100
            }
              
            )
          }
         })
    
        }
      })
    }
  
  }catch(err){
    throw new Error(`Error Filtering Events ${err}`);

  }

    return filteredData;
 

}

async function summaryEvents(filteredEvents){
try{
  let summaryOfEvents = [];
  let existingSummary;
  filteredEvents.forEach((event)=>{

    if(summaryOfEvents.length > 0){
      existingSummary = summaryOfEvents.find(
        briefEvent => briefEvent.workplace.toLowerCase() === event.workplace.toLowerCase()
      );
    }

    if (existingSummary){
      existingSummary.totalWage += event.totalWage;
      existingSummary.totalHours += event.totalHours;
    }else{
      summaryOfEvents.push({
        workplace : event.workplace,
        wage : event.wage,
        totalWage : event.totalWage, 
        totalHours : event.totalHours
      })
    }

   
  })

  return summaryOfEvents;
}catch(err){
  throw new Error(`Error Filtering Events ${err}`);

}


}

async function summaryUser(summaryEvents, dates, googleId){
  try{
    let username = await User.findOne(googleId);
    if(!username){
      username = '';
    }else{
      username = username.name;
    }
    let data = {
      username: username,
      paycheck : 0,
      totalHours : 0, 
      checkDay : dates.checkDay,
      startWeekOne: dates.weekOneStart,
      endWeekOne: dates.weekOneEnd,
      startWeekTwo: dates.weekTwoStart,
      endWeekTwo: dates.weekTwoEnd,
    };

    if(summaryEvents){
      for(let i = 0; i < 2; i++){
        let summEvent = summaryEvents[i];
          summEvent.forEach((event)=>{
                    data.paycheck += event.totalWage;
                    data.totalHours += event.totalHours;
                })
                
      }
      
    }
    data.taxedPaycheck = (data.paycheck * 0.8898395722).toFixed(2);
    return data;

  }catch(err){
  throw new Error(`${err}`);

  }
 

}
function httpError(statusCode, message) {
  const e = new Error(message);
  e.statusCode = statusCode;
  return e;
}


// ############################ API / End Point Data Collector #############################
async function dataCollector(req, res, next){
        const googleId = req.session.googleId;
        const index = req.query.index;

        
        if (!googleId) throw httpError(401, "Not authenticated with Google.");
        if (index == null) throw httpError(400, "Missing 'index' query param.");
        
        // Obtain an object with the start/end dates from each week with the index (index 0 = current date). 
        // It is retrieved from a JSON file 
        const dateObject = getDates(index);

        if(dateObject == null)throw httpError(404, "No valid dates")

        res.locals.dates = dateObject;

        // obtain a list of events from the active calendars (in DB) and according to the week prompted
        const firstWeekEvents = await getEvents( googleId, dateObject, "first");
        const secondWeekEvents = await getEvents( googleId, dateObject, "second");
        
        if (!firstWeekEvents || !secondWeekEvents) {
          throw httpError(404, "No events returned for the given dates.");
        }

        let firstWeekFilteredData = await filterEvents(googleId, firstWeekEvents);
        let secondWeekFilteredData = await filterEvents(googleId, secondWeekEvents);

        res.locals.filteredData = {
          "first" : firstWeekFilteredData,
          "second" : secondWeekFilteredData
        };

        // Provides an array as a summary of all events from each week [workplace, wage, totalWage, totalHours]
        let firstWSummaryData = await summaryEvents(firstWeekFilteredData);
        let secondWSummaryData = await summaryEvents(secondWeekFilteredData);

        res.locals.summaryData = {
          "first" : firstWSummaryData,
          "second" : secondWSummaryData
        };

        // Provides an array as a general summary of the user's activity. 
        // [ username, paycheck, totalHours, checkDay, startWeekOne, endWeekOne, startWeekTwo, endWeekTwo]
        let userSummary = await summaryUser([firstWSummaryData, secondWSummaryData], dateObject);

        res.locals.summaryUser = userSummary;

        return next();
}


// ############################ End Point Data Collector #############################

async function getDetailEvents(req, res, next){
  const filteredData = res.locals.filteredData;
  res.json(filteredData);
}


async function getSummaryEvents(req, res){
        let summary = res.locals.summaryData;
        res.json(summary);

}

async function getSummaryUser(req, res){
  let summaryUser = res.locals.summaryUser;
  res.json(summaryUser);
}

async function getCalendars(req, res){
  let calendars = res.locals.googleCalendarList;
  res.json(calendars);
}

async function getActiveCalendars(req, res){
  const googleId = req.session.googleId
  try{
    let user = await User.findOne({googleId})
    if(user){
      res.json(user.calendars)
    }else{
      console.log("No user found")
    }

  }catch(err){
    console.log(err)
  }
}



module.exports = {getSummaryEvents, getDetailEvents, dataCollector, getSummaryUser, getGoogleCalendars, getCalendars, getActiveCalendars,
  addCalendar, deleteCalendar
}