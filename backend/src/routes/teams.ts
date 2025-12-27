import express from "express";
import { MaintenanceTeam } from "../models/MaintenanceTeam.js";

const router = express.Router();

// GET all teams
router.get("/", async (req, res) => {
  try {
    const teams = await MaintenanceTeam.find().sort({ teamName: 1 });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

// GET team by ID
router.get("/:id", async (req, res) => {
  try {
    const team = await MaintenanceTeam.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team" });
  }
});

// POST create new team
router.post("/", async (req, res) => {
  try {
    const team = await MaintenanceTeam.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: "Failed to create team" });
  }
});

// PUT update team
router.put("/:id", async (req, res) => {
  try {
    const team = await MaintenanceTeam.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.json(team);
  } catch (error) {
    res.status(400).json({ error: "Failed to update team" });
  }
});

// DELETE team
router.delete("/:id", async (req, res) => {
  try {
    const team = await MaintenanceTeam.findByIdAndDelete(req.params.id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete team" });
  }
});

export default router;
