import Patents from "../models/patents.js";

// Controller to handle patent-related operations

const getPatents = async (req, res) => {
  try {
    const patents = await Patents.find();
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
    const patent = await PatentModel
      .findByIdAndDelete(req.params.id);
    if (!patent) return res.status(404).json({
      message: "Data not found",
      data: null,
      error: null
    });
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