import mongoose from "mongoose";

const trainingEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  type: String,
  scope: String,
  subject: String,
  yearAttended: Number,
  institution: String,
  description: String
}, { _id: false });

const trainingsSchema = new mongoose.Schema({
  trainings: [trainingEntrySchema]
});

const TrainingModel = mongoose.model("Trainings", trainingsSchema);
export default TrainingModel;
