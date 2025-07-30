import { getPatents, getPatent, deletePatents, updatePatents, createPatents } from "../controllers/patents.js";

import express from "express";
const router = express.Router();


// GET all patents
router.get("/", getPatents);

// GET patent by ID
router.get("/:id", getPatent);

// POST create new patent
router.post("/", createPatents);

// PUT update patent by ID
router.put("/:id", updatePatents);

// DELETE patent by ID
router.delete("/:id", deletePatents);

export default router;
