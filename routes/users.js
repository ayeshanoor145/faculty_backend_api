import { getUsers, getUser, deleteUsers, createUsers, updateUsers } from "../controllers/users.js";
import express from "express";
const router = express.Router();

//Get users
router.get("/users", getUsers);

//Get user by ID
router.get("/users/:id", getUser);

//delete user
router.delete("/users/:id", deleteUsers);

// POST create new users
router.post("/users", createUsers);

//PUT request
router.put("/users/:id", updateUsers);

export default router;