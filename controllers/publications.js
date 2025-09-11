import Publications from "../models/publications.js";

const getPublications = async (req, res) => {
  try {
    const publications = await Publications.find();
    if (!publications || publications.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No publications found",
        data: null,
        error: ["No publications found"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: publications,
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

const getPublication = async (req, res) => {
  try {
    const publication = await Publications
      .findById(req.params.id);
    if (!publication)
      return res.status(404).json({
        success: false,
        message: "Publication not found",
        data: null,
        error: ["Publication not found with the provided ID"], // Fixed: removed error.message reference
      });
    res.status(200).json({
      success: true,
      message: "Publication by ID fetched successfully",
      data: publication,
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

const createPublication = async (req, res) => {
  try {
    const publication = new Publications(req.body);
    await publication.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: publication,
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

const updatePublication = async (req, res) => {
  try {
    const publication = await Publications
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publication)
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: null,
        error: ["Publication not found with the provided ID"], // Fixed: removed error.message reference
      });
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: publication,
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

const deletePublication = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    console.log(user);
    const publication = await Publications.deleteOne({
      _id: id,
      user: user._id, // Ensure the user owns the publication 
    });

    if (!publication || publication.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Publication not found or not owned by user",
        data: null,
        error: ["Publication not found or not owned by user"], 
      });
    }

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: publication,
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

export { getPublications, getPublication, createPublication, updatePublication, deletePublication };