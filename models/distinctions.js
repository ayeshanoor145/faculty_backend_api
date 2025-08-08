import mongoose from "mongoose";

const distinctionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  awardName: String,
  year: Number,
  scope: String,
  awardingBody: String,
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
}, { _id: false });

const distinctionsSchema = new mongoose.Schema({
  distinctions: [distinctionSchema]
});

const DistinctionModel = mongoose.model("Distinctions", distinctionsSchema);
export default DistinctionModel;
