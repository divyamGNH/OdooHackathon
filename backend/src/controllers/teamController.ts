import { Request, Response } from "express";
import { MaintenanceTeam } from "../models/MaintenanceTeam.js";

// Get all maintenance teams
export const getAllTeams = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const teams = await MaintenanceTeam.find().sort({ name: 1 });
    res.status(200).json(teams);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch teams", details: error.message });
  }
};
