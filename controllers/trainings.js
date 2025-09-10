import Trainings from "../models/trainings.js";

// Controller to handle training-related operations

const getTrainings = async (req, res) => {
  try {
    const trainings = await Trainings.find();
    if (!trainings || trainings.length === 0) {
      return res.status(404).json({
        message: "No trainings found",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Trainings fetched successfully",
      data: trainings,
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

const getTraining = async (req, res) => {
  try {
    const training = await Trainings
      .findById(req.params.id);
    if (!training)
      return res.status(404).json({
        message: "Training not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Training by ID fetched successfully",
      data: training,
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

const createTraining = async (req, res) => {
  try {
    const training = new Trainings(req.body);
    await training.save();
    res.status(201).json({
      message: "Training created successfully",
      data: training,
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

const updateTraining = async (req, res) => {
  try {
    const training = await Trainings
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!training)
      return res.status(404).json({
        message: "Training not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Training updated successfully",
      data: training,
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

const deleteTraining = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const training = await Trainings.deleteOne({
      _id: id,
      user: user._id, // Ensure the user owns the training
    });

    if (!training || training.deletedCount === 0) {
      return res.status(404).json({
        message: "Training not found or not owned by user",
        success: false,
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Training deleted successfully",
      data: training,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null, error: error.message
    });
  }
};

export { getTrainings, getTraining, createTraining, updateTraining, deleteTraining };