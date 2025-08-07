import express from "express";
import { getPublications, getPublication, createPublication, updatePublication, deletePublication } from "../controllers/publications.js";
const router = express.Router();

router.get("/", getPublications);
router.get("/:id", getPublication);
router.post("/", createPublication);
router.put("/:id", updatePublication);
router.delete("/:id", deletePublication);

export default router;
