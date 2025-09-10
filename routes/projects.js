import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projects.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/",  verifyToken, getProjects);
router.get("/:id",  verifyToken, validateObjectId, getProject);
router.post("/", verifyToken,  createProject);
router.put("/:id", verifyToken,  validateObjectId, updateProject);
router.delete("/:id", verifyToken,  validateObjectId, deleteProject);

export default router;
