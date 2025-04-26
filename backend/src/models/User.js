const { calendar } = require('googleapis/build/src/apis/calendar');
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    token: String,
    refreshToken: String,

    calendars: {
        type: [String],
        default: "Primary"
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const User = mongoose.model('User', UserSchema);
module.exports = {User};