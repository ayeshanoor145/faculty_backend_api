import express from "express";
import { getEmploymentRecords, getEmploymentRecord, createEmploymentRecord, updateEmploymentRecord, deleteEmploymentRecord  } from "../controllers/employmentRecords.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getEmploymentRecords);
router.get("/:id", validateObjectId, getEmploymentRecord);
router.post("/", createEmploymentRecord);
router.put("/:id", validateObjectId, updateEmploymentRecord);
router.delete("/:id", validateObjectId, deleteEmploymentRecord);

export default router;
