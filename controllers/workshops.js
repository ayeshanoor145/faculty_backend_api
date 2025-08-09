import Workshops from "../models/workshops.js";

// Controller to handle workshop-related operations

const getWorkshops = async (req, res) => {
  try {
    const workshops = await Workshops.find();
    res.status(200).json({
      message: "Data fetched successfully",
      data: workshops,
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

const getWorkshop = async (req, res) => {
  try {
    const workshop = await Workshops
      .findById(req.params.id);
    if (!workshop)
      return res.status(404).json({
        message: "Workshop not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Workshop by ID fetched successfully",
      data: workshop,
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

const createWorkshop = async (req, res) => {
  try {
    const workshop = new Workshops(req.body);
    await workshop.save();
    res.status(201).json({
      message: "Data created successfully",
      data: workshop,
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

const updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshops
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workshop)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: workshop,
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

const deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshops
      .findByIdAndDelete(req.params.id);
    if (!workshop)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data deleted successfully",
      data: workshop,
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

export { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop };