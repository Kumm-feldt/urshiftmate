const { calendar } = require('googleapis/build/src/apis/calendar');
const mongoose = require('mongoose')


// Sub Schema for Calendar
const CalendarSchema = new mongoose.Schema({
    calendarId: {type: String, required: true, trim: true},
    calendarName: {type: String, required: true, trim: true},
}, 
{ _id: false } // avoid subdoc _id 
)


const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true, index: true },
    name: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true, index: true, unique: true },
    token: { type: String },         // consider encrypting
    refreshToken: { type: String},  // consider encrypting
    calendars: {
      type: [CalendarSchema],
      default: []
    }
  },
  { timestamps: true }
);


const User = mongoose.model('User', UserSchema);
module.exports = {User};