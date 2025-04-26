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

function getDates() {
  const currentDate = new Date(); // parse the input string as Date

  for (const dateItem of dateFile) {
    const from = new Date(dateItem.weekOneStart);
    const to = new Date(dateItem.weekTwoEnd);

    if (currentDate >= from && currentDate <= to) {
      return {
        weekOneStart: dateItem.weekOneStart,
        weekOneEnd: dateItem.weekOneEnd,
        weekTwoStart: dateItem.weekTwoStart,
        weekTwoEnd: dateItem.weekTwoEnd,
        checkDay: dateItem.checkDate,
      };
    }
  }

  return null; // If no match found
}


async function getEvents(googleId, dates)
{
  const startDate = new Date(dates.weekOneStart).toISOString();
  const endDate = new Date(dates.weekTwoEnd).toISOString();


  try{
    const refreshToken = await getRefreshToken(googleId);
    
    if (!refreshToken) {
      throw new Error("No refresh token found. Please re-authenticate.");
      }
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.events.list({
        calendarId: "primary",
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

// ############################ Process Data Functions ##############################

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
              startTime: new Date(event.start.dateTime).toLocaleString(),
              endTime: new Date(event.end.dateTime).toLocaleString(),
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
      from: dates.weekOneStart,
      to: dates.weekTwoEnd
    };
    
    if(summaryEvents){
      summaryEvents.forEach((event)=>{
          data.paycheck += event.totalWage;
          data.totalHours += event.totalHours;
      })
    }
    return data;

  }catch(err){
  throw new Error(`${err}`);

  }
 

}


// ############################ API / End Point Data Collector #############################
async function dataCollector(req, res, next){
    try{
        const googleId = req.session.googleId || "103287971580046408707";

        const dateObject = getDates();
        res.locals.dates = dateObject;

        const events = await getEvents( googleId, dateObject);

        if (!events) {
          throw new Error("No events returned.");
        }


        let filteredData = await filterEvents(googleId, events);
        res.locals.filteredData = filteredData;

        let summaryData = await summaryEvents(filteredData);
        res.locals.summaryData = summaryData;
        
        let userSummary = await summaryUser(summaryData, dateObject);
        res.locals.summaryUser = userSummary;

        return next();
       
    } catch (error) {

      console.error("Error in getDetailEventsMiddleware:", error);
      if (!res.headersSent) {
        next(error); 
      }
    }
      
    
}


// ############################ End Point Data Collector #############################

async function getDetailEvents(req, res, next){
  const filteredData = res.locals.filteredData;
  res.json(filteredData);
}


async function getSummaryEvents(req, res){
        let summary = res.locals.summaryData;
        res.json(summary);
        console.log("############## Summary ##############\n" , summary)
        console.log("############## filteredData ############\n" , res.locals.filteredData)
}

async function getSummaryUser(req, res){
  let summaryUser = res.locals.summaryUser;
  res.json(summaryUser);
}



module.exports = {getSummaryEvents, getDetailEvents, dataCollector, getSummaryUser}