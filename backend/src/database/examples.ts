// Example: Creating a Maintenance Request (Ticket)

import { Equipment } from "../models/Equipment.js";
import { MaintenanceTeam } from "../models/MaintenanceTeam.js";
import { Ticket } from "../models/MaintenanceRequest.js";

// Example 1: Create a new Maintenance Request (Ticket)
export const createMaintenanceRequest = async () => {
  try {
    // Find an equipment by name
    const equipment = await Equipment.findOne({
      name: "Industrial Lathe Machine",
    });

    if (!equipment) {
      throw new Error("Equipment not found");
    }

    // Find an available team by specialization
    const team = await MaintenanceTeam.findOne({
      specialization: "Mechanical Systems",
      availability: "available",
    });

    // Create the maintenance request (ticket)
    const request = await Ticket.create({
      subject: "Routine Maintenance Check",
      equipment: equipment.name,
      team: team?.teamName || "Unassigned",
      status: "New",
      type: "Preventive",
    });

    console.log("✅ Maintenance Request Created:", request._id);

    // Update equipment status
    equipment.status = "maintenance";
    await equipment.save();

    // Update team availability if assigned
    if (team) {
      team.availability = "busy";
      await team.save();
    }

    return request;
  } catch (error) {
    console.error("❌ Error creating maintenance request:", error);
    throw error;
  }
};

// Example 2: Get all tickets by status
export const getTicketsByStatus = async (
  status: "New" | "In Progress" | "Repaired" | "Scrap"
) => {
  try {
    const requests = await Ticket.find({ status }).sort({
      createdAt: -1,
    });

    console.log(`📋 Found ${requests.length} tickets with status: ${status}`);
    return requests;
  } catch (error) {
    console.error("❌ Error fetching requests:", error);
    throw error;
  }
};

// Example 3: Update ticket status
export const updateTicketStatus = async (
  ticketId: string,
  status: "New" | "In Progress" | "Repaired" | "Scrap"
) => {
  try {
    const request = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );

    console.log("✅ Ticket status updated to:", status);
    return request;
  } catch (error) {
    console.error("❌ Error updating ticket:", error);
    throw error;
  }
};

// Example 4: Get all tickets for specific equipment
export const getTicketsForEquipment = async (equipmentName: string) => {
  try {
    const requests = await Ticket.find({
      equipment: equipmentName,
    }).sort({ createdAt: -1 });

    console.log(
      `📋 Found ${requests.length} tickets for equipment: ${equipmentName}`
    );
    return requests;
  } catch (error) {
    console.error("❌ Error fetching requests:", error);
    throw error;
  }
};

// Example 5: Get tickets by type
export const getTicketsByType = async (type: "Corrective" | "Preventive") => {
  try {
    const requests = await Ticket.find({ type }).sort({
      createdAt: -1,
    });

    console.log(`📋 Found ${requests.length} ${type} tickets`);
    return requests;
  } catch (error) {
    console.error("❌ Error fetching requests:", error);
    throw error;
  }
};
