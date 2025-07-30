import mongoose from "mongoose";


// Book schema
const booksSchema = mongoose.Schema({
  title: { type: String, required: true },
  authors: Array, //Array to allow multiple authors
  publishedDate: String, //Publication date in string format
  publishingAgency: String,
  scope: String,  //e.g., local, national, international
  isHECRecognized: Boolean, //Boolean to indicate if the book is recognized by HEC
  pages: Number, //Number of pages in the book
  language: String, //Language of the book
  chapters: [
    {
      chapterTitle: String,
      author: String, //Author of the chapter
      bookTitle: String, //Title of the book the chapter belongs to
      publishedDate: String, //Publication date of the chapter 
      publishingAgency: String, //Publishing agency for the chapter
      pages: Number, //Number of pages in the chapter
      language: String, //Language of the chapter
    },
  ]
});

const Books = mongoose.model("Books", booksSchema);


export default Books;