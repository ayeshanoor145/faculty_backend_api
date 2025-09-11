import Distinctions from "../models/distinctions.js";

// Controller to handle distinction-related operations

const getDistinctions = async (req, res) => {
  try {
    const distinctions = await Distinctions.find();

    if (!distinctions || distinctions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No distinctions found",
        data: null,
        error: ["No distinctions available in the database"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: distinctions,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const getDistinction = async (req, res) => {
  try {
    const distinction = await Distinctions.findById(req.params.id);
    if (!distinction)
      return res.status(404).json({
        success: false,
        message: "Distinction not found",
        data: null,
        error: ["Distinction not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Distinction by ID fetched successfully",
      data: distinction,
      error: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const createDistinction = async (req, res) => {
  try {
    const distinction = new Distinctions(req.body);
    await distinction.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: distinction,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const updateDistinction = async (req, res) => {
  try {
    const distinction = await Distinctions.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!distinction)
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: null,
        error: ["Distinction not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: distinction,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const deleteDistinction = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const distinction = await Distinctions.deleteOne({
      _id: id,
      user: user._id  // Ensure the user owns the distinction record
    });
    if (!distinction || distinction.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found or you are not authorized to delete this distinction",
        data: null,
        error: ["Distinction not found or you don't have permission to delete it"]
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: distinction,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message]
    });
  }
};

export { getDistinctions, getDistinction, createDistinction, updateDistinction, deleteDistinction };