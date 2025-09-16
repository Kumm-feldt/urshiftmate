const express = require("express");
const { insertUser, checkPin, clockIn, clockOut, getUsers } = require("../controllers/clockController");
const router = express.Router();

// check if pin is correct for the selected user
router.use("/:pin/:name", checkPin)

// Create date & time Clock in
router.post("/:pin/:name/in", clockIn)

// Create date & time Clock out
router.post("/:pin/:name/out", clockOut)

// Insert user
router.post("/user", insertUser)


// Get all the users
router.get("/users", getUsers)

// Get set of times from a day
// outer.get("clock/pin/week-day")

// Get a set of times from a set of weeks (week1, week2)

// router.get("clock/pin/week")


// Delete set of times from a day

module.exports = router;