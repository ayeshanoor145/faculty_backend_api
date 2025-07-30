import Educations from "../models/educations.js";
import mongoose from "mongoose";

let getEducations = async (req, res) => {
  try {
    //Fetch educations from the database
    const educations = await Educations.find()
    res.status(200).json({
      message: "Educations fetched successfully",
      data: educations,
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

let getEducation = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid education ID",
        data: null,
        error: null,
      })
    }
    //Fetch educations from the database by id
    const education = await Educations.findById(id)
    if (!education) {
      return res.status(404).json({
        message: "Educations not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Educations fetched successfully by ID",
      data: education,
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

let createEducation = async (req, res) => {

  try {
    let educationInfo = req.body;
    const education = Educations(educationInfo);     //create a new Education instance
    await education.save();    //save the Education to database
    res.status(201).json({
      message: "Education created successfully",
      data: education,
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

let updateEducation = async (req, res) => {
  try {
    let id = req.params.id;
    let educationInfo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid education ID",
        data: null,
        error: null,
      })
    }
    //Fetch educations from the database by id
    const education = await Educations.findByIdAndUpdate(id, educationInfo,
      { new: true } //Return the updated document
    );
    if (!education) {
      return res.status(404).json({
        message: "Educations not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Educations updated successfully by ID",
      data: education,
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

let deleteEducation =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid education ID",
        data: null,
        error: null,
      })
    }
    //Fetch educations from the database by id
    const education = await Educations.findByIdAndDelete(id)
    if (!education) {
      return res.status(404).json({
        message: "Education not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Educations deleted successfully",
      data: education,
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

export {getEducations, getEducation, createEducation, updateEducation, deleteEducation};