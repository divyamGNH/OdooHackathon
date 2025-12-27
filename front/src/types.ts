export type Status = "New" | "In Progress" | "Repaired" | "Scrap";

export interface Ticket {
  id: number;
  subject: string;
  equipment: string;
  team: string;
  status: Status;
  type: "Corrective" | "Preventive";
}

export interface Equipment {
  id: number;
  name: string;
  category: string;
  team: string;
  location: string;
}
