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
  personalDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalDetails"
  },
  education: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Educations"
  },
  employmentRecord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmploymentRecords"
  },
  training: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainings"
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books"
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projects"
  },
  publication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publications"
  },
  patent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patents"
  },
  workshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workshops"
  },
  distinction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Distinctions"
  }
});

const Users = mongoose.model("Users", usersSchema);
export default Users;
