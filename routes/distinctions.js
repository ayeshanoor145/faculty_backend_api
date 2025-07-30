import { getDistinctions, getDistinction, deleteDistinctions, updateDistinctions, createDistinctions } from "../controllers/distinctions.js";
import express from "express";
const router = express.Router();

// GET all distinctions
router.get("/", getDistinctions);

// GET distinction by ID
router.get("/:id", getDistinction);

// POST create new distinction
router.post("/", createDistinctions);

// PUT update distinction by ID
router.put("/:id", updateDistinctions);

// DELETE distinction by ID
router.delete("/:id", deleteDistinctions);

export default router;

