import mongoose from "mongoose";

// PersonalDetails schema
const personalDetailsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  academicTitle: String,
  designation: String,
  subject: String,
  majorSpecialization: String,
  researchArea: {
    type: [String],  // Array of strings
    required: true
  },
  nationality: {
    type: {  // Subdocument structure
      type: String,
      enum: ["single", "dual", "multiple"],
      default: "single"
    },
    countries: [String]  // Array of country strings
  },
  researcherId: {
    type: String,
    unique: true,
    sparse: true  // Allows multiple users to have null researcherId
  },
  researcherUrl: String,
  orcidId: String,
  orcidUrl: String,
  googleScholarLink: String,
  biosketch: {
    type: String,
    required: true
  },
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

// Create model
const PersonalDetails = mongoose.model("PersonalDetails", personalDetailsSchema);

export default PersonalDetails;