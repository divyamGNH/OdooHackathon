export type Status = "New" | "In Progress" | "Repaired" | "Scrap";

export interface Equipment {
  id: number;
  name: string;
  category: string;
  team: string;
  location: string;
}

export interface Ticket {
  _id: string; // ✅ REQUIRED (MongoDB document id)

  subject: string;

  category: string;
  equipmentId: number;
  equipmentName: string;

  team: string;
  status: Status;
  type: "Corrective" | "Preventive";

  createdAt: string;
}
