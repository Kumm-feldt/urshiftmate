const express = require("express");
const router = express.Router();
const workplaceController = require("../controllers/workplaceController");
const { deleteCalendar, addCalendar, getGoogleCalendars, getCalendars, getActiveCalendars, deleteWorkplace } = require("../controllers/googleController");
const { create } = require("../controllers/oneTimeSetup");
const { getRandomPhrase } = require("../controllers/generalController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

// +++++++++ /worplace +++++++++
router.use("/workplace", verifyJWT);
router.post("/workplace", workplaceController.addWorkplace);
router.get("/workplace", workplaceController.getWorkplace);
router.delete("/workplace/:workplaceId", deleteWorkplace);

// +++++++++ /calendars +++++++++
router.use("/calendars", verifyJWT);
router.get("/calendars", getGoogleCalendars, getCalendars)
router.get("/calendars/active", getActiveCalendars);
router.put("/calendars/delete", deleteCalendar);
router.put("/calendars/add", addCalendar);


// not need JWT, one time routes
router.get("/create/setup", create);
router.get("/randomPhrase", getRandomPhrase)

module.exports = router;