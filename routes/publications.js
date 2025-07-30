import { getPublications, getPublication, deletePublications, updatePublications, createPublications } from "../controllers/publications.js";

import express from "express";
const router = express.Router();

// GET all publications
router.get("/", getPublications);

// GET publication by ID
router.get("/:id", getPublication);

// POST create new publication
router.post("/", createPublications);

// PUT update publication by ID
router.put("/:id", updatePublications);

// DELETE publication by ID
router.delete("/:id", deletePublications);

export default router;

