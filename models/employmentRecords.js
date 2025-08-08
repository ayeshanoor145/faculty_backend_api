import mongoose from "mongoose";

const employmentEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"},
  organization: String,
  sector: String,
  post: String,
  scale: String,
  dateFrom: String,
  dateTo: String,
  isCurrent: Boolean
}, { _id: false });

const employmentRecordSchema = new mongoose.Schema({
  employmentRecord: [employmentEntrySchema]
});

const EmploymentRecordModel = mongoose.model("EmploymentRecords", employmentRecordSchema);
export default EmploymentRecordModel;
