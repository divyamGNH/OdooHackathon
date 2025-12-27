import express from "express";
import {
  addTicketsToDb,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";

const router = express.Router();

// GET all tickets
router.get("/getAllTickets", getAllTickets);

// GET single ticket by ID
router.get("/:id", getTicketById);

// POST create new ticket
router.post("/", addTicketsToDb);

// PUT update ticket
router.put("/:id", updateTicket);

// DELETE ticket
router.delete("/:id", deleteTicket);

export default router;
