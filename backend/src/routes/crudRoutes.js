const express = require("express");
const router = express.Router();
const workplaceController  = require("../controllers/workplaceController");
const { deleteCalendar, addCalendar, getGoogleCalendars, getCalendars, getActiveCalendars, deleteWorkplace} = require("../controllers/googleController");
const { create } = require("../controllers/oneTimeSetup");
const { getRandomPhrase } = require("../controllers/generalController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.post("/workplace",verifyJWT, workplaceController.addWorkplace);
router.get("/workplace", verifyJWT,workplaceController.getWorkplace);

router.get("/calendars", verifyJWT,getGoogleCalendars, getCalendars)
router.get("/calendars/active", verifyJWT,getActiveCalendars);

router.put("/calendars/delete",verifyJWT, deleteCalendar);
router.put("/calendars/add", verifyJWT,addCalendar);
router.delete("/workplace/:workplaceId", verifyJWT, deleteWorkplace);


// not need JWT
router.get("/create/setup", create);
router.get("/randomPhrase", getRandomPhrase)




module.exports = router;