import mongoose from "mongoose";

//PersonalDetails schema
const personalDetailsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  fullName: {
    type: String,
    required: true
  },
  academicTitle: String,
  designation: String,
  subject: String,
  majorSpecialization: String,
  researchArea: {
    type: [String],  // Changed to array of strings
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
  researcherId: String,
  researcherUrl: String,
  orcidId: String,
  orcidUrl: String,
  googleScholarLink: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  contactNumber: {
    type: String,
    required: true
  },
  biosketch: {
    type: String,
    required: true
  },
});

// personalDetails Model
const PersonalDetails = mongoose.model("PersonalDetails", personalDetailsSchema);

export default PersonalDetails;