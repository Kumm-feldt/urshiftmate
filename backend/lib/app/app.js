const express = require('express')
const config = require('../config.js')
const app = express();
require('dotenv').config();

const {google} = require(googleapis);
const cors = require("cors");

// OAuth2 setup
const oauth2Client = new google.auth.OAth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

app.get("/api/events", async (req, res) => {
    try {
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




module.exports = app; 

