import Workshops from "../models/workshops.js";


let getWorkshops =  async (req, res) => {
  try {
    const workshops = await Workshops.find();
    res.status(200).json({
      message: "Workshops fetched successfully",
      data: workshops,
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


let getWorkshop = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid workshop ID",
        data: null,
        error: null,
      });
    }
    const workshop = await Workshops.findById(id);
    if (!workshop) {
      return res.status(404).json({
        message: "Workshop not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Workshop fetched successfully by ID",
      data: workshop,
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


let deleteWorkshops =  async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid workshop ID",
        data: null,
        error: null,
      });
    }
    const workshop = await Workshops.findByIdAndDelete(id);
    if (!workshop) {
      return res.status(404).json({
        message: "Workshop not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Workshop deleted successfully",
      data: workshop,
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


let updateWorkshops = async (req, res) => {
  try {
    let id = req.params.id;
    let workshopInfo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid workshop ID",
        data: null,
        error: null,
      });
    }
    const workshop = await Workshops.findByIdAndUpdate(id, workshopInfo, { new: true });
    if (!workshop) {
      return res.status(404).json({
        message: "Workshop not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Workshop updated successfully by ID",
      data: workshop,
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


let createWorkshops =  async (req, res) => {
  try {
    const workshopInfo = req.body;
    const workshop = new Workshops(workshopInfo);
    await workshop.save();
    res.status(201).json({
      message: "Workshop created successfully",
      data: workshop,
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

export { getWorkshops, getWorkshop, deleteWorkshops, updateWorkshops, createWorkshops };