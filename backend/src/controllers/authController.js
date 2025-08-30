const { User } = require("../models/User");
const { google } = require("googleapis");
require('dotenv').config();
const crypto = require('crypto');
// import jwt from "jsonwebtoken";


const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL 
);
function generateState() {
  return crypto.randomBytes(16).toString('hex');
}
// Redirect users to Google OAuth2 consent screen
exports.googleOAuth2ConsentScreen = (req, res) => {
  const state = generateState();

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/calendar.readonly",
    ],
    prompt: "none",
    include_granted_scopes: true,
    redirect_uri: process.env.GOOGLE_REDIRECT_URL // Make sure this matches your registered redirect URI

  });
  res.redirect(url);
};

// Handle OAuth2 callback
exports.oAuth2CallbackHandler = async (req, res) => {
  const { code, error, state } = req.query;
  const authMode =  'silent';
  
  
  // If error with silent auth, try with consent
  if (error && authMode === 'silent') {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/calendar.readonly",
      ],
      prompt: 'select_account', 
      include_granted_scopes: true,
      redirect_uri: process.env.GOOGLE_REDIRECT_URL
    });
    return res.redirect(authUrl);
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ auth: oauth2Client, version: "v2" });
    const { data } = await oauth2.userinfo.get();
    const { id: googleId, name, email } = data;

    let user = await User.findOne({ googleId });
    if (!user) {
      user = new User({ googleId, name, email, token: tokens.access_token, refreshToken: tokens.refresh_token });
      await user.save();
    } else if (tokens.refresh_token && user.refreshToken !== tokens.refresh_token) {
      user.refreshToken = tokens.refresh_token;
      await user.save();
    }

  res.redirect("http://localhost:3000/dashboard");

} catch (error) {
    console.error("OAuth callback error:", error);
    res.status(500).send("Authentication failed.");
  }
};

// Logout function
exports.logout = (req, res) => {
 // res.clearCookie("user");
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Error logging out");
    }
    res.redirect("http://localhost:3000/login");

  });
};
