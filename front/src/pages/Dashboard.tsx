import { useEffect } from "react";
import axios from "axios";
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
        const res = await axios.get(
          "http://localhost:3000/ticket/getAllTickets"
        );
        setTickets(res.data);
      } catch (err) {
        console.error("Failed to fetch tickets", err);
      }
    };

    fetchTickets();
  }, [setTickets]);

  console.log("📊 Dashboard tickets:", tickets);

  return (
    <>
      <Header />

      <div className="flex gap-4 p-4">
        {STATUSES.map((status) => (
          <KanbanColumn
            key={status}
            title={status}
            tickets={tickets.filter((t) => t.status === status)}
          />
        ))}
      </div>
    </>
  );
}
