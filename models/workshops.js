import mongoose from "mongoose";

// Workshops schema
const workshopsSchema = mongoose.Schema({
  workshopType: String, // e.g., "Technical", "Non-Technical"
  scope : String, // e.g., "regional", "national", "international"
  title : String, // e.g., "Advanced Machine Learning Workshop"
  role : String, 
  dateFrom : String,
  dateTo : String,
  venue : String, // e.g., "XYZ University", "ABC Institute"
  description: String,
  certificateUrl: String, // URL to the certificate of participation or completion
});

const Workshops = mongoose.model("Workshops", workshopsSchema);

export default Workshops;
