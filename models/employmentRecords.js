import mongoose from "mongoose";


// EmploymentRecords schema
const employmentRecordsSchema = mongoose.Schema({
  organization: { type: String, required: true },
  position: String,
  startDate: Date,
  endDate: Date,
  responsibilities: String,
  achievements: String,
});

const EmploymentRecords = mongoose.model("EmploymentRecords", employmentRecordsSchema);

export default EmploymentRecords;
