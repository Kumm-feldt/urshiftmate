const express = require("express");
const session = require("express-session");
const cors = require("cors");
require('dotenv').config();


const authRoutes = require("./routes/authRoutes");
const googleRoutes = require("./routes/googleRoutes");

const config = require("./config/config")

const app = express();

app.use(express.json());
app.use(session({ secret: config.sessionSecret, resave: false, saveUninitialized: false }));

// ✅ Configure CORS to allow requests from frontend (React)
app.use(cors({
  origin: "http://localhost:3000",  // Allow frontend origin
  credentials: true,  // Allow cookies/session sharing
}));


app.use("/auth", authRoutes);
app.use("/google", googleRoutes);

module.exports = app;
