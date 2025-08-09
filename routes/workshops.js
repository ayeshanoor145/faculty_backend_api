import express from "express";
import { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop } from "../controllers/workshops.js";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

router.get("/", getWorkshops);
router.get("/:id", validateObjectId, getWorkshop);
router.post("/", createWorkshop);
router.put("/:id", validateObjectId, updateWorkshop);
router.delete("/:id", validateObjectId, deleteWorkshop);

export default router;
