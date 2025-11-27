const { User } = require("../models/User");

// Check if user exists
exports.checkUserExists = async (googleId) => {
  try {
    const user = await User.findOne({ googleId });
    return user ? user : false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// Get a user's refresh token
exports.getRefreshToken = async (googleId) => {
  try {
    const user = await User.findOne({ googleId });

    return user ? user.refreshToken : false;
  } catch (err) {
    console.error("Error getting refresh token:", err);
    return false;
  }
};
