const express = require('express')
const config = require('../config.js')
const app = express();
require('dotenv').config();

const process = require('process');
const {google} = require('googleapis');

const { User } = require('./users.js');
const { Workplace } = require('./workplace.js');

async function addUser(name, email, refreshToken, googleId){
    const user = new User();
    user.name = name;
    user.email  = email;
    user.refreshToken = refreshToken,
    user.googleId = googleId;

    await user.save();
}

async function checkUserExists(_googleId, req){
    let userExists = await User.find({googleId: _googleId });
    if(userExists){
        req.session.userId = _googleId;
    }else{
        return false; 
    }

}
// insert workplace
app.post("/api/workplaces/insert", async (req, res) => {
    const { workplace, hourlyRate } = req.body;
    const userId = req.session.userId;
  
    const newWorkplace = new Workplace({
      userId,
      workplace,
      hourlyRate,
    });
  
    await newWorkplace.save();
    res.json(newWorkplace);
  });
  


app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  }))


  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );


  // Redirect users to Google OAuth2 consent screen
app.get("/auth/google", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar.readonly"],
    });
    res.redirect(url);
  });
  
  // Handle OAuth2 callback
  app.get("/auth/google/callback", async (req, res) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
  
    // Save the refresh token to the database (associated with the user)
    const userId = req.session.userId; // Assume you have a way to identify the user
    await saveUserCredentials(userId, tokens.refresh_token);
  
    res.send("Authentication successful!");
  });
  
// Save user credentials to the database
async function saveUserCredentials(userId, refreshToken) {
    // Save to your database (e.g., MongoDB, PostgreSQL)
    // Example: db.collection("users").updateOne({ userId }, { $set: { refreshToken } }, { upsert: true });
  }

  // Retrieve the user's refresh token from the database
async function getRefreshToken(userId) {
    // Fetch from your database (e.g., MongoDB, PostgreSQL)
    // Example: const user = await db.collection("users").findOne({ userId });
    // return user.refreshToken;
  }


// Fetch events for the authenticated user
app.get("/api/events", async (req, res) => {
    try {
      const userId = req.session.userId; // Identify the user
      const refreshToken = await getRefreshToken(userId); // Retrieve the user's refresh token from the database
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });
  
      res.json(response.data.items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  app.get("/api/calendars", async (req, res) => {
    const userId = req.session.userId; // Identify the user
    const refreshToken = await getRefreshToken(userId); // Retrieve the user's refresh token from the database

    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });


    calendar.calendarList.list({}, (error, response)=>{
     if(error){
         console.log(error);
         res.send(error);
         return;
     }
     const calendars = response.data.items;
     res.json(calendars);
    })
   });
 
 

module.exports = app; 

