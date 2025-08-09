import { getUsers, getUser, deleteUser,  deleteUsers, createUsers } from "../controllers/users.js";
import express from "express";
const router = express.Router();

//Get users
router.get("/", getUsers);

//Get user by ID
router.get("/:id", getUser);


//Delete user by ID
router.delete("/:id", deleteUser);

//delete users
router.delete("/:id", deleteUsers);

// POST create new users
router.post("/", createUsers);

export default router;