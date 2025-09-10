import express from "express";
import { getBooks, getBook, createBook, updateBook , deleteBook } from "../controllers/books.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/", verifyToken, getBooks);
router.get("/:id", verifyToken,  validateObjectId, getBook);
router.post("/", verifyToken, createBook);
router.put("/:id", verifyToken,  validateObjectId, updateBook);
router.delete("/:id", verifyToken,  validateObjectId, deleteBook);

export default router;
