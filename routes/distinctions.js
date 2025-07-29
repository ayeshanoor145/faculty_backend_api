import { getDistinctions, getDistinction, deleteDistinctions, updateDistinctions, createDistinctions } from "../controllers/distinctions.js";
import express from "express";
const router = express.Router();

// GET all distinctions
router.get("/distinctions", getDistinctions);

// GET distinction by ID
router.get("/distinctions/:id", getDistinction);

// POST create new distinction
router.post("/distinctions", createDistinctions);

// PUT update distinction by ID
router.put("/distinctions/:id", updateDistinctions);

// DELETE distinction by ID
router.delete("/distinctions/:id", deleteDistinctions);

export default router;

