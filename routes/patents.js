import express from "express";
import { getPatents, getPatent, createPatent, updatePatent, deletePatent } from "../controllers/patents.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPatents);
router.get("/:id", validateObjectId, getPatent);
router.post("/", verifyToken,  createPatent);
router.put("/:id", verifyToken,  validateObjectId, updatePatent);
router.delete("/:id", verifyToken,  validateObjectId, deletePatent);

export default router;
