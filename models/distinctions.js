import mongoose from "mongoose";


// Distinctions schema
const distinctionsSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  distinictions: [
    {
    awardName: String,
    year: Number,
    scope: String, //e.g., local, national, international
    awardingBody: String, //Agency that awarded the distinction
  }
  ],
});

const Distinctions = mongoose.model("Distinctions", distinctionsSchema);

export default Distinctions;
