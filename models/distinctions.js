import mongoose from "mongoose";

const distinctionSchema = new mongoose.Schema({
  awardName: String,
  year: Number,
  scope: String,
  awardingBody: String
}, { _id: false });

const distinctionsSchema = new mongoose.Schema({
  distinctions: [distinctionSchema]
});

const DistinctionModel = mongoose.model("Distinctions", distinctionsSchema);
export default DistinctionModel;
