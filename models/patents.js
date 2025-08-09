import mongoose from "mongoose";
const patentGrantedSchema = new mongoose.Schema({
  ref_number: String,
  title: String,
  country: String,
  date: String,
  affiliation: String,
  description: String
}, { _id: false });

const patentSubmittedSchema = new mongoose.Schema({
  title: String,
  submission_date: String,
  country: String,
  affiliation: String,
  description: String
}, { _id: false });

const patentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  patent_granted: patentGrantedSchema,
  patent_submitted: patentSubmittedSchema
});

const patentsSchema = new mongoose.Schema(patentSchema, { strict: false });

const Patents = mongoose.model("Patents", patentsSchema);
export default Patents;
