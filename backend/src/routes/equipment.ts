import express from "express";
import { Equipment } from "../models/Equipment.js";

const router = express.Router();

// GET all equipment
router.get("/", async (req, res) => {
  try {
    const equipment = await Equipment.find().sort({ name: 1 });
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch equipment" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch equipment" });
  }
});

// POST create new equipment
router.post("/", async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    res.status(400).json({ error: "Failed to create equipment" });
  }
});

// PUT update equipment
router.put("/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!equipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.json(equipment);
  } catch (error) {
    res.status(400).json({ error: "Failed to update equipment" });
  }
});

// DELETE equipment
router.delete("/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!equipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete equipment" });
  }
});

export default router;
