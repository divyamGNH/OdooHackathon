import mongoose, { Schema, Document } from "mongoose";

export type Status = "New" | "In Progress" | "Repaired" | "Scrap";
export type TicketType = "Corrective" | "Preventive";

export interface ITicket extends Document {
  subject: string;

  category: string;
  equipmentId: number;
  equipmentName: string;

  team: string;
  status: Status;
  type: TicketType;

  createdAt: Date;
  updatedAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    equipmentId: {
      type: Number,
      required: true,
    },

    equipmentName: {
      type: String,
      required: true,
      trim: true,
    },

    team: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "In Progress", "Repaired", "Scrap"],
      default: "New",
    },

    type: {
      type: String,
      enum: ["Corrective", "Preventive"],
      required: true,
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt
  }
);

export const Ticket = mongoose.model<ITicket>("Ticket", TicketSchema);
