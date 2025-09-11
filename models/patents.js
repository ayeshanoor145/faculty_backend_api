import mongoose from "mongoose";

const patentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  patent_granted: {
    ref_number: String,
    title: String,
    country: String,
    date: String,
    affiliation: String,
    description: String
  },
  patent_submitted: {
    title: String,
    submission_date: String,
    country: String,
    affiliation: String,
    description: String
  }
});

const Patents = mongoose.model("Patents", patentsSchema);
export default Patents;