import express from "express";
import { getEducations, getEducation, createEducations, updateEducation, deleteEducation } from "../controllers/educations.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getEducations);
router.get("/:id", validateObjectId, getEducation);
router.post("/", createEducations);
router.put("/:id", validateObjectId, updateEducation);
router.delete("/:id", validateObjectId, deleteEducation);

export default router;
