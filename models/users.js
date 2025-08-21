import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  profilePicture: {
    type: String,
    default: "default.jpg",
  },
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
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
  role: {
    type: String,
    enum: ["admin", "user"],  
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,  
    enum: ["active", "inactive"],
    default: "active"
  },
  contactNumber: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  codeExpires: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  personalDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalDetails",
  },
  education: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Educations",
  },
  employmentRecord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmploymentRecords",
  },
  training: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainings",
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projects",
  },
  publication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publications",
  },
  patent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patents",
  },
  workshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workshops",
  },
  distinction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Distinctions",
  },
});

const Users = mongoose.model("Users", usersSchema);
export default Users;