import EmploymentRecords from "../models/employmentRecords.js";
import EmploymentRecordModel from "../models/employmentRecords.js";

// Controller to handle employment record-related operations

const getEmploymentRecords = async (req, res) => {
  try {
    const employmentRecords = await EmploymentRecords.find();

    if (!employmentRecords || employmentRecords.length === 0) {
      return res.status(404).json({
        message: "No employment records found",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data records fetched successfully",
      data: records,
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

const getEmploymentRecord = async (req, res) => {
  try {
    const record = await EmploymentRecordModel.findById(req.params.id);
    if (!record)
      return res.status(404).json({
        message: "Employment record not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Employment by ID record fetched successfully",
      data: record,
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

const createEmploymentRecord = async (req, res) => {
  try {
    const record = new EmploymentRecordModel(req.body);
    await record.save();
    res.status(201).json({
      message: "Data created successfully",
      data: record,
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

const updateEmploymentRecord = async (req, res) => {
  try {
    const record = await EmploymentRecordModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record)
      return res.status(404).json({
        message: "Data not found",
        data: null,
        error: null
      });
    res.status(200).json({
      message: "Data updated successfully",
      data: record,
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

const deleteEmploymentRecord = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user;
    const record = await EmploymentRecords.deleteOne({
      _id: id,
      user:  user._id  // Ensure the user owns the employment record
    });
    if (!record || record.deletedCount === 0) {
      return res.status(404).json({
        message: "Data not found or you are not authorized to delete this record",
        data: null,
        error: null
      });
    }
    res.status(200).json({
      message: "Data deleted successfully",
      data: record,
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

export { getEmploymentRecords, getEmploymentRecord, createEmploymentRecord, updateEmploymentRecord, deleteEmploymentRecord };