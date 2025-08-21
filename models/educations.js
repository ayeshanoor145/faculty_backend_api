import mongoose from "mongoose";
const educationEntrySchema = new mongoose.Schema({
  degreeType: String,
  degreeName: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  yearCompleted: {
    type: Number,
    required: true
  },
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
  personalDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalDetails"
  },
  researcherId: {
    type: String,
    unique: true
  },
  education: [educationEntrySchema],
  highestDegree: highestDegreeSchema
},
  {
    timestamps: true // Optional: adds createdAt and updatedAt fields
  }
);
const Educations = mongoose.model("Educations", educationsSchema);
export default Educations;