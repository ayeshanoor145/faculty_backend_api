import express from "express";
import { getTrainings, getTraining, createTraining, updateTraining, deleteTraining } from "../controllers/trainings.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getTrainings);
router.get("/:id", validateObjectId, getTraining);
router.post("/", createTraining);
router.put("/:id", validateObjectId, updateTraining);
router.delete("/:id", validateObjectId, deleteTraining);

export default router;
