// insert workplace

const { Workplace } = require("../models/Workplace");

async function addWorkplace (req, res) {
    const { workplace, hourlyRate } = req.body;
    const userId = req.locals.userId;
  
    const newWorkplace = new Workplace({
      userId,
      workplace,
      hourlyRate,
    });

  try{
    await newWorkplace.save();
    res.json(newWorkplace);

  }catch(err){
    console.error("Error adding workplace:", err);
    res.status(500).json({ error: "Failed to add workplace" });
  }

  };

  module.exports = {addWorkplace}