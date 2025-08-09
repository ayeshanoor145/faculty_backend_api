import express from "express";
import {  getDistinctions,   getDistinction,   createDistinction,   updateDistinction,   deleteDistinction,   deleteDistinctions } from "../controllers/distinctions.js";

const router = express.Router();

router.get("/", getDistinctions);
router.get("/:id", getDistinction);
router.post("/", createDistinction);
router.put("/:id", updateDistinction);
router.delete("/:id", deleteDistinction);
router.delete("/", deleteDistinctions);

export default router;