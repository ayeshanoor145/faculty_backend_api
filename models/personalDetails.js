import mongoose from "mongoose";

//PersonalDetails schema
const personalDetailsSchema = mongoose.Schema({
  name: String,
  academicTitle: String,
  designation: String,
  subject: String,
  majorSpecialization: String,
  researchArea: Array,
  nationality: Object,
  researcherId: String,
  researcherUrl: String,
  orcidId: String,
  orcidUrl: String,
  googleScholarLink: String,
  email: String,
  contactNumber: String,
  biosketch: String,

})

// personalDetails Model
const PersonalDetails = new mongoose.model("PersonalDetails", personalDetailsSchema)

export default PersonalDetails;