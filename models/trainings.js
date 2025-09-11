import mongoose from "mongoose";

const trainingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  type: String,
  scope: String,
  subject: String,
  yearAttended: Number,
  institution: String,
  description: String
}
);

const Trainings = mongoose.model("Trainings", trainingsSchema);
export default Trainings;