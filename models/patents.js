import mongoose from "mongoose";

const patentGrantedSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  ref_number: String,
  title: String,
  country: String,
  date: String,
  affiliation: String,
  description: String
}, { _id: false });

const patentSubmittedSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  title: String,
  submission_date: String,
  country: String,
  affiliation: String,
  description: String
}, { _id: false });

const patentSchema = new mongoose.Schema({
  patent_granted: patentGrantedSchema,
  patent_submitted: patentSubmittedSchema
}, { _id: false });

const patentsSchema = new mongoose.Schema(patentSchema, { strict: false });

const PatentModel = mongoose.model("Patents", patentsSchema);
export default PatentModel;
