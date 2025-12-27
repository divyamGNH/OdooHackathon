import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";
import type { Ticket } from "../types";

const tickets: Ticket[] = [
  {
    id: 1,
    subject: "Printer not working",
    equipment: "Printer 01",
    team: "IT",
    status: "New",
    type: "Corrective",
  },
  {
    id: 2,
    subject: "AC servicing",
    equipment: "AC Unit",
    team: "Electrical",
    status: "In Progress",
    type: "Preventive",
  },
];

export default function Dashboard() {
  return (
    <>
      <Header />

      <div className="flex gap-4 p-4">
        {["New", "In Progress", "Repaired", "Scrap"].map((status) => (
          <KanbanColumn
            key={status}
            title={status as any}
            tickets={tickets.filter((t) => t.status === status)}
          />
        ))}
      </div>
    </>
  );
}
