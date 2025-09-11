import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  awardedBy: {
    name: String,
    type: String,
    country: String,
    website: String
  },
  pi: String,
  coPi: [String],
  worth: {
    value: Number,
    currency: String
  },
  title: String,
  startDate: String,
  completionDate: String,
  status: String,
  description: String
});

const Projects = mongoose.model("Projects", projectsSchema);
export default Projects;