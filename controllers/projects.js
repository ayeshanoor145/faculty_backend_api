import Projects from "../models/projects.js";

// Controller to handle project-related operations

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    if (!projects || projects.length === 0) {
      return res.status(404).json({
        message: "No projects found",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data fetched successfully",
      data: projects,
      error: null
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

const getProject = async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project)
      return res.status(404).json({
        message: "Project not found",
        data: null,
        error: null
      });

    res.status(200).json({
      message: "Project by ID fetched successfully",
      data: project,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

const createProject = async (req, res) => {
  try {
    const project = new Projects(req.body);
    await project.save();
    res.status(201).json({
      message: "Data created successfully",
      data: project,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Projects
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: project,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const project = await Projects.deleteOne({
      _id: id,
      user: user._id, // Ensure the user owns the project
    });

    if (!project || project.deletedCount === 0) {
      return res.status(404).json({
        message: "Project not found or not owned by user",
        success: false,
        data: null,
        error: null,
      });
    }

    res.status(200).json({
      message: "Data deleted successfully",
      data: project,

      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};


export { getProjects, getProject, createProject, updateProject, deleteProject };