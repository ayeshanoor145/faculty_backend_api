import ProjectModel from "../models/projects.js";

// Controller to handle project-related operations

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json({ message: "Projects fetched successfully", data: projects, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found", data: null, error: null });
    res.status(200).json({ message: "Project fetched successfully", data: project, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const project = new ProjectModel(req.body);
    await project.save();
    res.status(201).json({ message: "Project created successfully", data: project, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found", data: null, error: null });
    res.status(200).json({ message: "Project updated successfully", data: project, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await ProjectModel.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found", data: null, error: null });
    res.status(200).json({ message: "Project deleted successfully", data: project, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

export { getProjects, getProject, createProject, updateProject, deleteProject };