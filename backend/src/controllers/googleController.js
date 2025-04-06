const { google } = require("googleapis");
const { getRefreshToken } = require("./userController");
const { builtinModules } = require("module");
const {Workplace} = require("../models/Workplace");
const {User} = require("../models/User");



require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

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
        const refreshToken = await getRefreshToken(googleId);
        
        if (!refreshToken) {
            return res.status(401).json({ error: "No refresh token found. Please re-authenticate." });
          }
      
          oauth2Client.setCredentials({ refresh_token: refreshToken });
          const calendar = google.calendar({ version: "v3", auth: oauth2Client });
      
          const response = await calendar.events.list({
            calendarId: "primary",
            timeMin: new Date().toISOString(),
            maxResults: 3,
         
            singleEvents: true,
            orderBy: "startTime",
          });

          let filteredData = await filterEvents(req, res, next, response.data.items);
          res.json(filteredData);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: error.message });
    }
      
    
}

async function getSummaryEvents(req, res, next){
  try{
      const googleId = req.session.googleId;
      const refreshToken = await getRefreshToken(googleId);
      
      if (!refreshToken) {
          return res.status(401).json({ error: "No refresh token found. Please re-authenticate." });
        }
    
        oauth2Client.setCredentials({ refresh_token: refreshToken });
        const calendar = google.calendar({ version: "v3", auth: oauth2Client });
    
        const response = await calendar.events.list({
          calendarId: "c_191245c87c8794fc0500b30cd9c71fab062242eb1d3b39606c4faf9cebd20f73@group.calendar.google.com",
          timeMin: new Date().toISOString(),
          maxResults: 3,
          singleEvents: true,
          orderBy: "startTime",
        });

        let filteredData = await filterEvents(req, res, next, response.data.items);
        let summary = await summaryEvents(req, res, next, filteredData);
        res.json(summary);
        console.log("Summary: ->>>>>>>>>" , summary)
        console.log("filteredData: ->>>>>>>>>" , filteredData)
        



  } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: error.message });
  }
    
  
}


module.exports = {getSummaryEvents, getDetailEvents}