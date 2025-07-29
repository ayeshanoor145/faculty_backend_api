import mongoose from "mongoose";


// Distinctions schema
const distinctionsSchema = mongoose.Schema({
  title: { type: String, required: true },
  awardedBy: String,
  year: Number,
  description: String,
});

const Distinctions = mongoose.model("Distinctions", distinctionsSchema);

export default Distinctions;
