import { Request, Response } from "express";
import { Equipment } from "../models/Equipment.js";

// Get all equipment with team details
export const getAllEquipment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const equipment = await Equipment.find()
      .populate("maintenanceTeamId", "name")
      .sort({ createdAt: -1 });
    res.status(200).json(equipment);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch equipment", details: error.message });
  }
};

// Get single equipment by ID
export const getEquipmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const equipment = await Equipment.findById(req.params.id).populate(
      "maintenanceTeamId",
      "name description"
    );
    if (!equipment) {
      res.status(404).json({ error: "Equipment not found" });
      return;
    }
    res.status(200).json(equipment);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch equipment", details: error.message });
  }
};

// Create new equipment
export const createEquipment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, serialNumber, maintenanceTeamId } = req.body;

    const equipment = await Equipment.create({
      name,
      serialNumber,
      maintenanceTeamId,
    });

    res.status(201).json(equipment);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to create equipment", details: error.message });
  }
};

// Update equipment
export const updateEquipment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!equipment) {
      res.status(404).json({ error: "Equipment not found" });
      return;
    }
    res.status(200).json(equipment);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to update equipment", details: error.message });
  }
};

// Delete equipment
export const deleteEquipment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!equipment) {
      res.status(404).json({ error: "Equipment not found" });
      return;
    }
    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to delete equipment", details: error.message });
  }
};
