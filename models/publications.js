import mongoose from "mongoose";



// Publications schema
const publicationsSchema = mongoose.Schema({
  publications: [
    {
      author : String, // e.g., "John Doe"
      coAuthors : Array, // e.g., ["Jane Smith", "Alice Johnson"]
      title: String, // e.g., "A Study on XYZ"
      journalName: String,
      publishingYear: Number,
      volume: Number,
     impactFactor: Number, // e.g., 3.5
     citation : String, // e.g., "Doe, J. (2020). A Study on XYZ. Journal of Research, 10(2), 123-456."
      doi: String,
     journalType : String, //"international", "national", "local"
      hecRecognized : Boolean,
    }
  ]
});

const Publications = mongoose.model("Publications", publicationsSchema);

export default Publications;
