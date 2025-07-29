import mongoose from "mongoose";



// Publications schema
const publicationsSchema = mongoose.Schema({
  title: { type: String, required: true },
  authors: [String],
  journal: String,
  year: Number,
  volume: String,
  issue: String,
  pages: String,
  doi: String,
  url: String,
  abstract: String,
});

const Publications = mongoose.model("Publications", publicationsSchema);

export default Publications;
