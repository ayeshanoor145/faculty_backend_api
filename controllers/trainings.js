import TrainingModel from "../models/trainings.js";

// Controller to handle training-related operations

const getTrainings = async (req, res) => {
  try {
    const trainings = await TrainingModel.find();
    res.status(200).json({ message: "Trainings fetched successfully", data: trainings, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const getTraining = async (req, res) => {
  try {
    const training = await TrainingModel.findById(req.params.id);
    if (!training) return res.status(404).json({ message: "Training not found", data: null, error: null });
    res.status(200).json({ message: "Training fetched successfully", data: training, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const createTraining = async (req, res) => {
  try {
    const training = new TrainingModel(req.body);
    await training.save();
    res.status(201).json({ message: "Training created successfully", data: training, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const updateTraining = async (req, res) => {
  try {
    const training = await TrainingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!training) return res.status(404).json({ message: "Training not found", data: null, error: null });
    res.status(200).json({ message: "Training updated successfully", data: training, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const deleteTraining = async (req, res) => {
  try {
    const training = await TrainingModel.findByIdAndDelete(req.params.id);
    if (!training) return res.status(404).json({ message: "Training not found", data: null, error: null });
    res.status(200).json({ message: "Training deleted successfully", data: training, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

export { getTrainings, getTraining, createTraining, updateTraining, deleteTraining };