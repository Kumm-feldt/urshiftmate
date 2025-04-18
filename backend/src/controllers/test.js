const express = require('express');
const { google } = require('googleapis');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const app = express();
app.use(cookieParser());

// Configure OAuth client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

// Define scopes for calendar access
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// In-memory token store (use a database in production)
const tokenStore = {};

// Generate a random state value for CSRF protection
function generateState() {
  return crypto.randomBytes(16).toString('hex');
}

// Silent login route - try with prompt=none first
app.get('/auth/google', (req, res) => {
  // Generate state token for security
  const state = generateState();
  
  // Store state in cookies instead of session
  res.cookie('authState', state, { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 5 * 60 * 1000 // 5 minutes
  });
  
  // Store that we're trying silent auth first
  res.cookie('authMode', 'silent', { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 5 * 60 * 1000
  });
  
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'none', // First try without prompting
    state: state,
    include_granted_scopes: true
  });
  
  res.redirect(authUrl);
});

// OAuth callback route
app.get('/oauth2callback', async (req, res) => {
  const { code, error, state } = req.query;
  const authState = req.cookies.authState;
  const authMode = req.cookies.authMode || 'silent';
  
  // Clear cookies
  res.clearCookie('authState');
  res.clearCookie('authMode');
  
  // Verify state for security
  if (state !== authState) {
    return res.status(403).send('Invalid state parameter');
  }
  
  // If error with silent auth, try with consent
  if (error && authMode === 'silent') {
    // Generate new state
    const newState = generateState();
    
    // Store new state and updated mode in cookies
    res.cookie('authState', newState, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 5 * 60 * 1000
    });
    
    res.cookie('authMode', 'consent', { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 5 * 60 * 1000
    });
    
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent', // Now explicitly ask for consent
      state: newState,
      include_granted_scopes: true
    });
    
    return res.redirect(authUrl);
  }
  
  // Handle other errors
  if (error) {
    console.error('OAuth error:', error);
    return res.status(400).send(`Authentication failed: ${error}`);
  }
  
  // Process the successful authorization
  try {
    // Exchange authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    
    // Get user info to identify the user
    oauth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2'
    });
    
    const userInfo = await oauth2.userinfo.get();
    const userId = userInfo.data.id;
    
    // Store tokens associated with user ID
    tokenStore[userId] = tokens;
    
    // Set an auth cookie with user ID (not the tokens themselves)
    res.cookie('userId', userId, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });
    
    // Redirect to app
    res.redirect('/app');
  } catch (error) {
    console.error('Error retrieving tokens:', error);
    res.status(500).send('Failed to complete authentication');
  }
});

// API endpoint example
app.get('/api/calendar/events', async (req, res) => {
  const userId = req.cookies.userId;
  
  // Check if user is authenticated
  if (!userId || !tokenStore[userId]) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  try {
    // Set credentials
    oauth2Client.setCredentials(tokenStore[userId]);
    
    // Create calendar API client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    
    // Get calendar events
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    });
    
    // If tokens were refreshed, update stored tokens
    if (oauth2Client.credentials.access_token !== tokenStore[userId].access_token) {
      tokenStore[userId] = oauth2Client.credentials;
    }
    
    res.json(response.data.items);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    
    // If token is invalid, clear auth cookie and redirect to login
    if (error.code === 401) {
      res.clearCookie('userId');
      delete tokenStore[userId];
      return res.status(401).json({ error: 'Session expired', redirectTo: '/auth/google' });
    }
    
    res.status(500).json({ error: 'Failed to fetch calendar events' });
  }
});

// App home page (protected)
app.get('/app', async (req, res) => {
  const userId = req.cookies.userId;
  
  if (!userId || !tokenStore[userId]) {
    return res.redirect('/auth/google');
  }
  
  try {
    // Get user info
    oauth2Client.setCredentials(tokenStore[userId]);
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2'
    });
    
    const userInfo = await oauth2.userinfo.get();
    
    res.send(`
      <h1>Welcome, ${userInfo.data.name}!</h1>
      <p>You are signed in with Google.</p>
      <button onclick="fetch('/api/calendar/events').then(r => r.json()).then(console.log)">
        View Calendar Events in Console
      </button>
      <button onclick="document.cookie='userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; window.location='/'">
        Sign Out
      </button>
    `);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.clearCookie('userId');
    res.redirect('/auth/google');
  }
});

// Root route
app.get('/', (req, res) => {
  const userId = req.cookies.userId;
  
  if (userId && tokenStore[userId]) {
    return res.redirect('/app');
  }
  
  res.send(`
    <h1>Google Calendar App</h1>
    <p>Sign in to access your calendar:</p>
    <a href="/auth/google">Sign in with Google</a>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});