import EducationModel from "../models/educations.js";

// Controller to handle education-related operations

const getEducations = async (req, res) => {
  try {
    const educations = await EducationModel.find();
    res.status(200).json({
      message: "Data fetched successfully",
      data: educations,
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

const getEducation = async (req, res) => {
  try {
    const education = await EducationModel.findById(req.params.id);
    if (!education) return res.status(404).json({
      message: "Education not found",
      data: null, error: null
    });
    res.status(200).json({
      message: "Education by ID fetched successfully",
      data: education,
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

const createEducations = async (req, res) => {
  try {
    const education = new EducationModel(req.body);
    await education.save();
    res.status(201).json({
      message: "Data created successfully",
      data: education,
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

const updateEducation = async (req, res) => {
  try {
    const education = await EducationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!education)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: education,
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

const deleteEducation = async (req, res) => {
  try {
    const education = await EducationModel.findByIdAndDelete(req.params.id);
    if (!education)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data deleted successfully",
      data: education,
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


const deleteEducations = async (req, res) => {
  try {
    const educations = await EducationModel.find().deleteMany({});
    if (educations.deletedCount === 0) {
      return res.status(404).json({
        message: "No data found to delete",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "All data deleted successfully",
      data: educations,
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
}


export { getEducations, getEducation, createEducations, updateEducation, deleteEducation, deleteEducations };