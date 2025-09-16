const {HardingUser} = require("../models/HardingUser");
const {TimeStamps} = require("../models/TimeStamps");

const mongoose = require("mongoose")

// Function to check if user already is clocked In


// [USE] request to validate
async function checkPin(req,res, next){
    // Retrieve Pin & Name from parameters
    const pin = req.params.pin;
    const name = req.params.name;

    try{
    // Check in the db if pin && name exists
        const user = await HardingUser.find({
            pin: pin,
            name: name.trim()
        })

        if(!name){
            res.status(404).json({ error: "User not found" });
        }

    }catch(err){
        res.status(500).json({ error: "Error checking PIN" });
    }
   
    // Store in local if it does
    res.locals.pin = pin;
    res.locals.name = name;

    next();
};

// [POST] request to clockIn
async function clockIn(req, res){
    // Retrieve from local
    const pin = res.locals.pin;
    const name = res.locals.name;

    // Retrieve from body
    const dateClockIn = req.body.clockInTime;

    if(!pin || !name){
        res.status(404).json({ error: "Error Clocking In. Validation Error." });
    }

    if(!dateClockIn){
        res.status(404).json({ error: "Error Clocking In. Validation Error." });

    }

    // Convert it to Date data type
    const clockInTime = new Date(dateClockIn);

    // Insert it in the DB
    try{
    const user = new TimeStamps({
        pin: pin,
        clockIn : clockInTime
    })
    await user.save();
    }catch(err){
        res.status(404).json({ error: "Error Clocking In. DB failed." });
    }


    return res.json(user);
}

// [POST] request
async function clockOut(req, res){
    // Retrieve from local
    const pin = res.locals.pin;
    const name = res.locals.name;

    // Retrieve from body
    const dateClockOut = req.body.clockOutTime;

    if(!pin || !name){
        res.status(404).json({ error: "Error Clocking Out. Validation Error." });
    }

    if(!dateClockOut){
        res.status(404).json({ error: "Error Clocking Out. Validation Error." });

    }

    // Convert it to Date data type
    const clockOutTime = new Date(dateClockOut);

    // Find in DB and Update
    try{
    const user = await TimeStamps.updateOne(
        { pin, clockOut: null },                // find the open entry
        { $set: { clockOut: clockOutTime } }      // set clockOut 
    );


    if(!user){
        res.status(404).json({ error: "Error Clocking Out. No User found failed." });
    }


    await user.save();
    }catch(err){
        res.status(404).json({ error: "Error Clocking Out. DB failed." });
    }

    return res.json(user);
}


// [GET] users 
async function getUsers(req, res){
    try{
    const users = await HardingUser.find();
        if(!users){
            res.json([])
        }
    }catch(err){
        res.status(500).json({ error: "Error Fetching users." });
    }
    res.json(users);

}

//[POST] insert user
async function insertUser(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const pin = req.body.pin;

    try{
        const user = await new HardingUser({
            pin,
            firstName,
            lastName
        });
        user.save();
    }catch(err){
        res.status(500).json({ error: "Error inserting user." });
    }
    res.json(user);
}




module.exports = {clockIn, clockOut, checkPin, getUsers,insertUser}