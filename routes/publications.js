import express from "express";
import { getPublications, getPublication, createPublication, updatePublication, deletePublication } from "../controllers/publications.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/",  verifyToken, getPublications);
router.get("/:id",  verifyToken, validateObjectId, getPublication);
router.post("/", verifyToken,  createPublication);
router.put("/:id", verifyToken,  validateObjectId, updatePublication);
router.delete("/:id",  verifyToken, validateObjectId, deletePublication);

export default router;
