import mongoose from "mongoose";

const distinctionSchema = new mongoose.Schema({
  awardName: String,
  year: Number,
  scope: String,
  awardingBody: String
}, { _id: false });

const distinctionsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" 
  },
  distinctions: [distinctionSchema]
});

const DistinctionModel = mongoose.model("Distinction", distinctionsSchema); // Changed to singular "Distinction"
export default DistinctionModel;