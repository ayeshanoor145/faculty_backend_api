import EmploymentRecords from "../models/employmentRecords.js";


let getEmploymentRecords = async (req, res) => {
    try {
        const records = await EmploymentRecords.find();
        res.status(200).json({
            message: "Employment records fetched successfully",
            data: records,
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



let getEmploymentRecord = async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "Invalid employment record ID",
                data: null,
                error: null,
            });
        }
        const record = await EmploymentRecords.findById(id);
        if (!record) {
            return res.status(404).json({
                message: "Employment record not found",
                data: null,
                error: null,
            });
        }
        res.status(200).json({
            message: "Employment record fetched successfully by ID",
            data: record,
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


let deleteEmploymentRecords = async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid employment record ID",
                data: null,
                error: null,
            });
        }
        const record = await EmploymentRecords.findByIdAndDelete(id);
        if (!record) {
            return res.status(404).json({
                message: "Employment record not found",
                data: null,
                error: null,
            });
        }
        res.status(200).json({
            message: "Employment record deleted successfully",
            data: record,
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


let updateEmploymentRecords = async (req, res) => {
    try {
        let id = req.params.id;
        let recordInfo = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "Invalid employment record ID",
                data: null,
                error: null,
            });
        }
        const record = await EmploymentRecords.findByIdAndUpdate(id, recordInfo, { new: true });
        if (!record) {
            return res.status(404).json({
                message: "Employment record not found",
                data: null,
                error: null,
            });
        }
        res.status(200).json({
            message: "Employment record updated successfully by ID",
            data: record,
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


let createEmploymentRecord = async (req, res) => {
    try {
        const recordInfo = req.body;
        const record = new EmploymentRecords(recordInfo);
        await record.save();
        res.status(201).json({
            message: "Employment record created successfully",
            data: record,
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

export { getEmploymentRecords, getEmploymentRecord, deleteEmploymentRecords, updateEmploymentRecords, createEmploymentRecord };