import mongoose from "mongoose";

//users schema
const usersSchema = mongoose.Schema({
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

// users Model
const Users = new mongoose.model("Users", usersSchema)

export default Users;