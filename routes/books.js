import express from "express";
import { getBooks, getBook, createBook, updateBook , deleteBooks, deleteBook } from "../controllers/books.js";
const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.delete("/", deleteBooks);

export default router;
