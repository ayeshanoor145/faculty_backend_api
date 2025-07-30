import Projects from '../models/projects.js';
import mongoose from "mongoose";

let getProjects = async (req, res) => {
  try {
    //Fetch projects from the database
    const projects = await Projects.find()
    res.status(200).json({
      message: "Projects fetched successfully",
      data: projects,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,

    })
  }
}


let getProject = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid project ID",
        data: null,
        error: null,
      })
    }
    //Fetch projects from the database by id
    const project = await Projects.findById(id)
    if (!project) {
      return res.status(404).json({
        message: "Projects not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Projects fetched successfully by ID",
      data: project,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
}


let deleteProjects = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid project ID",
        data: null,
        error: null,
      })
    }
    //Fetch projects from the database by id
    const project = await Projects.findByIdAndDelete(id)
    if (!project) {
      return res.status(404).json({
        message: "Project not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Projects deleted successfully",
      data: project,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
}


let createProjects = async (req, res) => {

  try {
    let projectInfo = req.body;
    const project = Projects(projectInfo);     //create a new project instance
    await project.save();    //save the project to database
    res.status(201).json({
      message: "Project created successfully",
      data: project,
      error: null,
    })

  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }

}

let updateProjects = async (req, res) => {
  try {
    let id = req.params.id;
    let projectInfo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid project ID",
        data: null,
        error: null,
      })
    }
    //Fetch projects from the database by id
    const project = await Projects.findByIdAndUpdate(id, projectInfo,
      { new: true } //Return the updated document
    );
    if (!project) {
      return res.status(404).json({
        message: "Projects not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Projects updated successfully by ID",
      data: project,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
}

export { getProjects, getProject, deleteProjects, createProjects, updateProjects };