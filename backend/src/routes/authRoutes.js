const express = require("express");
const { googleOAuth2ConsentScreen, oAuth2CallbackHandler, logout } = require("../controllers/authController");

const router = express.Router();

router.get("/google", googleOAuth2ConsentScreen);
router.get("/google/callback", oAuth2CallbackHandler);
router.post("/logout", logout);

// ✅ New: Check authentication status
router.get("/status", (req, res) => {
    if (req.session.isAuthenticated) {
        res.json({ isAuthenticated: true, user: req.session.userId });
    } else {
        res.json({ isAuthenticated: false });
    }
});

module.exports = router;
