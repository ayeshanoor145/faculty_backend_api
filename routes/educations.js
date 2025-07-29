import { getEducations, getEducation, createEducation, updateEducation, deleteEducation } from "../controllers/educations.js";
import express from "express";
const router = express.Router();

// GET all educations
router.get("/educations", getEducations);

//Get education by ID
router.get("/educations/:id", getEducation);

// POST create new educations
router.post("/educations", createEducation);

//delete education by ID
router.delete("/educations/:id", deleteEducation);

//PUT request
router.put("/educations/:id", updateEducation);
export default router;
