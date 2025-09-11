// insert workplace

const { User } = require("../models/User");
const { Workplace } = require("../models/Workplace");

async function addWorkplace (req, res) {

    const { workplace, hourlyRate } = req.body;
    // optionally get it from frontend
    let userId;
    if(req.body.userId){
     userId = req.body.userId;
    }
  
    try{
      // if not received, then use session to find it 
      if(!userId){
        googleId = String(req.userInfo.googleId);
        const user = await User.findOne({ googleId });

        if(!user){
          return res.status(401).json({error: "User not found"})
        }
        userId = user._id
        
      }
      const newWorkplace = new Workplace({
      userId,
      workplace,
      hourlyRate,
    });
    await newWorkplace.save();
    res.json(newWorkplace);
  }catch(err){
    console.error("Error adding workplace:", err);
    res.status(500).json({ error: "Failed to add workplace" });
  }

  };

  async function getWorkplace (req, res) {
    let data = []
    const googleId = req.userInfo.googleId;

    try{
    let user = await User.findOne({googleId})
    let userId = user._id
    const workplaces = await Workplace.find({userId});

    if(workplaces.length > 0){
      workplaces.forEach((job)=>{
        data.push(
          {
          workplace:  job.workplace,
          hourlyRate: job.hourlyRate,
          workplaceId: job._id
        }
      )
      })
    }
    }catch(err){
      console.log("Error fetching all worplaces")
    }
    res.json(data)

  };

  module.exports = {addWorkplace, getWorkplace}