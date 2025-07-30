import {
    getEmploymentRecords, getEmploymentRecord, deleteEmploymentRecords,
    updateEmploymentRecords, createEmploymentRecord
} from "../controllers/employmentRecords.js";

import express from "express";
const router = express.Router();

// GET all employment records
router.get("/", getEmploymentRecords);

// GET employment record by ID
router.get("/:id", getEmploymentRecord);

// POST create new employment record
router.post("/", createEmploymentRecord);

// PUT update employment record by ID
router.put("/:id", updateEmploymentRecords);

// DELETE employment record by ID
router.delete("/:id", deleteEmploymentRecords);

export default router;