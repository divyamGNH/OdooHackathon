import { Ticket } from "../models/MaintenanceRequest.js";
import { Request, Response } from "express";

type Status = "New" | "In Progress" | "Repaired" | "Scrap";

// CREATE - Add new ticket to database
export const addTicketsToDb = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newTicket = await Ticket.create(req.body);

    // ✅ Explicitly return the saved ticket (with _id)
    res.status(201).json(newTicket.toObject());

    console.log("✅ Ticket saved to DB successfully");
  } catch (error) {
    console.error("❌ Error saving ticket:", error);
    res.status(400).json({ error: "Failed to create ticket" });
  }
};

// READ - Get all tickets
export const getAllTickets = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tickets" });
    console.error(" Error fetching tickets:", error);
  }
};

// READ - Get single ticket by ID
export const getTicketById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ticket" });
    console.error(" Error fetching ticket:", error);
  }
};

// UPDATE - Update ticket
export const updateTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!ticket) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    res.json(ticket);
    console.log(" Ticket updated successfully");
  } catch (error) {
    res.status(400).json({ error: "Failed to update ticket" });
    console.error(" Error updating ticket:", error);
  }
};
