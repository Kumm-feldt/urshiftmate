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


module.exports = router;
