import express from "express";
import { getEducations, getEducation, createEducations, updateEducation, deleteEducation } from "../controllers/educations.js";
const router = express.Router();

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", createEducations);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
