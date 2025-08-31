const express = require("express");
const { googleOAuth2ConsentScreen, oAuth2CallbackHandler, logout } = require("../controllers/authController");

const router = express.Router();

router.get("/google", googleOAuth2ConsentScreen);
router.get("/google/callback", oAuth2CallbackHandler);
router.get("/logout", logout);


router.get("/status", (req, res) => {
  if (req.session?.isAuthenticated) {

    return res.json({ isAuthenticated: true, user: req.session.userId });
  }
  return res.status(401).json({ isAuthenticated: false });
});


module.exports = router;
