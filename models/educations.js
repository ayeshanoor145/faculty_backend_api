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

const educationSchema = new mongoose.Schema({
  researcherId: String,
  education: [educationEntrySchema],
  highestDegree: highestDegreeSchema
});

const EducationModel = mongoose.model("Educations", educationSchema);
export default EducationModel;
