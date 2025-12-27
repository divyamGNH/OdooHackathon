import express from "express";
import {
  addTicketsToDb,
  getAllTickets,
  getTicketById,
  updateTicket,
} from "../controllers/ticketController.js";

const router = express.Router();

// GET all tickets
router.get("/", getAllTickets);

// GET single ticket by ID
router.get("/:id", getTicketById);

// POST create new ticket
router.post("/", addTicketsToDb);

// PUT update ticket
router.put("/:id", updateTicket);

export default router;
