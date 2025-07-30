import { getEducations, getEducation, createEducation, updateEducation, deleteEducation } from "../controllers/educations.js";
import express from "express";
const router = express.Router();

// GET all educations
router.get("/", getEducations);

//Get education by ID
router.get("/:id", getEducation);

// POST create new educations
router.post("/", createEducation);

//delete education by ID
router.delete("/:id", deleteEducation);

//PUT request
router.put("/:id", updateEducation);
export default router;
