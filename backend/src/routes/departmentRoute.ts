import express from "express";
import { getAllDepartments } from "../controllers/departmentController.js";

const router = express.Router();

// GET all departments
router.get("/", getAllDepartments);

export default router;
