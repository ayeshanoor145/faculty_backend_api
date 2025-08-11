import { getPersonalDetails, getPersonalDetail, createPersonalDetails, deletePersonalDetail, updatePersonalDetails } from "../controllers/personalDetails.js";
import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

//Get PersonalDetails
router.get("/", getPersonalDetails);

//Get PersonalDetail by ID
router.get("/:id", validateObjectId, getPersonalDetail);

//delete PersonalDetail
router.delete("/:id", verifyToken,  validateObjectId, deletePersonalDetail);

// POST create new PersonalDetails
router.post("/", verifyToken,  createPersonalDetails);

//PUT request
router.put("/:id", verifyToken,  validateObjectId, updatePersonalDetails);

export default router;