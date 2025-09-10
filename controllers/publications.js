import Publications from "../models/publications.js";

const getPublications = async (req, res) => {
  try {
    const publications = await Publications.find();
    if (!publications || publications.length === 0) {
      return res.status(404).json({
        message: "No publications found",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data fetched successfully",
      data: publications,
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

const getPublication = async (req, res) => {
  try {
    const publication = await Publications
      .findById(req.params.id);
    if (!publication)
      return res.status(404).json({
        message: "Publication not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Publication by ID fetched successfully",
      data: publication,
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

const createPublication = async (req, res) => {
  try {
    const publication = new Publications(req.body);
    await publication.save();
    res.status(201).json({
      message: "Data created successfully",
      data: publication,
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

const updatePublication = async (req, res) => {
  try {
    const publication = await Publications
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publication)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: publication,
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

const deletePublication = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const publication = await Publications.deleteOne({
      _id: id,
      user: user._id, // Ensure the user owns the publication 
    });

    if (!publication || publication.deletedCount === 0) {
      return res.status(404).json({
        message: "Publication  not found or not owned by user",
        success: false,
        data: null,
        error: null,
      });
    }

    res.status(200).json({
      message: "Data deleted successfully",
      data: publication,
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

export { getPublications, getPublication, createPublication, updatePublication, deletePublication };