import Patents from "../models/patents.js";

// Controller to handle patent-related operations

const getPatents = async (req, res) => {
  try {
    const patents = await Patents.find();
    if (!patents || patents.length === 0) {
      return res.status(404).json({
        message: "No patents found",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data fetched successfully",
      data: patents,
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

const getPatent = async (req, res) => {
  try {
    const patent = await Patents
      .findById(req.params.id);
    if (!patent)
      return res.status(404).json({
        message: "Patent not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Patent by ID fetched successfully",
      data: patent,
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

const createPatent = async (req, res) => {
  try {
    const patent = new Patents(req.body);
    await patent.save();
    res.status(201).json({
      message: "Data created successfully",
      data: patent,
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

const updatePatent = async (req, res) => {
  try {
    const patent = await Patents
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patent)
      return res.status(404).json({
        message: "Data not found",
        data: null,

        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: patent,
      error: null
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
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
    if (!patent|| patent.deletedCount === 0) {
      return res.status(404).json({
        message: "Data not found or you are not authorized to delete this patent",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data deleted successfully",
      data: patent,
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


export { getPatents, getPatent, createPatent, updatePatent, deletePatent };