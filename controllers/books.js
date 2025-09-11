import Books from "../models/books.js";

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    if (!books || books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No books found",
        data: null,
        error: ["No books available in the database"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: books,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

// Get book by ID
const getBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book)
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
        error: ["Book not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Book by ID fetched successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

// Create book
const createBook = async (req, res) => {
  try {
    const book = new Books(req.body);
    await book.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

// Update book
const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book)
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: null,
        error: ["Book not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

// Delete book
const deleteBook = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const book = await Books.deleteOne({
      _id: id,
      user: user._id  // Ensure the user owns the book record
    });
    if (!book || book.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found or you are not authorized to delete this book",
        data: null,
        error: ["Book not found or you don't have permission to delete it"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: book,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

export { getBooks, getBook, createBook, updateBook, deleteBook };