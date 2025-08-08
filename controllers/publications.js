import PublicationModel from "../models/publications.js";

const getPublications = async (req, res) => {
  try {
    const publications = await PublicationModel.find();
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
    const publication = await PublicationModel
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
    const publication = new PublicationModel(req.body);
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
    const publication = await PublicationModel
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
    const publication = await PublicationModel
      .findByIdAndDelete(req.params.id);
    if (!publication)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
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

const deletePublications = async (req, res) => {
  try {
    const publications = await PublicationModel
      .find().deleteMany({});
    if (publications.deletedCount === 0)
      return res.status(404).json({
        message: "No data found to delete",
        data: null,
        error: null
      });

    res.status(200).json({
      message: "All data deleted successfully",
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
export { getPublications, getPublication, createPublication, updatePublication, deletePublication, deletePublications };