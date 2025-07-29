import mongoose from "mongoose";



// Patents schema
const patentsSchema = mongoose.Schema({
  title: { type: String, required: true },
  inventor: String,
  patentNumber: String,
  year: Number,
  country: String,
  description: String,
});

const Patents = mongoose.model("Patents", patentsSchema);


export default Patents;