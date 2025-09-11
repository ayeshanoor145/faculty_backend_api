import mongoose from "mongoose";

const distinctionsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  awardName: String,
  year: Number,
  scope: String,
  awardingBody: String
}
);

const Distinctions = mongoose.model("Distinctions", distinctionsSchema);
export default Distinctions;