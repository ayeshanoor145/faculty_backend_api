
import { getProjects, getProject, deleteProjects, createProjects, updateProjects } from "../controllers/projects.js";
import express from "express";
const router = express.Router();
// Routes
// GET all projects
router.get("/projects", getProjects);


//Get projects by ID
router.get("/projects/:id", getProject);


// POST create new projects
router.post("/projects", createProjects);


//delete projects
router.delete("/projects/:id", deleteProjects);


//PUT request
router.put("/projects/:id", updateProjects);

export default router;
