
import Distinictions from "../models/distinctions.js";


let getDistinctions = async (req, res) => {
  try {
    const distinctions = await Distinctions.find();
    res.status(200).json({
      message: "Distinctions fetched successfully",
      data: distinctions,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let getDistinction = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid distinction ID",
        data: null,
        error: null,
      });
    }
    const distinction = await Distinctions.findById(id);
    if (!distinction) {
      return res.status(404).json({
        message: "Distinction not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Distinction fetched successfully by ID",
      data: distinction,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let deleteDistinctions = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid distinction ID",
        data: null,
        error: null,
      });
    }
    const distinction = await Distinctions.findByIdAndDelete(id);
    if (!distinction) {
      return res.status(404).json({
        message: "Distinction not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Distinction deleted successfully",
      data: distinction,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });

  }

}


let updateDistinctions = async (req, res) => {
  try {
    let id = req.params.id;
    let distinctionInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid distinction ID",
        data: null,
        error: null,
      });
    }
    const distinction = await Distinctions.findByIdAndUpdate(id, distinctionInfo, { new: true });
    if (!distinction) {
      return res.status(404).json({
        message: "Distinction not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Distinction updated successfully by ID",
      data: distinction,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}


let createDistinctions = async (req, res) => {
  try {
    const distinctionInfo = req.body;
    const distinction = new Distinctions(distinctionInfo);
    await distinction.save();
    res.status(201).json({
      message: "Distinction created successfully",
      data: distinction,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
}

export { getDistinctions , getDistinction, deleteDistinctions , updateDistinctions , createDistinctions };