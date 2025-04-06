const express = require("express");
const router = express.Router();
const userController  = require("../controllers/workplaceController")

router.post("/workplace", userController.addWorkplace);
router.get("/workplace", userController.getWorkplace);


module.exports = router;