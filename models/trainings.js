import mongoose from "mongoose";



// Trainings schema
const trainingsSchema = mongoose.Schema({
  trainings: [
    {
      type : String, // e.g., "Workshop", "Seminar", "Conference"
      scope : String, // e.g., "National", "International"
      subject : String, // e.g., "Machine Learning", "Data Science"
      yearAttended: Number, // e.g., 2023
      institution: String, // e.g., "XYZ University", "ABC Institute"
      description : String, // Brief description of the training
    }
  ]
});

const Trainings = mongoose.model("Trainings", trainingsSchema);

export default Trainings;   
