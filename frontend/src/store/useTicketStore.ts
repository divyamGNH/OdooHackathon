import { create } from "zustand";
import type { Ticket, Status } from "../types";

type TicketState = {
  tickets: Ticket[];
  setTickets: (tickets: Ticket[]) => void;
  addTicket: (ticket: Ticket) => void;
  updateTicketStatus: (id: string, status: Status) => void;
  updateTicket: (id: string, updatedTicket: Ticket) => void;
  deleteTicket: (id: string) => void;
};

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],

  setTickets: (tickets) => set({ tickets }),

  addTicket: (ticket) =>
    set((state) => ({
      tickets: [...state.tickets, ticket],
    })),

  updateTicketStatus: (id, status) =>
    set((state) => ({
      tickets: state.tickets.map((t) => (t._id === id ? { ...t, status } : t)),
    })),

  updateTicket: (id, updatedTicket) =>
    set((state) => ({
      tickets: state.tickets.map((t) => (t._id === id ? updatedTicket : t)),
    })),

  deleteTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((t) => t._id !== id),
    })),
}));
