import express from "express";
import { getPublications, getPublication, createPublication, updatePublication, deletePublication } from "../controllers/publications.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getPublications);
router.get("/:id", validateObjectId, getPublication);
router.post("/", createPublication);
router.put("/:id", validateObjectId, updatePublication);
router.delete("/:id", validateObjectId, deletePublication);

export default router;
