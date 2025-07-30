import { getWorkshops, getWorkshop, deleteWorkshops, updateWorkshops, createWorkshops } from "../controllers/workshops.js";
import express from "express";
const router = express.Router();

// GET all workshops
router.get("/", getWorkshops);

// GET workshop by ID
router.get("/:id", getWorkshop);

// POST create new workshop
router.post("/", createWorkshops);

// PUT update workshop by ID
router.put("/:id", updateWorkshops);

// DELETE workshop by ID
router.delete("/:id", deleteWorkshops);

export default router;