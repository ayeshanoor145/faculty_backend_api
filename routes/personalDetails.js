import { getPersonalDetails, getPersonalDetail, createPersonalDetails, deletePersonalDetail, updatePersonalDetails } from "../controllers/personalDetails.js";
import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

//Get PersonalDetails
router.get("/", getPersonalDetails);

//Get PersonalDetail by ID
router.get("/:id", validateObjectId, getPersonalDetail);

//delete PersonalDetail
router.delete("/:id", validateObjectId, deletePersonalDetail);

// POST create new PersonalDetails
router.post("/", createPersonalDetails);

//PUT request
router.put("/:id", validateObjectId, updatePersonalDetails);

export default router;