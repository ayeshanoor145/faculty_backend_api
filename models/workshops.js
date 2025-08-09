import mongoose from "mongoose";

const workshopsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  workshopType: String,
  scope: String,
  title: String,
  role: String,
  dateFrom: String,
  dateTo: String,
  venue: String,
  description: String,
  certificateUrl: String
});

const Workshops = mongoose.model("Workshops", workshopsSchema);
export default Workshops;
