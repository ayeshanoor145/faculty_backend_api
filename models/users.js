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
    default: null,
  },
  codeExpires: {
    type: Date,
    default: null,
  },
  address: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", usersSchema);
export default Users;