import express from "express";
import {
  signUp,
  login,
  getCurrentUser,
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", signUp);
router.post("/login", login);

// Protected route
router.get("/me", authMiddleware, getCurrentUser);

export default router;
