import Patents from "../models/patents.js";

// Controller to handle patent-related operations

const getPatents = async (req, res) => {
  try {
    const patents = await Patents.find();
    if (!patents || patents.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No patents found",
        data: null,
        error: ["No patents available in the database"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: patents,
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

const getPatent = async (req, res) => {
  try {
    const patent = await Patents
      .findById(req.params.id);
    if (!patent)
      return res.status(404).json({
        success: false,
        message: "Patent not found",
        data: null,
        error: ["Patent not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Patent by ID fetched successfully",
      data: patent,
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

const createPatent = async (req, res) => {
  try {
    const patent = new Patents(req.body);
    await patent.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: patent,
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

const updatePatent = async (req, res) => {
  try {
    const patent = await Patents
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patent)
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: null,
        error: ["Patent not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: patent,
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

const deletePatent = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const patent = await Patents.deleteOne({ 
      _id: id,
      user: user._id  // Ensure the user owns the patent record
    });
    if (!patent || patent.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found or you are not authorized to delete this patent",
        data: null,
        error: ["Patent not found or you don't have permission to delete it"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: patent,
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


export { getPatents, getPatent, createPatent, updatePatent, deletePatent };