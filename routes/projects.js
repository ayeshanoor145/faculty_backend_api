
import { getProjects, getProject, deleteProjects, createProjects, updateProjects } from "../controllers/projects.js";
import express from "express";
const router = express.Router();
// Routes
// GET all projects
router.get("/", getProjects);


//Get projects by ID
router.get("/:id", getProject);


// POST create new projects
router.post("/", createProjects);


//delete projects
router.delete("/:id", deleteProjects);


//PUT request
router.put("/:id", updateProjects);

export default router;
