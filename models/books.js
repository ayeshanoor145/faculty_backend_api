import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  chapterTitle: String,
  author: String,
  bookTitle: String,
  publicationDate: String,
  publishingAgency: String,
  pages: Number,
  language: String
}, { _id: false });

const booksSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  title: String,
  authors: [String],
  publicationDate: String,
  publishingAgency: String,
  scope: String,
  isHECRecognized: Boolean,
  pages: Number,
  language: String,
  chapters: [chapterSchema]
});

const Books = mongoose.model("Books", booksSchema);
export default Books;
