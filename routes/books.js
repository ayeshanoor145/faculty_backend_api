import { getBooks, getBook, deleteBooks, updateBooks, createBooks } from "../controllers/books.js";
import express from "express";
const router = express.Router();

// GET all books
router.get("/", getBooks);

// GET book by ID
router.get("/:id", getBook);

// POST create new book
router.post("/", createBooks);

// PUT update book by ID
router.put("/:id", updateBooks);

// DELETE book by ID
router.delete("/:id", deleteBooks);

export default router;