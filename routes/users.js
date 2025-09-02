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

router.get("/users", getUsers);
router.get("/me", verifyToken, getUser);
router.put("/changePassword/", verifyToken, changePassword);
router.delete("/users/:id", validateObjectId, deleteUser);
router.put("/users/:id", validateObjectId, verifyToken, updateUsers);
router.post("/register", signupUser);
router.post("/signin", signinUser);

export default router;