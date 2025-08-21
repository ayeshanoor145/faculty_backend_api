import {
  getUsers,
  getUser,
  signinUser,
  signupUser,
  changePassword,
  deleteUser,
  updateUsers,
} from "../controllers/users.js";
import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

//Get users
router.get("/users", getUsers);

//Get user by ID
router.get("/users/:id", validateObjectId, getUser);

//Delete user by ID
router.delete("/users/:id", validateObjectId, deleteUser);

// Update user by ID
router.put("/users:id", validateObjectId, updateUsers);

// POST create new users
router.post("/register", signupUser);
router.post("/signin", signinUser);

// Change password
router.put("/changePassword/",verifyToken,  changePassword);

export default router;
