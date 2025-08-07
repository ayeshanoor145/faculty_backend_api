import EmploymentRecordModel from "../models/employmentRecords.js";

// Controller to handle employment record-related operations

const getEmploymentRecords = async (req, res) => {
  try {
    const records = await EmploymentRecordModel.find();
    res.status(200).json({ message: "Employment records fetched successfully", data: records, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const getEmploymentRecord = async (req, res) => {
  try {
    const record = await EmploymentRecordModel.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Employment record not found", data: null, error: null });
    res.status(200).json({ message: "Employment record fetched successfully", data: record, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const createEmploymentRecord = async (req, res) => {
  try {
    const record = new EmploymentRecordModel(req.body);
    await record.save();
    res.status(201).json({ message: "Employment record created successfully", data: record, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const updateEmploymentRecord = async (req, res) => {
  try {
    const record = await EmploymentRecordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) return res.status(404).json({ message: "Employment record not found", data: null, error: null });
    res.status(200).json({ message: "Employment record updated successfully", data: record, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const deleteEmploymentRecord = async (req, res) => {
  try {
    const record = await EmploymentRecordModel.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ message: "Employment record not found", data: null, error: null });
    res.status(200).json({ message: "Employment record deleted successfully", data: record, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

export { getEmploymentRecords, getEmploymentRecord, createEmploymentRecord, updateEmploymentRecord, deleteEmploymentRecord };