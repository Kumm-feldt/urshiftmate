const mongoose = require("mongoose")

const TimeStampsSchema = new mongoose.Schema({
    pin: Number,
    clockIn: { type: Date, required: true },
    clockOut: { type: Date } // optional until they clock out
});



const Timestamps = mongoose.model('Timestamps', TimeStampsSchema)

module.exports={Timestamps}