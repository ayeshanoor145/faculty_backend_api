import mongoose from "mongoose";


//education schema
const educationsSchema = mongoose.Schema({
  userId: String,
  researcherId: String,
  education: [
    {
      degreeTYpe: String,   // e.g., "PhD", "Masters", "Bachelors"
      degreeName: String,   // e.g.,  "Bachelors of Science", "Masters of Arts"
      university: String,    // e.g., "University of XYZ"
      yearCompleted: Date,  // e.g., "2020-01-01"
      discipline: String,     // e.g., "Computer Science", "Physics"
      isTerminalDegree: Boolean,   // e.g., true or false
    }
  ],
  highestDegree: {
    degreeName: String,
    university: String,
    yearCompleted: Date,
  }
});

// Education Model
const Educations = new mongoose.model("Educations", educationsSchema)

export default Educations;