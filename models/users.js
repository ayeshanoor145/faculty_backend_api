import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  profilePicture: String,
  fullName: String,
  userName: String,
  email: String,
  contactNumber: String,
  code: String,
  codeExpires: String,
  password: String
});

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;
