const mongoose = require("mongoose");
require("dotenv").config();

function connectDev({ host, db, user, pass }) {
  return mongoose.connect(`mongodb://${host}/${db}`, {
    user,
    pass,
  });
}

function connectProd() {
  const uri = process.env.MONGODB_URI; // full URI from Atlas or Render
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

// Export ONE function
module.exports = {
  connect: process.env.MODE === "dev" ? connectDev : connectProd,
};