import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";
import TicketCard from "../components/TicketCard";
import TicketDetailModal from "../components/TicketDetailModal";
import EditTicketModal from "../components/EditTicketModal";
import { useTicketStore } from "../store/useTicketStore";
import type { Status, Ticket } from "../types";

const STATUSES: Status[] = ["New", "In Progress", "Repaired", "Scrap"];

export default function Dashboard() {
  const navigate = useNavigate();

  const tickets = useTicketStore((s) => s.tickets);
  const setTickets = useTicketStore((s) => s.setTickets);
  const updateTicketStatus = useTicketStore((s) => s.updateTicketStatus);
  const updateTicket = useTicketStore((s) => s.updateTicket);
  const deleteTicket = useTicketStore((s) => s.deleteTicket);

  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/ticket/getAllTickets");
        setTickets(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch tickets", err);
      }
    };

    fetchTickets();
  }, [setTickets]);

  const handleDragStart = (event: DragStartEvent) => {
    const ticket = tickets.find((t) => t._id === event.active.id);
    setActiveTicket(ticket || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTicket(null);
    if (!over) return;

    const ticketId = active.id as string;
    const newStatus = over.id as Status;

    const ticket = tickets.find((t) => t._id === ticketId);
    if (!ticket || ticket.status === newStatus) return;

    updateTicketStatus(ticketId, newStatus);

    try {
      await api.put(`/ticket/${ticketId}`, { status: newStatus });
    } catch (err) {
      console.error("❌ Failed to update status", err);
      updateTicketStatus(ticketId, ticket.status);
    }
  };

  const handleDeleteTicket = async (id: string) => {
    try {
      await api.delete(`/ticket/${id}`);
      deleteTicket(id);
      setSelectedTicket(null);
    } catch {
      alert("Failed to delete ticket");
    }
  };

  const handleEditTicket = (ticket: Ticket) => {
    setSelectedTicket(null);
    setEditingTicket(ticket);
  };

  const handleUpdateTicket = (updatedTicket: Ticket) => {
    updateTicket(updatedTicket._id, updatedTicket);
  };

  return (
    <>
      <Header />

      {/* Top action bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
        <h2 className="text-lg font-semibold">Maintenance Dashboard</h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/equipment")}
            className="px-4 py-2 text-sm rounded bg-gray-800 text-white hover:bg-gray-900"
          >
            View Equipment
          </button>

          <button
            onClick={() => navigate("/ticket/new")}
            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            + Add Ticket
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="h-[calc(100vh-128px)] bg-gray-100">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-4 h-full">
            {STATUSES.map((status) => (
              <KanbanColumn
                key={status}
                title={status}
                tickets={tickets.filter((t) => t.status === status)}
                onTicketClick={setSelectedTicket}
              />
            ))}
          </div>

          <DragOverlay>
            {activeTicket && (
              <div className="rotate-3 opacity-80">
                <TicketCard ticket={activeTicket} isDragging />
              </div>
            )}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Modals */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onDelete={handleDeleteTicket}
          onEdit={handleEditTicket}
        />
      )}

      {editingTicket && (
        <EditTicketModal
          ticket={editingTicket}
          onClose={() => setEditingTicket(null)}
          onUpdate={handleUpdateTicket}
        />
      )}
    </>
  );
}
