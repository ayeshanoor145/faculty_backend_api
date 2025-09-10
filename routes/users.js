import {
  getUsers,
  getProfile,
  signinUser,
  signupUser,
  verifyEmail,
  resendCode,
  changePassword,
  deleteUser,
  updateUsers,
} from "../controllers/users.js";

import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/users", verifyToken,  getUsers);
router.get("/me", verifyToken, getProfile);
router.put("/changePassword/", verifyToken, changePassword);
router.delete("/users/:id", validateObjectId, deleteUser);
router.put("/users/:id", validateObjectId, verifyToken, updateUsers);
router.post("/register", signupUser);
router.post("/verify-email", verifyEmail);
router.post("/resend-code", resendCode);
router.post("/signin", signinUser);

export default router;