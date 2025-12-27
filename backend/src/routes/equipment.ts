import express from "express";
import {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from "../controllers/equipmentController.js";

const router = express.Router();

// GET all equipment
router.get("/", getAllEquipment);

// GET single equipment by ID
router.get("/:id", getEquipmentById);

// POST create new equipment
router.post("/", createEquipment);

// PUT update equipment
router.put("/:id", updateEquipment);

// DELETE equipment
router.delete("/:id", deleteEquipment);

export default router;
