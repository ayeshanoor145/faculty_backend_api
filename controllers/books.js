import BooksModel from "../models/books.js";

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.status(200).json({ message: "Books fetched successfully", data: books, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

// Get book by ID
const getBook = async (req, res) => {
  try {
    const book = await BooksModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found", data: null, error: null });
    res.status(200).json({ message: "Book fetched successfully", data: book, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

// Create book
const createBook = async (req, res) => {
  try {
    const book = new BooksModel(req.body);
    await book.save();
    res.status(201).json({ message: "Book created successfully", data: book, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

// Update book
const updateBook = async (req, res) => {
  try {
    const book = await BooksModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found", data: null, error: null });
    res.status(200).json({ message: "Book updated successfully", data: book, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

// Delete book
const deleteBook = async (req, res) => {
  try {
    const book = await BooksModel.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found", data: null, error: null });
    res.status(200).json({ message: "Book deleted successfully", data: book, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
