import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function connect() {
  const uri = process.env.MONGODB_URI; // full URI from Atlas or Render
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("MongoDB connection error:", err));
}

export { connect };