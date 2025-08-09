import express from "express";
import { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop } from "../controllers/workshops.js";
const router = express.Router();

router.get("/", getWorkshops);
router.get("/:id", getWorkshop);
router.post("/", createWorkshop);
router.put("/:id", updateWorkshop);
router.delete("/:id", deleteWorkshop);

export default router;
