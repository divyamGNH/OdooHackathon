import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Ticket } from "../types";

export default function TicketCard({
  ticket,
  isDragging = false,
  onClick,
}: {
  ticket: Ticket;
  isDragging?: boolean;
  onClick?: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket._id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`bg-white border border-gray-200 rounded-lg p-3 shadow hover:shadow-md transition cursor-grab active:cursor-grabbing ${
        isDragging ? "opacity-50" : ""
      } ${onClick ? "hover:border-blue-300" : ""}`}
    >
      <strong className="block text-sm text-gray-800 mb-1">
        {ticket.subject}
      </strong>

      <div className="text-xs text-gray-500">{ticket.equipmentName}</div>
      <div className="text-xs text-gray-500 mb-2">{ticket.team}</div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
          {ticket.type}
        </span>
        <span className="text-[10px] text-gray-400">{ticket.category}</span>
      </div>
    </div>
  );
}
