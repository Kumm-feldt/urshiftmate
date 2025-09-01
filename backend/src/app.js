const express = require("express");
const session = require("express-session");
const cors = require("cors");
require('dotenv').config();
const path = require("path");
const MongoStore = require('connect-mongo');

const authRoutes = require("./routes/authRoutes");
const googleRoutes = require("./routes/googleRoutes");
const userConfigRoutes = require("./routes/crudRoutes.js")

const config = require("./config/config")

const app = express();

const expressSession = require('express-session');
const sessionFileStore = require('session-file-store');
const { logout } = require("./controllers/authController.js");
const FileStore = sessionFileStore(expressSession)



app.use(express.json());
app.use(session({
  name: "sc.sid",
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 14,


  },
}));

// Configure CORS to allow requests from frontend (React)
app.use(cors({
  origin: [
    "https://urshiftmate.com",      // Remove www version
    "https://www.urshiftmate.com",  // Keep www version
    "https://urshiftmate.vercel.app"
],   // Production frontend
  credentials: true,  // Allow cookies/session sharing
}));


app.use("/auth", authRoutes);



app.use("/google", googleRoutes);
app.use("/user/config", userConfigRoutes);
app.use("/logout", logout);

// Central error handler 
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;

  const payload = {
    ok: false,
    error: {
      code: status,
      message: err.message || "Internal Server Error",
      // optional extra fields you might attach in controllers:
      details: err.details || undefined,
    },
  };

  res.status(status).json(payload);
});


app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});
// Endpoint to get session userId
app.get("/user/session", (req, res) => {
  res.json({ userId: req.session.googleId || null });
});

// Serve static files from the Vite build
app.use(express.static(config.staticDir));

module.exports = app;
