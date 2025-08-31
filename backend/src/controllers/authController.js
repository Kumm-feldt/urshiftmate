const { User } = require("../models/User");
const { google } = require("googleapis");
require('dotenv').config();
const crypto = require('crypto');


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
  // req.session.oauthState = state;

  // If you can identify the user before auth (e.g., existing session),
  // check whether they already have a refresh token:
  const googleId = req.session?.googleId;
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
    // If user already granted and we have refresh, try silent;
    // otherwise FORCE consent so Google issues/returns refresh_token.
    prompt: hasRefresh ? "none" : "consent",
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
    state,
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

    // Set user session
    req.session.googleId = googleId;
    req.session.isAuthenticated = true;

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
