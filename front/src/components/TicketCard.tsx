import type { Ticket } from "../types";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="border border-gray-600 p-2 rounded-md bg-white">
      <strong className="block text-sm mb-1">
        {ticket.subject}
      </strong>

      <div className="text-xs text-gray-700">
        {ticket.equipment}
      </div>

      <div className="text-xs text-gray-400">
        {ticket.team}
      </div>
    </div>
  );
}
