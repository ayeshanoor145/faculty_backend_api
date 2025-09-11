import Educations from "../models/educations.js";
// Controller to handle education-related operations

const getEducations = async (req, res) => {
  try {
    const educations = await Educations.find().populate("user", [
      "fullName",
      "email",
    ]); // Populate user details
    if (!educations || educations.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No educations found",
        data: null,
        error: ["Data not found"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: educations,
      error: null,
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

const getEducation = async (req, res) => {
  try {
    const education = await Educations.findById(req.params.id).populate(
      "user",
      ["fullName", "email"]
    );
    if (!education)
      return res.status(404).json({
        success: false,
        message: "Education not found",
        data: null,
        error: ["Education record not found with the provided ID"],
      });
    res.status(200).json({
      success: true,
      message: "Education by ID fetched successfully",
      data: education,
      error: null,
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

const createEducations = async (req, res) => {
  try {
    // Validate education data
    if (!req.body.education?.length) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Validation error",
        error: ["At least one education entry is required"],
      });
    }

    // Create and save education
    const education = await Educations.create({
      ...req.body,
      user: req.user._id,
    });
    await education.save();
    // Get education with populated user data
    const result = await Educations.findById(education._id).populate("user", [
      "fullName",
      "email",
    ]);

    res.status(201).json({
      success: true,
      message: "Education created successfully",
      data: result,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Error creating education",
      error: [error.message],
    });
  }
};

const updateEducation = async (req, res) => {
  try {
    const id = req.params.id;
    let educationData = req.body;
    let user = req.user;
    let userId = user._id;

    const education = await Educations.findOneAndUpdate(
      {
        _id: id,
        user: userId, // Ensure the user owns the education Data
      },
      educationData,
      {
        new: true,
      }
    ).populate("user", ["fullName", "email"]);
    if (!education)
      return res.status(404).json({
        success: false,
        message: "Education record not found or not owned by user",
        data: null,
        error: ["Education record not found or you don't have permission to update it"],
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: education,
      error: null,
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

const deleteEducation = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const education = await Educations.deleteOne({
      _id: id,
      user: user._id, // Ensure the user owns the education record
    });

    if (!education || education.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Education not found or not owned by user",
        data: null,
        error: ["Education record not found or you don't have permission to delete it"],
      });
    }

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: education,
      error: null,
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

export { getEducations, getEducation, createEducations, updateEducation, deleteEducation };