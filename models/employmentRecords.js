import mongoose from "mongoose";

const employmentSchema = new mongoose.Schema({
  organization: String,
  sector: String,
  post: String,
  scale: String,
  dateFrom: String,
  dateTo: String,
  isCurrent: Boolean
}, { _id: false });

const employmentRecordsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  employmentRecord: [employmentSchema]
});

const EmploymentRecords = mongoose.model("EmploymentRecords", employmentRecordsSchema);
export default EmploymentRecords;