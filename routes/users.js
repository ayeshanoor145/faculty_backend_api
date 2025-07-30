import { getUsers, getUser, deleteUsers, createUsers, updateUsers } from "../controllers/users.js";
import express from "express";
const router = express.Router();

//Get users
router.get("/", getUsers);

//Get user by ID
router.get("/:id", getUser);

//delete user
router.delete("/:id", deleteUsers);

// POST create new users
router.post("/", createUsers);

//PUT request
router.put("/:id", updateUsers);

export default router;