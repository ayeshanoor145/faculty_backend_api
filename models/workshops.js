import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
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

const WorkshopModel = mongoose.model("Workshops", workshopSchema);
export default WorkshopModel;
