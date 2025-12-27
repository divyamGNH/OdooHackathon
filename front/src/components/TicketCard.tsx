import axios from "axios";
import type { Ticket, Status } from "../types";
import { useTicketStore } from "../store/useTicketStore";

const STATUSES: Status[] = ["New", "In Progress", "Repaired", "Scrap"];

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const updateLocalStatus = useTicketStore((s) => s.updateTicketStatus);

  const handleStatusChange = async (newStatus: Status) => {
    // 1️⃣ Update UI instantly
    updateLocalStatus(ticket._id, newStatus);

    try {
      // 2️⃣ Update DB
      await axios.put(
        `http://localhost:3000/ticket/${ticket._id}`,
        { status: newStatus }
      );
    } catch (err) {
      console.error("❌ Failed to update status in DB", err);
      // (optional rollback could be added later)
    }
  };

  return (
    <div className="border border-gray-600 p-3 mb-3 rounded bg-white">
      <strong className="block">{ticket.subject}</strong>
      <div className="text-sm text-gray-500">{ticket.equipmentName}</div>
      <div className="text-sm text-gray-500 mb-2">{ticket.team}</div>

      {/* 🔥 STATUS BUTTONS */}
      <div className="flex flex-wrap gap-1">
        {STATUSES.filter((s) => s !== ticket.status).map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className="text-xs px-2 py-1 bg-gray-800 text-white rounded hover:bg-black"
          >
            Move to {status}
          </button>
        ))}
      </div>
    </div>
  );
}
