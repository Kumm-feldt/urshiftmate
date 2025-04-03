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
  let jobs = await Workplace.find({googleId});

  if(jobs.length > 0 ){
    eventList.forEach((event)=>{
      if(event.summary && event.summary.toLowerCase().includes("shift")){
       jobs.forEach((job)=>{

        if(event.summary.includes(job.workplace.toLowerCase())){
          let totalHours = (new Date(event.end.dateTime) - new Date(event.start.dateTime)) / (1000 * 60 * 60);
          let totalWage = totalHours * job.hourlyRate;


          filteredData.push({
            job: job.workplace,
            wage: job.hourlyRate,
            startTime: new Date(event.start.dateTime).toLocaleString(),
            endTime: new Date(event.end.dateTime).toLocaleString(),
            totalHours: totalHours.toFixed(2), // Round to 2 decimal places
            totalWage: totalWage.toFixed(2)
          }
            
          )
        }
       })
  
      }
    })
  }

}

async function getEvents(req, res){
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
         
            singleEvents: true,
            orderBy: "startTime",
          });

      
          res.json(response.data.items);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: error.message });
    }
      
    
}

module.exports = {getEvents}