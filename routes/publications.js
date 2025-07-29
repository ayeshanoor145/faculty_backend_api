import { getPublications, getPublication, deletePublications, updatePublications, createPublications } from "../controllers/publications.js";

import express from "express";
const router = express.Router();

// GET all publications
router.get("/publications", getPublications);

// GET publication by ID
router.get("/publications/:id", getPublication);

// POST create new publication
router.post("/publications", createPublications);

// PUT update publication by ID
router.put("/publications/:id", updatePublications);

// DELETE publication by ID
router.delete("/publications/:id", deletePublications);

export default router;

