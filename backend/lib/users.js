const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    refreshToken: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const User = mongoose.model('User', UserSchema);
module.exports = {User};