const { User } = require("../models/User");
const { google } = require("googleapis");
require('dotenv').config();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

let red_uri_frontend;
if (process.env.MODE == 'dev') {
  red_uri_frontend = process.env.CORS_LINK;
} else {
  red_uri_frontend = process.env.PROD_CORS_LINK;
}

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);
function generateState() {
  return crypto.randomBytes(16).toString('hex');
}

exports.googleOAuth2ConsentScreen = async (req, res) => {
  const state = generateState();
  // OPTIONAL: stash state for CSRF protection
  // req.userInfo.oauthState = state;

  // If you can identify the user before auth (e.g., existing session),
  // check whether they already have a refresh token:
  const googleId = req.userInfo?.googleId;
  let hasRefresh = false;
  if (googleId) {
    const existing = await User.findOne({ googleId }, { refreshToken: 1 });
    hasRefresh = !!existing?.refreshToken;
  }

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",                     // Required for refresh_token
    include_granted_scopes: true,
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/calendar.readonly",
    ],
    // For returning users with refresh token, use select_account
    // For new users, use consent to ensure refresh_token
    prompt: "select_account",
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
    state,
  });

  res.redirect(url);
};

// Handle OAuth2 callback
exports.oAuth2CallbackHandler = async (req, res) => {
  const { code, error, state } = req.query;
  const authMode = 'silent';


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

    // Create JWT token 
    const jwtToken = jwt.sign(
      { googleId, name, email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '14d' }
    );
    // Redirect with token as query parameter
    console.log("TOKE:", jwtToken)
    res.redirect(`${red_uri_frontend}/auth-success?token=${jwtToken}`);

  } catch (error) {
    console.error("OAuth callback error:", error);
    res.status(500).send("Authentication failed.");
  }
};

// Logout function
exports.logout = (req, res) => {
  // res.clearCookie("user");
  req.userInfo.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Error logging out");
    }
    res.redirect(`${red_uri_frontend}/login`);

  });
};
