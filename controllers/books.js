import Books from "../models/books.js";
import mongoose from "mongoose";


let getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json({
      message: "Books fetched successfully",
      data: books,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

let getBook = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid book ID",
        data: null,
        error: null,
      });
    }
    const book = await Books.findById(id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Book fetched successfully by ID",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

let deleteBooks = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid book ID",
        data: null,
        error: null,
      });
    }
    const book = await Books.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Book deleted successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

let updateBooks = async (req, res) => {
  try {
    let id = req.params.id;
    let bookInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid book ID",
        data: null,
        error: null,
      });
    }
    const book = await Books.findByIdAndUpdate(id, bookInfo, { new: true });
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Book updated successfully by ID",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

let createBooks = async (req, res) => {
  try {
    const bookInfo = req.body;
    const book = new Books(bookInfo);
    await book.save();
    res.status(201).json({
      message: "Book created successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

export { getBooks, getBook, deleteBooks, updateBooks, createBooks };