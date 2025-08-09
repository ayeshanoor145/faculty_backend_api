import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projects.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getProjects);
router.get("/:id", validateObjectId, getProject);
router.post("/", createProject);
router.put("/:id", validateObjectId, updateProject);
router.delete("/:id", validateObjectId, deleteProject);

export default router;
