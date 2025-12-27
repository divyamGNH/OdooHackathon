import express from "express";
import { MaintenanceRequest } from "../models/MaintenanceRequest.js";

const router = express.Router();

// GET all tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await MaintenanceRequest.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tickets" });
  }
});

// GET ticket by ID
router.get("/:id", async (req, res) => {
  try {
    const ticket = await MaintenanceRequest.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ticket" });
  }
});

// POST create new ticket
router.post("/", async (req, res) => {
  try {
    const ticket = await MaintenanceRequest.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: "Failed to create ticket" });
  }
});

// PUT update ticket
router.put("/:id", async (req, res) => {
  try {
    const ticket = await MaintenanceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: "Failed to update ticket" });
  }
});

// DELETE ticket
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await MaintenanceRequest.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete ticket" });
  }
});

export default router;
