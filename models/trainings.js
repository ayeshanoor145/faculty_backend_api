import mongoose from "mongoose";



// Trainings schema
const trainingsSchema = mongoose.Schema({
  title: { type: String, required: true },
  provider: String,
  year: Number,
  duration: String,
  description: String,
});

const Trainings = mongoose.model("Trainings", trainingsSchema);

export default Trainings;   
