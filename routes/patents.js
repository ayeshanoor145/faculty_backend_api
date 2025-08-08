import express from "express";
import { getPatents, getPatent, createPatent, updatePatent, deletePatent, deletePatents} from "../controllers/patents.js";
const router = express.Router();

router.get("/", getPatents);
router.get("/:id", getPatent);
router.post("/", createPatent);
router.put("/:id", updatePatent);
router.delete("/:id", deletePatent);
router.delete("/", deletePatents);

export default router;
