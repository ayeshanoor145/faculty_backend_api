import mongoose from "mongoose";

const publicationEntrySchema = new mongoose.Schema({
  
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
}, { _id: false });

const publicationsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  publications: [publicationEntrySchema]
});

const PublicationModel = mongoose.model("Publications", publicationsSchema);
export default PublicationModel;
