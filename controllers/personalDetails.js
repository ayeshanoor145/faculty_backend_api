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

// Create new personal detail - CORRECTED VERSION
const createPersonalDetails = async (req, res) => {
  try {
    // Destructure ALL required fields from request body
    const { 
      fullName, 
      designation, 
      contactNumber, 
      biosketch,
      email, 
      researchArea,
      academicTitle,
      subject,
      majorSpecialization,
      nationality,
      researcherId,
      researcherUrl,
      orcidId,
      orcidUrl,
      googleScholarLink
    } = req.body;

    // Validate ALL required fields
    let errors = [];
    if (!fullName) errors.push("Full name is required");
    if (!designation) errors.push("Designation is required");
    if (!contactNumber) errors.push("Contact number is required");
    if (!biosketch) errors.push("Biosketch is required");
    if (!email) errors.push("Email is required");
    if (!researchArea) errors.push("Research area is required");

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation error",
        data: null,
        error: errors.join(", ")
      });
    }

    // Get user from request (assuming you have authentication middleware)
    const user = req.user;

    // Create new document with ALL fields
    const detail = new PersonalDetailsModel({
      user: user.id,
      fullName,
      designation,
      contactNumber,
      biosketch,
      email, // Include email in the document
      researchArea, // Include researchArea in the document
      // Include other fields
      academicTitle,
      subject,
      majorSpecialization,
      nationality,
      researcherId,
      researcherUrl,
      orcidId,
      orcidUrl,
      googleScholarLink
    });

    await detail.save();
    
    res.status(201).json({
      message: "Personal details created successfully",
      data: detail,
      error: null
    });
  } catch (error) {
    // More detailed error logging
    console.error("Error creating personal details:", error);
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