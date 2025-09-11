import mongoose from "mongoose";

const publicationsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  author: String,
  coAuthors: [String],
  title: String,
  journalName: String,
  publishingYear: Number,
  volume: Number,
  impactFactor: Number,
  citation: String,
  doi: String,
  journalType: String,
  hecRecognized: Boolean
});

const Publications = mongoose.model("Publications", publicationsSchema);
export default Publications;
