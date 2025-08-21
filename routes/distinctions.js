import express from "express";
import {  getDistinctions,   getDistinction,   createDistinction,   updateDistinction,   deleteDistinction } from "../controllers/distinctions.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyAdmin, getDistinctions);
router.get("/:id", validateObjectId, getDistinction);
router.post("/",  verifyToken, createDistinction);
router.put("/:id", verifyToken,  validateObjectId, updateDistinction);
router.delete("/:id",  verifyToken, validateObjectId, deleteDistinction);

export default router;