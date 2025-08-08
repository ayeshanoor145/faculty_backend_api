import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject , deleteProjects } from "../controllers/projects.js";
const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.delete("/", deleteProjects);

export default router;
