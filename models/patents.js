import mongoose from "mongoose";



// Patents schema
const patentsSchema = mongoose.Schema({
  patent_submitted:
  {
    title: String,
    submission_date: String,
    country: String,
    affiliation: String, // Institution or organization associated with the patent
    description: String,
  },
});

const Patents = mongoose.model("Patents", patentsSchema);


export default Patents;