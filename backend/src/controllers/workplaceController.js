// insert workplace

const { Workplace } = require("../models/Workplace");

async function addWorkplace (req, res) {
    const { workplace, hourlyRate } = req.body;
    const userId = req.session.googleId;
  
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

  async function getWorkplace (req, res) {
    const userId = req.session.googleId;
  
    const workplaces = await Workplace.find({userId});

    // more code

  try{
    await newWorkplace.save();
    res.json(newWorkplace);

  }catch(err){
    console.error("Error adding workplace:", err);
    res.status(500).json({ error: "Failed to add workplace" });
  }

  };

  module.exports = {addWorkplace, getWorkplace}