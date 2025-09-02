import { getPersonalDetails, getPersonalDetail, createPersonalDetails, deletePersonalDetail, updatePersonalDetails } from "../controllers/personalDetails.js";
import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.js";
const router = express.Router();

router.get("/", getPersonalDetails);
router.get("/:id", validateObjectId, getPersonalDetail);
router.delete("/:id", verifyToken,  validateObjectId, deletePersonalDetail);
router.post("/", verifyToken,  createPersonalDetails);
router.put("/:id", verifyToken,  validateObjectId, updatePersonalDetails);

export default router;