import { getUsers, getUser, deleteUser,  updateUsers, createUsers } from "../controllers/users.js";
import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
const router = express.Router();

//Get users
router.get("/", getUsers);

//Get user by ID
router.get("/:id", validateObjectId, getUser);


//Delete user by ID
router.delete("/:id", validateObjectId, deleteUser);

// Update user by ID
router.put("/:id", validateObjectId, updateUsers);

// POST create new users
router.post("/", createUsers);

export default router;