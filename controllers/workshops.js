import Workshops from "../models/workshops.js";

// Controller to handle workshop-related operations

const getWorkshops = async (req, res) => {
  try {
    const workshops = await Workshops.find();
    if (!workshops || workshops.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No workshops found",
        data: null,
        error: ["No workshops found"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: workshops,
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

const getWorkshop = async (req, res) => {
  try {
    const workshop = await Workshops
      .findById(req.params.id);
    if (!workshop)
      return res.status(404).json({
        success: false,
        message: "Workshop not found",
        data: null,
        error: ["Workshop not found with the provided ID"], // Fixed: removed error.message reference
      });
    res.status(200).json({
      success: true,
      message: "Workshop by ID fetched successfully",
      data: workshop,
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

const createWorkshop = async (req, res) => {
  try {
    const workshop = new Workshops(req.body);
    await workshop.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: workshop,
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

const updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshops
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workshop)
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: null,
        error: ["Workshop not found with the provided ID"], // Fixed: removed error.message reference
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: workshop,
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

const deleteWorkshop = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const workshop = await Workshops.deleteOne({
      _id: id,
      user: user._id
    });
    if (!workshop || workshop.deletedCount === 0) {
      return res.status(404).json({
        message: "Data not found or not owned by user",
        success: false,
        data: null,
        error: ["Workshop not found or not owned by user"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: workshop,
      error: null,
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

export { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop };