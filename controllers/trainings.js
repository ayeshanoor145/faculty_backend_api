import Trainings from "../models/trainings.js";
import mongoose from "mongoose";


let getTrainings =  async (req, res) => {
  try {
    const trainings = await Trainings.find();
    res.status(200).json({
      message: "Trainings fetched successfully",
      data: trainings,
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


let getTraining =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid training ID",
        data: null,
        error: null,
      });
    }
    const training = await Trainings.findById(id);
    if (!training) {
      return res.status(404).json({
        message: "Training not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Training fetched successfully by ID",
      data: training,
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


let deleteTrainings = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid training ID",
        data: null,
        error: null,
      });
    }
    const training = await Trainings.findByIdAndDelete(id);
    if (!training) {
      return res.status(404).json({
        message: "Training not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Training deleted successfully",
      data: training,
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


let updateTrainings = async (req, res) => {
  try {
    let id = req.params.id;
    let trainingInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid training ID",
        data: null,
        error: null,
      });
    }
    const training = await Trainings.findByIdAndUpdate(id, trainingInfo, { new: true });
    if (!training) {
      return res.status(404).json({
        message: "Training not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Training updated successfully by ID",
      data: training,
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


let createTrainings = async (req, res) => {
  try {
    const trainingInfo = req.body;
    const training = new Trainings(trainingInfo);
    await training.save();
    res.status(201).json({
      message: "Training created successfully",
      data: training,
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

export { getTrainings, getTraining, deleteTrainings, updateTrainings, createTrainings };