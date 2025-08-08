import mongoose from "mongoose";

const awardedBySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  name: String,
  type: String,
  country: String,
  website: String
}, { _id: false });

const worthSchema = new mongoose.Schema({
  value: Number,
  currency: String
}, { _id: false });

const projectSchema = new mongoose.Schema({
  awardedBy: awardedBySchema,
  pi: String,
  coPi: [String],
  worth: worthSchema,
  title: String,
  startDate: String,
  completionDate: String,
  status: String,
  description: String
});

const ProjectModel = mongoose.model("Projects", projectSchema);
export default ProjectModel;
