import Publications from '../models/publications.js'; 
import mongoose from 'mongoose';


let getPublications = async (req, res) => {
  try {
    const publications = await Publications.find();
    res.status(200).json({
      message: "Publications fetched successfully",
      data: publications,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let getPublication =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid publication ID",
        data: null,
        error: null,
      });
    }
    const publication = await Publications.findById(id);
    if (!publication) {
      return res.status(404).json({
        message: "Publication not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Publication fetched successfully by ID",
      data: publication,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let deletePublications =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid publication ID",
        data: null,
        error: null,
      });
    }
    const publication = await Publications.findByIdAndDelete(id);
    if (!publication) {
      return res.status(404).json({
        message: "Publication not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Publication deleted successfully",
      data: publication,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let updatePublications =  async (req, res) => {
  try {
    let id = req.params.id;
    let publicationInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid publication ID",
        data: null,
        error: null,
      });
    }
    const publication = await Publications.findByIdAndUpdate(id, publicationInfo, { new: true });
    if (!publication) {
      return res.status(404).json({
        message: "Publication not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Publication updated successfully by ID",
      data: publication,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let createPublications = async (req, res) => {
  try {
    const publicationInfo = req.body;
    const publication = new Publications(publicationInfo);
    await publication.save();
    res.status(201).json({
      message: "Publication created successfully",
      data: publication,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

export { getPublications, getPublication, deletePublications, updatePublications, createPublications };