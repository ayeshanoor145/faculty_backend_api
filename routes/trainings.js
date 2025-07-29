import { getTrainings, getTraining, deleteTrainings, updateTrainings, createTrainings } from "../controllers/trainings.js";
import express from "express";
const router = express.Router();

// GET all trainings
router.get("/trainings", getTrainings);

// GET training by ID
router.get("/trainings/:id", getTraining);

// POST create new training
router.post("/trainings", createTrainings);

// PUT update training by ID
router.put("/trainings/:id", updateTrainings);

// DELETE training by ID
router.delete("/trainings/:id", deleteTrainings);

export default router;