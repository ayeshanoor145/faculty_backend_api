import DistinctionModel from "../models/distinctions.js";

// Controller to handle distinction-related operations

const getDistinctions = async (req, res) => {
  try {
    const distinctions = await DistinctionModel.find();
    res.status(200).json({
      message: "Data fetched successfully",
      data: distinctions,
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

const getDistinction = async (req, res) => {
  try {
    const distinction = await DistinctionModel.findById(req.params.id);
    if (!distinction)
      return res.status(404).json({
        message: "Distinction not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Distinction by ID fetched successfully",
      data: distinction,
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

const createDistinction = async (req, res) => {
  try {
    const distinction = new DistinctionModel(req.body);
    await distinction.save();
    res.status(201).json({
      message: "Data created successfully",
      data: distinction,
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

const updateDistinction = async (req, res) => {
  try {
    const distinction = await DistinctionModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!distinction)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: distinction,
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

const deleteDistinction = async (req, res) => {
  try {
    const distinction = await DistinctionModel
      .findByIdAndDelete(req.params.id);

    if (!distinction)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data deleted successfully",
      data: distinction,
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

const deleteDistinctions = async (req, res) => {
  try {
    const distinctions = await DistinctionModel.find().deleteMany({});
    if (distinctions.deletedCount === 0)
      return res.status(404).json({
        message: "No data found to delete",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "All data deleted successfully",
      data: distinctions,
      error: null
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message
    });
  }
}


export { 
  getDistinctions, 
  getDistinction, 
  createDistinction, 
  updateDistinction, 
  deleteDistinction, 
  deleteDistinctions 
};