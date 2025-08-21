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
import { verifyToken, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/users", verifyToken, verifyAdmin, getUsers);

router.get("/me", verifyToken, getUser);

router.delete("/users/:id", validateObjectId, deleteUser);

// Update existing user by ID
router.put("/users/:id", validateObjectId, verifyToken, updateUsers);

router.post("/register", signupUser);

router.post("/signin", signinUser);

router.put("/changePassword/", verifyToken, changePassword);

export default router;