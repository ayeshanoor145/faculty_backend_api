import express from "express";
import { getTrainings, getTraining, createTraining, updateTraining, deleteTraining } from "../controllers/trainings.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/",  verifyToken, getTrainings);
router.get("/:id", verifyToken,  validateObjectId, getTraining);
router.post("/", verifyToken,  createTraining);
router.put("/:id", verifyToken,  validateObjectId, updateTraining);
router.delete("/:id",  verifyToken, validateObjectId, deleteTraining);

export default router;
