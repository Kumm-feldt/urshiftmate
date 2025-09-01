const express = require("express");
const { googleOAuth2ConsentScreen, oAuth2CallbackHandler, logout } = require("../controllers/authController");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get("/google", googleOAuth2ConsentScreen);
router.get("/google/callback", oAuth2CallbackHandler);
router.get("/logout", logout);

router.get("/verify-token", (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ isAuthenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ 
      isAuthenticated: true, 
      user: { googleId: decoded.googleId, name: decoded.name }
    });
  } catch (error) {
    return res.status(401).json({ isAuthenticated: false });
  }
});


module.exports = router;
