const express = require("express");
const googleController = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/detailedEvents", isAuthenticated, googleController.getDetailEvents);

router.get("/summaryEvents", isAuthenticated, googleController.getDetailEvents ,googleController.getSummaryEvents);


module.exports = router;
