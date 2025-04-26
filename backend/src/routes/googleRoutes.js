const express = require("express");
const googleController = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use("/api", googleController.dataCollector );

router.get("/api/detailedEvents",googleController.getDetailEvents);

router.get("/api/summaryEvents",  googleController.getSummaryEvents);

router.get("/api/summaryUser",  googleController.getSummaryUser);



module.exports = router;
