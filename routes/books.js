import { getBooks, getBook, deleteBooks, updateBooks, createBooks } from "../controllers/books.js";
import express from "express";
const router = express.Router();

// GET all books
router.get("/books", getBooks);

// GET book by ID
router.get("/books/:id", getBook);

// POST create new book
router.post("/books", createBooks);

// PUT update book by ID
router.put("/books/:id", updateBooks);

// DELETE book by ID
router.delete("/books/:id", deleteBooks);

export default router;