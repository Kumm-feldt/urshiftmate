const app = require("../app.js");
const mongoose = require("mongoose");
const {User} = require("../../../src/models/User.js");
const {Workplace} = require("../../../models/Workplace.js");
const { google } = require("googleapis");

// Set up the OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);


async function checkUserExists(googleId){
    try{
        let userExists = await User.findOne({googleId });
        return userExists ? userExists : false
    }catch(err){
        console.log(err)
    }
  
}


// Get a user's refresh token
async function getRefreshToken(googleId) {
    try {
      const user = await User.findOne({ googleId });
      return user ? user.refreshToken : false;
    } catch (err) {
      console.error("Error getting refresh token:", err);
      return false;
    }
  }
  



// ============== CRUD =================

// Create user
async function createUser(googleId, name, email, refreshToken) {
    const user = new User({
        googleId: googleId,
        name: name,
        email: email,
        refreshToken: refreshToken
    })

    try{
        await user.save();

    }catch(err){
        console.log(err);
    }
  }

// insert workplace
async function addWorkplace (req, res) {
    const { workplace, hourlyRate } = req.body;
    const userId = req.locals.userId;
  
    const newWorkplace = new Workplace({
      userId,
      workplace,
      hourlyRate,
    });
  try{
    await newWorkplace.save();
    res.json(newWorkplace);


  }catch(err){
    console.error("Error adding workplace:", err);
    res.status(500).json({ error: "Failed to add workplace" });
  }

  };
  



// =========== GOOGLE AUTH ==============
/*
  // Redirect users to Google OAuth2 consent screen
async function googleOAuth2ConsentScreen (req, res) {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/calendar.readonly"
        ],
        prompt: "consent" // This ensures you get a refresh token every time
      });
      res.redirect(url);
  };
  
// Handle OAuth2 callback
async function oAuth2CallbackHandler(req, res) {
    try {
      const { code } = req.query;
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
  
      // Get user info from Google
      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2"
      });
      
      const { data } = await oauth2.userinfo.get();
      const { id: googleId, name, email } = data;
  
      // Check if user exists, if not create a new one
      let user = await checkUserExists(googleId);
      if (!user) {
        user = await createUser(googleId, name, email, tokens.refresh_token);
      } else {
        // Update the refresh token if it's different
        if (tokens.refresh_token && user.refreshToken !== tokens.refresh_token) {
          user.refreshToken = tokens.refresh_token;
          await user.save();
        }
      }
  
      // Set user info in session
      req.userInfo.googleId = googleId;
      req.userInfo.isAuthenticated = true;
  
      // Redirect to dashboard or home page
      res.redirect('/dashboard');
    } catch (error) {
      console.error("OAuth callback error:", error);
      res.status(500).send("Authentication failed. Please try again.");
    }
  }
  
*/


// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.userInfo.isAuthenticated) {
      return next();
    }
    res.redirect('/login');
  }
  


// =========== GOOGLE API ==============
// Fetch events from Google Calendar
async function getEvents(req, res) {
    try {
      const googleId = req.userInfo.googleId;
      const refreshToken = await getRefreshToken(googleId);
  
      if (!refreshToken) {
        return res.status(401).json({ error: "No refresh token found. Please re-authenticate." });
      }
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 50,
        singleEvents: true,
        orderBy: "startTime",
      });
  
      res.json(response.data.items);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: error.message });
    }
  }
  
  // Get list of user's calendars
  async function getCalendars(req, res) {
    try {
      const googleId = req.userInfo.googleId;
      const refreshToken = await getRefreshToken(googleId);
  
      if (!refreshToken) {
        return res.status(401).json({ error: "No refresh token found. Please re-authenticate." });
      }
  
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  
      const response = await calendar.calendarList.list();
      res.json(response.data.items);
    } catch (error) {
      console.error("Error fetching calendars:", error);
      res.status(500).json({ error: error.message });
    }
  }
  
// Logout function
function logout(req, res) {
    req.userInfo.destroy(err => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Error logging out");
      }
      res.redirect('/login');
    });
  }
  


  module.exports = {
    isAuthenticated,
    getEvents,
    getCalendars,
    addWorkplace,
    logout
  };