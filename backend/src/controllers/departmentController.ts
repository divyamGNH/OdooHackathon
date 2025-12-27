import { Request, Response } from "express";
import { Department } from "../models/Department.js";

// Get all departments
export const getAllDepartments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch departments", details: error.message });
  }
};
