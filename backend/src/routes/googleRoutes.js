const express = require("express");
const { getEvents } = require("../controllers/googleController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/events", isAuthenticated, getEvents);

module.exports = router;
