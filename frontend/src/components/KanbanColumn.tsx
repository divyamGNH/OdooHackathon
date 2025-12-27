import { useDroppable } from "@dnd-kit/core";
import type { Ticket, Status } from "../types";
import TicketCard from "./TicketCard";

const STATUS_STYLES: Record<
  Status,
  {
    bg: string;
    header: string;
    strip: string;
  }
> = {
  New: {
    bg: "bg-blue-50",
    header: "text-blue-700",
    strip: "bg-blue-500",
  },
  "In Progress": {
    bg: "bg-yellow-50",
    header: "text-yellow-700",
    strip: "bg-yellow-500",
  },
  Repaired: {
    bg: "bg-green-50",
    header: "text-green-700",
    strip: "bg-green-500",
  },
  Scrap: {
    bg: "bg-red-50",
    header: "text-red-700",
    strip: "bg-red-500",
  },
};

export default function KanbanColumn({
  title,
  tickets,
}: {
  title: Status;
  tickets: Ticket[];
}) {
  const styles = STATUS_STYLES[title];
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  return (
    <div
      className={`h-full flex flex-col ${styles.bg} border-r border-gray-200`}
    >
      {/* Column header */}
      <div className="px-4 py-4 border-b border-gray-300 bg-white">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm font-bold uppercase ${styles.header}`}>
            {title}
          </h4>
          <span className="text-xs text-gray-500">{tickets.length}</span>
        </div>

        {/* Progress strip */}
        <div className="mt-2 h-1 w-full bg-gray-200 rounded">
          <div className={`h-1 rounded ${styles.strip}`} />
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={setNodeRef}
        className={`flex-1 overflow-y-auto p-4 space-y-4 transition-colors ${
          isOver ? "bg-blue-100" : ""
        }`}
      >
        {tickets.map((t) => (
          <TicketCard key={t._id} ticket={t} />
        ))}

        {tickets.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-8">
            Drop tickets here
          </div>
        )}
      </div>
    </div>
  );
}
