const express = require("express");
const router = express.Router();
const middleware = require("./middleware.js")



router.get("/auth/google", middleware.googleOAuth2ConsentScreen);
router.get("/auth/google/callback", middleware.oAuth2CallbackHandler)



module.exports = router;