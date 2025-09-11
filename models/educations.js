import mongoose from "mongoose";

const educationsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  education: [
    {
      degreeType: String,
      degreeName: String,
      university: String,
      yearCompleted: Number,
      discipline: String,
      isTerminalDegree: Boolean,
      thesisTitle: String
    }
  ],
  highestDegree: {
    degreeName: String,
    university: String,
    yearCompleted: Number
  }
}, { timestamps: true });

const Educations = mongoose.model("Educations", educationsSchema);
export default Educations;