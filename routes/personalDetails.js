import { getPersonalDetails, getPersonalDetail, deletePersonalDetails, createPersonalDetails, deletePersonalDetail, updatePersonalDetails } from "../controllers/personalDetails.js";
import express from "express";
const router = express.Router();

//Get PersonalDetails
router.get("/", getPersonalDetails);

//Get PersonalDetail by ID
router.get("/:id", getPersonalDetail);

//delete PersonalDetail
router.delete("/:id", deletePersonalDetail);

// POST create new PersonalDetails
router.post("/", createPersonalDetails);

//PUT request
router.put("/:id", updatePersonalDetails);

// DELETE all PersonalDetails
router.delete("/", deletePersonalDetails);

export default router;