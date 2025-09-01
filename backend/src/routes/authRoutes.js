const express = require("express");
const { googleOAuth2ConsentScreen, oAuth2CallbackHandler, logout } = require("../controllers/authController");

const router = express.Router();

router.get("/google", googleOAuth2ConsentScreen);
router.get("/google/callback", oAuth2CallbackHandler);
router.get("/logout", logout);


router.get("/status", (req, res) => {
  console.log("=== AUTH STATUS DEBUG ===");
  console.log("Session ID:", req.sessionID);
  console.log("Session data:", req.session);
  console.log("Cookies:", req.cookies);
  console.log("Headers:", req.headers.cookie);
  console.log("========================");
  
  if (req.session?.isAuthenticated) {
    return res.json({ 
      isAuthenticated: true, 
      user: req.session.googleId 
    });
  }
  return res.status(401).json({ isAuthenticated: false });
});

// ++++++++++++++++++++++ test ++++++++++++++++++++++
router.get("/cookie-test", (req, res) => {
  // Set a simple cookie
  res.cookie('test-cookie', 'test-value', {
    httpOnly: false,  // Allow JavaScript to read it for testing
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60
  });
  
  res.json({ message: 'Cookie set' });
});

router.get("/cookie-check", (req, res) => {
  console.log("All cookies:", req.cookies);
  res.json({ 
    cookies: req.cookies,
    testCookie: req.cookies['test-cookie']
  });
});
module.exports = router;
