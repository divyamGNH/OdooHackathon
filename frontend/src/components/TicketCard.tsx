import axios from "axios";
import type { Ticket, Status } from "../types";
import { useTicketStore } from "../store/useTicketStore";

const STATUS_ORDER: Status[] = [
  "New",
  "In Progress",
  "Repaired",
  "Scrap",
];

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const updateLocalStatus = useTicketStore((s) => s.updateTicketStatus);

  const getNextStatuses = (current: Status): Status[] => {
    const index = STATUS_ORDER.indexOf(current);
    return STATUS_ORDER.slice(index + 1);
  };

  const handleStatusChange = async (newStatus: Status) => {
    updateLocalStatus(ticket._id, newStatus);

    try {
      await axios.put(
        `http://localhost:3000/ticket/${ticket._id}`,
        { status: newStatus }
      );
    } catch (err) {
      console.error("❌ Failed to update status in DB", err);
    }
  };

  const nextStatuses = getNextStatuses(ticket.status);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow hover:shadow-md transition">
      
      <strong className="block text-sm text-gray-800 mb-1">
        {ticket.subject}
      </strong>

      <div className="text-xs text-gray-500">
        {ticket.equipmentName}
      </div>
      <div className="text-xs text-gray-500 mb-3">
        {ticket.team}
      </div>

      <div className="flex flex-wrap gap-1">
        {nextStatuses.length === 0 ? (
          <span className="text-[11px] text-gray-400">
            Final state
          </span>
        ) : (
          nextStatuses.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className="text-[11px] px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              → {status}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
