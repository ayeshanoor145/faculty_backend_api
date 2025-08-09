import mongoose from "mongoose";

const educationEntrySchema = new mongoose.Schema({
  degreeType: String,
  degreeName: String,
  university: String,
  yearCompleted: Number,
  discipline: String,
  isTerminalDegree: Boolean,
  thesisTitle: String
}, { _id: false });

const highestDegreeSchema = new mongoose.Schema({
  degreeName: String,
  university: String,
  yearCompleted: Number
}, { _id: false });

const educationsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  researcherId: String,
  education: [educationEntrySchema],
  highestDegree: highestDegreeSchema
});

const Education = mongoose.model("Educations", educationsSchema);
export default Education;