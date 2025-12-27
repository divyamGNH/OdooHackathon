import { Request, Response } from "express";
import { User } from "../models/User.js";
import { Department } from "../models/Department.js";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Sign Up
export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, departmentId } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "User already exists with this email" });
      return;
    }

    // Create new user (password will be hashed by pre-save hook)
    const user = await User.create({
      name,
      email,
      password,
      role: role || "user",
      departmentId,
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        departmentId: user.departmentId,
      },
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to create user", details: error.message });
  }
};

// Login
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).populate("departmentId", "name");
    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.departmentId,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: "Login failed", details: error.message });
  }
};

// Get Current User (protected route)
export const getCurrentUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // userId will be set by auth middleware
    const userId = (req as any).userId;

    const user = await User.findById(userId)
      .select("-password")
      .populate("departmentId", "name");

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json({ user });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch user", details: error.message });
  }
};
