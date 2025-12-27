import type { Ticket, Status } from "../types";
import TicketCard from "./TicketCard";

export default function KanbanColumn({
  title,
  tickets,
}: {
  title: Status;
  tickets: Ticket[];
}) {
  return (
    <div className="w-[250px] p-2 border border-gray-600 rounded-md bg-white">
      <h4 className="mb-2 font-semibold text-sm">
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {tickets.map((t) => (
          <TicketCard key={t.id} ticket={t} />
        ))}
      </div>
    </div>
  );
}
