const express = require("express");
const router = express.Router();

const { WorkplaceController } = require("../controllers/workplaceController");
const { CalendarController } = require("../controllers/googleController");
const { create } = require("../controllers/oneTimeSetup");
const { getRandomPhrase } = require("../controllers/generalController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const { asyncHandler } = require("../middlewares/asyncHandler");

// +++++++++ /workplace +++++++++
router.use("/workplace", verifyJWT);
router.post("/workplace", asyncHandler(WorkplaceController.add));
router.get("/workplace", asyncHandler(WorkplaceController.get));

// DELETE /api/workplace/:workplaceId
// Returns: { deleted: true }
router.delete(
  "/workplace/:workplaceId",
  asyncHandler(WorkplaceController.remove)
);

// +++++++++ /calendars +++++++++
router.use("/calendars", verifyJWT);

// GET /api/calendars - Get all Google calendars with active status
router.get("/calendars", asyncHandler(CalendarController.list));

// GET /api/calendars/active - Get only active calendars
router.get("/calendars/active", asyncHandler(CalendarController.listActive));

// POST /api/calendars - Add a calendar
// Body: { calendarId, summary }
router.post("/calendars", asyncHandler(CalendarController.add));

// DELETE /api/calendars - Remove a calendar
// Body: { calendarId, primary }
router.delete("/calendars", asyncHandler(CalendarController.remove));

// GET /api/calendars/exists - Check if user has active calendars
router.get("/calendars/exists", asyncHandler(CalendarController.checkExists));

// +++++++++ One-time routes (no JWT) +++++++++
router.get("/create/setup", create);
router.get("/randomPhrase", getRandomPhrase);

module.exports = router;
