import mongoose from "mongoose";

const employmentRecordsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  organization: String,
  sector: String,
  post: String,
  scale: String,
  dateFrom: String,
  dateTo: String,
  isCurrent: Boolean
}
);

const EmploymentRecords = mongoose.model("EmploymentRecords", employmentRecordsSchema);
export default EmploymentRecords;