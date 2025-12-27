// Ticket (Maintenance Request) Types
export type Status = "New" | "In Progress" | "Repaired" | "Scrap";
export type TicketType = "Corrective" | "Preventive";

export interface Ticket {
  _id: string;
  subject: string;
  equipment: string;
  team: string;
  status: Status;
  type: TicketType;
  createdAt: string;
  updatedAt: string;
}

// Equipment Types
export type EquipmentStatus = "operational" | "maintenance" | "broken";

export interface Equipment {
  _id: string;
  name: string;
  category: string;
  status: EquipmentStatus;
  location: string;
  purchaseDate: string;
  lastMaintenanceDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Maintenance Team Types
export type TeamAvailability = "available" | "busy" | "offline";

export interface MaintenanceTeam {
  _id: string;
  teamName: string;
  members: string[];
  specialization: string;
  availability: TeamAvailability;
  contactEmail: string;
  contactPhone?: string;
  createdAt: string;
  updatedAt: string;
}

// Alias for clarity
export type MaintenanceRequest = Ticket;
