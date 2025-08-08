import express from "express";
import { getEmploymentRecords, getEmploymentRecord, createEmploymentRecord, updateEmploymentRecord, deleteEmploymentRecord , deleteEmploymentRecords  } from "../controllers/employmentRecords.js";
const router = express.Router();

router.get("/", getEmploymentRecords);
router.get("/:id", getEmploymentRecord);
router.post("/", createEmploymentRecord);
router.put("/:id", updateEmploymentRecord);
router.delete("/:id", deleteEmploymentRecord);
router.delete("/", deleteEmploymentRecords);

export default router;
