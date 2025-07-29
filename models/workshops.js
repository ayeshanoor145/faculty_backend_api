import mongoose from "mongoose";

// Workshops schema
const workshopsSchema = mongoose.Schema({
  title: { type: String, required: true },
  organizer: String,
  year: Number,
  duration: String,
  location: String,
  description: String,
});

const Workshops = mongoose.model("Workshops", workshopsSchema);

export default Workshops;
