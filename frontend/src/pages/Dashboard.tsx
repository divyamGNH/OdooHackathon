import { useEffect } from "react";
import api from "../utils/api";
import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";
import { useTicketStore } from "../store/useTicketStore";
import type { Status } from "../types";

const STATUSES: Status[] = ["New", "In Progress", "Repaired", "Scrap"];

export default function Dashboard() {
  const tickets = useTicketStore((s) => s.tickets);
  const setTickets = useTicketStore((s) => s.setTickets);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/ticket/getAllTickets");
        setTickets(res.data);
      } catch (err) {
        console.error("Failed to fetch tickets", err);
      }
    };

    fetchTickets();
  }, [setTickets]);

  return (
    <>
      <Header />

      {/* Full screen board */}
      <div className="h-[calc(100vh-64px)] bg-gray-100">
        <div className="grid grid-cols-4 h-full">
          {STATUSES.map((status) => (
            <KanbanColumn
              key={status}
              title={status}
              tickets={tickets.filter((t) => t.status === status)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
