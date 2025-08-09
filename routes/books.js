import express from "express";
import { getBooks, getBook, createBook, updateBook , deleteBook } from "../controllers/books.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getBooks);
router.get("/:id", validateObjectId, getBook);
router.post("/", createBook);
router.put("/:id", validateObjectId, updateBook);
router.delete("/:id", validateObjectId, deleteBook);

export default router;
