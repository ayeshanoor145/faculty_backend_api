import mongoose from "mongoose";

//projects schema
const projectsSchema = mongoose.Schema({
  userId: String,
  awardedBy: {
    name: String, // e.g., "University of XYZ", "National Science Foundation"
    type: String, // e.g., "National", "International"
    country: String, // e.g., "USA", "Germany"
    website: String, // e.g., "https://www.universityxyz.edu", "https://www.nsf.gov"
  },
  pi: String,
  coPi: Array,
  worth: {
    value: Number, // e.g., 50000
    currency: String, // e.g., "USD", "EUR"
  },
  title: String,
  startDate: Date,
  completionDate: Date,
  status: String,
  description: String,
})

// projects Model
const Projects = new mongoose.model("Projects", projectsSchema)

export default Projects;