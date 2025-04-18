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


async function getEvents(req, res, googleId, dates)
{

  try{
    const refreshToken = await getRefreshToken(googleId);
    
    if (!refreshToken) {
        return res.status(401).json({ error: "No refresh token found. Please re-authenticate." });
      }
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.events.list({
        calendarId: "primary",
        timeMin: dates.weekOneStart,
        timeMax: dates.weekTwoEnd,
        singleEvents: true,
        orderBy: "startTime",
      });

      return response.data.items;


} catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: error.message });
}


}

async function filterEvents(req, res, next, eventList){
  const googleId = req.session.googleId;
  let filteredData = [];
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

    return filteredData;
 

}

async function summaryEvents(req, res, next, filteredEvents){

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

}



async function getDetailEvents(req, res, next){
    try{
        const googleId = req.session.googleId;

        const dateObject = getDates();
        const events = await getEvents(req, res, googleId, dateObject);
        console.log("----------------->", events);


        let filteredData = await filterEvents(req, res, next, events);
        res.locals.filteredData = filteredData;
        res.json(filteredData);
        next();
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: error.message });
    }
      
    
}

async function getSummaryEvents(req, res, filteredEvents){
  try{
      
        let summary = await summaryEvents(req, res, next, res.locals.filteredData);
        res.json(summary);
        console.log("Summary: " , summary)
        console.log("filteredData: ->>>>>>>>>" , filteredData)
        


  } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: error.message });
  }
    
  
}


module.exports = {getSummaryEvents, getDetailEvents}