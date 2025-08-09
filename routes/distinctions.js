import express from "express";
import {  getDistinctions,   getDistinction,   createDistinction,   updateDistinction,   deleteDistinction } from "../controllers/distinctions.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", getDistinctions);
router.get("/:id", validateObjectId, getDistinction);
router.post("/", createDistinction);
router.put("/:id", validateObjectId, updateDistinction);
router.delete("/:id", validateObjectId, deleteDistinction);

export default router;