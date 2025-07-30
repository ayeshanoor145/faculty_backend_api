import Patents from "../models/patents.js";
import mongoose from "mongoose";


let getPatents = async (req, res) => {
  try {
    const patents = await Patents.find();
    res.status(200).json({
      message: "Patents fetched successfully",
      data: patents,
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


let getPatent =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid patent ID",
        data: null,
        error: null,
      });
    }
    const patent = await Patents.findById(id);
    if (!patent) {
      return res.status(404).json({
        message: "Patent not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Patent fetched successfully by ID",
      data: patent,
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


let deletePatents =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid patent ID",
        data: null,
        error: null,
      });
    }
    const patent = await Patents.findByIdAndDelete(id);
    if (!patent) {
      return res.status(404).json({
        message: "Patent not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Patent deleted successfully",
      data: patent,
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


let updatePatents = async (req, res) => {
  try {
    let id = req.params.id;
    let patentInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid patent ID",
        data: null,
        error: null,
      });
    }
    const patent = await Patents.findByIdAndUpdate(id, patentInfo, { new: true });
    if (!patent) {
      return res.status(404).json({
        message: "Patent not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Patent updated successfully by ID",
      data: patent,
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


let createPatents = async (req, res) => {
  try {
    const patentInfo = req.body;
    const patent = new Patents(patentInfo);
    await patent.save();
    res.status(201).json({
      message: "Patent created successfully",
      data: patent,
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

export { getPatents, getPatent, deletePatents, updatePatents, createPatents };