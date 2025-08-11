import PersonalDetailsModel from "../models/personalDetails.js";

// Get all personal details
const getPersonalDetails = async (req, res) => {
  try {
    const details = await PersonalDetailsModel.find();
    res.status(200).json({
      message: "Data details fetched successfully",
      data: details,
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

// Get personal detail by ID
const getPersonalDetail = async (req, res) => {
  try {
    const detail = await PersonalDetailsModel
      .findById(req.params.id);
    if (!detail)
      return res.status(404).json({
        message: "Personal detail not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Personal detail by ID fetched successfully",
      data: detail,
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

// Create new personal detail
const createPersonalDetails = async (req, res) => {
  try {
    let { fullName, designation, contactNumber, biosketch } = req.body;
    let error = [];
    if (!fullName)
      error.push("Full fullName is required");
    if (!designation)
      error.push("Designation is required");
    if (!contactNumber)
      error.push("Contact number is required");
    if (!biosketch)
      error.push("Biosketch is required");
    if (error.length > 0) {
      return res.status(400).json({
        message: "Validation error",
        data: null,
        error: error.join(", ")
      });
    }
    let user = req.user;
    const detail = new PersonalDetailsModel({ fullName, designation, contactNumber, biosketch, user: user.id });
    await detail.save();
    res.status(201).json({
      message: "Data detail created successfully",
      data: detail,
      error: null
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
};

// Update personal detail by ID
const updatePersonalDetails = async (req, res) => {
  try {
    const detail = await PersonalDetailsModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!detail)
      return res.status(404).json({
        message: "Data detail not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data detail updated successfully",
      data: detail,
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

// Delete personal detail by ID
const deletePersonalDetail = async (req, res) => {
  try {
    const detail = await PersonalDetailsModel
      .findByIdAndDelete(req.params.id);
    if (!detail) return res.status(404).json({
      message: "Data detail not found",
      data: null,
      error: null
    });
    res.status(200).json({
      message: "Data detail deleted successfully",
      data: detail,
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

export { getPersonalDetails, getPersonalDetail, createPersonalDetails, updatePersonalDetails, deletePersonalDetail };