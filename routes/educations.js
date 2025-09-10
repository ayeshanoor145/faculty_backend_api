import express from "express";
import { getEducations, getEducation, createEducations, updateEducation, deleteEducation } from "../controllers/educations.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/" ,  verifyToken, getEducations);
router.get("/:id", verifyToken,  validateObjectId, getEducation);
router.post("/", verifyToken,  createEducations);
router.put("/:id", verifyToken,  validateObjectId, updateEducation);
router.delete("/:id", verifyToken,  validateObjectId, deleteEducation);

export default router;
