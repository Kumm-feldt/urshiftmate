const express = require("express");
const session = require("express-session");
const cors = require("cors");
require('dotenv').config();


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
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    secure: false, 
    httpOnly: true,
    sameSite: "lax",
  },
}));

// Configure CORS to allow requests from frontend (React)
app.use(cors({
  origin: "http://localhost:3000",  // Allow frontend origin
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
    message: err.message || "Internal Server Error",
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

module.exports = app;
