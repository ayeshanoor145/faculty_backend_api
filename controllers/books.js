import Books from "../models/books.js";

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Books.find() .populate([
                "user"
            ]);
    res.status(200).json({
      message: "Data fetched successfully",
      data: books,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error"
      , data: null,
      error: error.message
    });
  }
};

// Get book by ID
const getBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book)
      return res.status(404).json({
        message: "Book not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Book by ID fetched successfully",
      data: book,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

// Create book
const createBook = async (req, res) => {
  try {
    const book = new Books(req.body)
      ;
    await book.save();
    res.status(201).json({
      message: "Data created successfully",
      data: book,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

// Update book
const updateBook = async (req, res) => {
  try {
    const book = await Books
      .findByIdAndUpdate(req.params.id, req.body,
        {
          new: true
        });
    if (!book)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: book,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

// Delete book
const deleteBook = async (req, res) => {
  try {
    const book = await Books
      .findByIdAndDelete(req.params.id)
      ;
    if (!book)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data deleted successfully",
      data: book,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};



export { getBooks, getBook, createBook, updateBook, deleteBook };