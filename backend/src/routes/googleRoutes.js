const express = require("express");
const googleController = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
import { asyncHandler } from "../middlewares/asyncHandler";

const router = express.Router();



router.get("/api/detailedEvents", asyncHandler(googleController.dataCollector), asyncHandler(googleController.getDetailEvents));

router.get("/api/summaryEvents",  asyncHandler(googleController.dataCollector),  asyncHandler(googleController.getSummaryEvents));

router.get("/api/summaryUser",   asyncHandler(googleController.dataCollector), asyncHandler(googleController.getSummaryUser));



module.exports = router;
