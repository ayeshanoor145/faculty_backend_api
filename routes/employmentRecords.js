import express from "express";
import { getEmploymentRecords, getEmploymentRecord, createEmploymentRecord, updateEmploymentRecord, deleteEmploymentRecord  } from "../controllers/employmentRecords.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken,  getEmploymentRecords);
router.get("/:id", verifyToken,  validateObjectId, getEmploymentRecord);
router.post("/", verifyToken,  createEmploymentRecord);
router.put("/:id", verifyToken,  validateObjectId, updateEmploymentRecord);
router.delete("/:id", verifyToken,  validateObjectId, deleteEmploymentRecord);

export default router;
