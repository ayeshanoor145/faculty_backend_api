import { getWorkshops, getWorkshop, deleteWorkshops, updateWorkshops, createWorkshops } from "../controllers/workshops.js";
import express from "express";
const router = express.Router();

// GET all workshops
router.get("/workshops", getWorkshops);

// GET workshop by ID
router.get("/workshops/:id", getWorkshop);

// POST create new workshop
router.post("/workshops", createWorkshops);

// PUT update workshop by ID
router.put("/workshops/:id", updateWorkshops);

// DELETE workshop by ID
router.delete("/workshops/:id", deleteWorkshops);

export default router;