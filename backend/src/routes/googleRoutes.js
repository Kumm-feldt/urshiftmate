const express = require("express");
const googleController = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { asyncHandler } = require("../middlewares/asyncHandler");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

const router = express.Router();

// +++++++ JWT verification +++++++
router.use("/api", verifyJWT)

// Proposed RESTful Routes
// GET /users/:userId -> user/info


// GET /users/:userId/summary


// GET /users/:userId/events


// GET /users/:userId/events/:week


// GET /users/:userId/calendars






// I avoided using .use() because it needs to access ?index query param 
router.get("/api/user/info", asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.getIndependentUserSummary))

router.get("/api/existCalendars", asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.existCalendarsInDb));

router.get("/api/detailedEvents",asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getDetailEvents));

router.get("/api/paymentPerWeek",  asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getPaymentPerWeek));

router.get("/api/summaryEvents",  asyncHandler(googleController.independentUserSummary),asyncHandler(googleController.dataCollector),  asyncHandler(googleController.getSummaryEvents));

router.get("/api/summaryUser",  asyncHandler(googleController.independentUserSummary), asyncHandler(googleController.dataCollector), asyncHandler(googleController.getSummaryUser));


module.exports = router;
