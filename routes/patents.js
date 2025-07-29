import { getPatents, getPatent, deletePatents, updatePatents, createPatents } from "../controllers/patents.js";

import express from "express";
const router = express.Router();


// GET all patents
router.get("/patents", getPatents);

// GET patent by ID
router.get("/patents/:id", getPatent);

// POST create new patent
router.post("/patents", createPatents);

// PUT update patent by ID
router.put("/patents/:id", updatePatents);

// DELETE patent by ID
router.delete("/patents/:id", deletePatents);

export default router;
