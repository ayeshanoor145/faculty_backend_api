import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


//MongoDB connection (promise-based)
const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected Successfully.");
    })
    .catch((error) => {
      console.log("MongoDB connection failed", error.message);
    })
}

export default dbConnect; // Export the dbConnect function for use in other files