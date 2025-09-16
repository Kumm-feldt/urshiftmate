const mongoose = require("mongoose");

const HardingUserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        pin: Number
    }


)

const HardingUser = mongoose.model('HardingUser',HardingUserSchema)

module.exports={HardingUser}