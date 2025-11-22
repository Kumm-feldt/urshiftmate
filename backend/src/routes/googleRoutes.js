const express = require("express");
const { 
  PaycheckController, 
  CalendarController 
} = require("../controllers/googleController");
const { 
  WorkplaceController, 
} = require("../controllers/workplaceController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const { asyncHandler } = require("../middlewares/asyncHandler");

const router = express.Router();

// ############################ Global JWT Protection ############################
router.use(verifyJWT);

// ############################ Paycheck Resources ############################
// GET /api/paychecks/summary?index=0
// Returns: Complete paycheck information with both weeks' data
router.get(
  "/paychecks/summary", 
  asyncHandler(PaycheckController.getPaycheckSummary)
);

// GET /api/paychecks/details?index=0
// Returns: Detailed shift events for both weeks
router.get(
  "/paychecks/details", 
  asyncHandler(PaycheckController.getPaycheckDetails)
);

// GET /api/paychecks/overview?index=0
// Returns: Basic user info and date ranges (no event data)
router.get(
  "/paychecks/overview", 
  asyncHandler(PaycheckController.getPaycheckOverview)
);

// ############################ Calendar Resources ############################
// GET /api/calendars
// Returns: All available Google calendars with active status
router.get(
  "/calendars", 
  asyncHandler(CalendarController.list)
);

// GET /api/calendars/active
// Returns: Currently active calendars only
router.get(
  "/calendars/active", 
  asyncHandler(CalendarController.listActive)
);

// POST /api/calendars
// Body: { calendarId, summary }
// Returns: { added: true }
router.post(
  "/calendars", 
  asyncHandler(CalendarController.add)
);

// DELETE /api/calendars
// Body: { calendarId, primary }
// Returns: { removed: true } or { removed: false, message }
router.delete(
  "/calendars", 
  asyncHandler(CalendarController.remove)
);

// GET /api/calendars/exists
// Returns: { exists: boolean }
router.get(
  "/calendars/exists", 
  asyncHandler(CalendarController.checkExists)
);



module.exports = router;
