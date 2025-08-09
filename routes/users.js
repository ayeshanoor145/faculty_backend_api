import { getUsers, getUser, deleteUser,  updateUsers, createUsers } from "../controllers/users.js";
import express from "express";
const router = express.Router();

//Get users
router.get("/", getUsers);

//Get user by ID
router.get("/:id", getUser);


//Delete user by ID
router.delete("/:id", deleteUser);

// Update user by ID
router.put("/:id", updateUsers);

// POST create new users
router.post("/", createUsers);

export default router;