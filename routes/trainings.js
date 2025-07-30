import { getTrainings, getTraining, deleteTrainings, updateTrainings, createTrainings } from "../controllers/trainings.js";
import express from "express";
const router = express.Router();

// GET all trainings
router.get("/", getTrainings);

// GET training by ID
router.get("/:id", getTraining);

// POST create new training
router.post("/", createTrainings);

// PUT update training by ID
router.put("/:id", updateTrainings);

// DELETE training by ID
router.delete("/:id", deleteTrainings);

export default router;