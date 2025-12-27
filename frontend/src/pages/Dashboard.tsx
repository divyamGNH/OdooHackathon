import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";
import { useTicketStore } from "../store/useTicketStore";
import type { Status } from "../types";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

const STATUSES: Status[] = ["New", "In Progress", "Repaired", "Scrap"];

export default function Dashboard() {
  const tickets = useTicketStore((s) => s.tickets);
  const setTickets = useTicketStore((s) => s.setTickets);
  const updateLocalStatus = useTicketStore((s) => s.updateTicketStatus);

  const [activeTicketId, setActiveTicketId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/ticket/getAllTickets"
        );
        setTickets(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch tickets", err);
      }
    };

    fetchTickets();
  }, [setTickets]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTicketId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTicketId(null);

    if (!over) return;

    const ticketId = active.id as string;
    const newStatus = over.id as Status;

    const ticket = tickets.find((t) => t._id === ticketId);
    if (!ticket) return;

    const currentIndex = STATUSES.indexOf(ticket.status);
    const nextIndex = STATUSES.indexOf(newStatus);

    // 🚫 forward-only movement
    if (nextIndex <= currentIndex) return;

    // ✅ optimistic UI update
    updateLocalStatus(ticketId, newStatus);

    try {
      await axios.put(
        `http://localhost:3000/ticket/${ticketId}`,
        { status: newStatus }
      );
    } catch (err) {
      console.error("❌ Drag update failed", err);
    }
  };

  const activeTicket = tickets.find((t) => t._id === activeTicketId);

  return (
    <>
      <Header />

      {/* 🔘 ACTION BAR */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
        <button
          onClick={() => navigate("/equipment")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
        >
          View Equipment
        </button>

        <button
          onClick={() => navigate("/ticket/new")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          + New Ticket
        </button>
      </div>

      <div className="h-[calc(100vh-112px)] bg-gray-100">
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-4 h-full">
            {STATUSES.map((status) => (
              <KanbanColumn
                key={status}
                title={status}
                tickets={tickets.filter((t) => t.status === status)}
              />
            ))}
          </div>

          {/* 🔥 DRAG OVERLAY */}
          <DragOverlay>
            {activeTicket ? (
              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-2xl w-[220px] rotate-2 opacity-95">
                <strong className="block text-sm mb-1">
                  {activeTicket.subject}
                </strong>
                <div className="text-xs text-gray-500">
                  {activeTicket.equipmentName}
                </div>
                <div className="text-xs text-gray-500">
                  {activeTicket.team}
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </>
  );
}
