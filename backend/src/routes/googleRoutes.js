const express = require("express");
const googleController = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { asyncHandler } = require("../middlewares/asyncHandler");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

const router = express.Router();

// returns true or false if there is calendars in db if it is true do not call the other endpoints (in the frontend)
router.use("/api", verifyJWT)
// I avoided using .use() because it needs to access ?index query param 
router.get("/api/user/info", asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.getIndependentUserSummary))

router.get("/api/existCalendars", asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.existCalendarsInDb));

router.get("/api/detailedEvents",asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getDetailEvents));

router.get("/api/paymentPerWeek",  asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getPaymentPerWeek));

router.get("/api/summaryEvents",  asyncHandler(googleController.independentUserSummary),asyncHandler(googleController.dataCollector),  asyncHandler(googleController.getSummaryEvents));

router.get("/api/summaryUser",  asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getSummaryUser));


module.exports = router;
