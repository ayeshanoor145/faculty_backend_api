import mongoose from "mongoose";


// EmploymentRecords schema
const employmentRecordsSchema = mongoose.Schema({
  employmentRecord: [
    {
      organization: String,
      sector: String, //Government, Private, NGO, etc.
      post: String, // Job title or position
      scale : String, // Pay scale or grade
      dateFrom: Date, // Start date of employment
      dateTo: Date, // End date of employment
      isCurrent: Boolean, // Whether the employment is current or not
    }
  ]
});

const EmploymentRecords = mongoose.model("EmploymentRecords", employmentRecordsSchema);

export default EmploymentRecords;
