import express from "express";
import { getTrainings, getTraining, createTraining, updateTraining, deleteTraining , deleteTrainings} from "../controllers/trainings.js";
const router = express.Router();

router.get("/", getTrainings);
router.get("/:id", getTraining);
router.post("/", createTraining);
router.put("/:id", updateTraining);
router.delete("/:id", deleteTraining);
router.delete("/", deleteTrainings);

export default router;
