import express from "express";
import { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop } from "../controllers/workshops.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/",  verifyToken, getWorkshops);
router.get("/:id", verifyToken,  validateObjectId, getWorkshop);
router.post("/", verifyToken,  createWorkshop);
router.put("/:id", verifyToken,  validateObjectId, updateWorkshop);
router.delete("/:id", verifyToken,  validateObjectId, deleteWorkshop);

export default router;
