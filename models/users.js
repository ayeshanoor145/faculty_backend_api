import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  profilePicture: String,
  fullName: String,
  userName: String,
  email: String,
  contactNumber: String,
  code: String,
  codeExpires: String,
  password: String,
  personalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalDetails" 
  },
  educations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Educations"
  },
  employmentRecords: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  "  EmploymentRecords"
  },
  trainings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainings"
  },
  books: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books"
  },
  projects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projects"
  },
  publications: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publications"
  },
  patents: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patents"
  },
  workshops: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workshops"
  },
  distinctions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Distinctions"
  }
});

const Users = mongoose.model("Users", usersSchema);
export default Users;
