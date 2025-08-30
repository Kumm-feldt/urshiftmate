const express = require("express");
const router = express.Router();
const workplaceController  = require("../controllers/workplaceController");
const { deleteCalendar, addCalendar, getGoogleCalendars, getCalendars, getActiveCalendars } = require("../controllers/googleController");
const { create } = require("../controllers/oneTimeSetup");
const { getRandomPhrase } = require("../controllers/generalController");

router.post("/workplace", workplaceController.addWorkplace);
router.get("/workplace", workplaceController.getWorkplace);

router.get("/calendars", getGoogleCalendars, getCalendars)
router.get("/calendars/active", getActiveCalendars);

router.put("/calendars/delete", deleteCalendar);
router.put("/calendars/add", addCalendar);

router.get("/create/setup", create);
router.get("/randomPhrase", getRandomPhrase)




module.exports = router;