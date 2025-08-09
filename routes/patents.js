import express from "express";
import { getPatents, getPatent, createPatent, updatePatent, deletePatent } from "../controllers/patents.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getPatents);
router.get("/:id", validateObjectId, getPatent);
router.post("/", createPatent);
router.put("/:id", validateObjectId, updatePatent);
router.delete("/:id", validateObjectId, deletePatent);

export default router;
