import {
    getEmploymentRecords, getEmploymentRecord, deleteEmploymentRecords,
    updateEmploymentRecords, createEmploymentRecord
} from "../controllers/employmentRecords.js";

import express from "express";
const router = express.Router();

// GET all employment records
router.get("/employmentRecords", getEmploymentRecords);

// GET employment record by ID
router.get("/employmentRecords/:id", getEmploymentRecord);

// POST create new employment record
router.post("/employmentRecords", createEmploymentRecord);

// PUT update employment record by ID
router.put("/employmentRecords/:id", updateEmploymentRecords);

// DELETE employment record by ID
router.delete("/employmentRecords/:id", deleteEmploymentRecords);

export default router;