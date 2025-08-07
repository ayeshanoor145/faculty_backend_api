import express from "express";
import { getEducations, getEducation, createEducation, updateEducation, deleteEducation } from "../controllers/educations.js";
const router = express.Router();

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
