import mongoose, { Schema, Document } from "mongoose";

export interface IMaintenanceRequest extends Document {
  subject: string;
  equipment: string;
  team: string;
  status: "New" | "In Progress" | "Repaired" | "Scrap";
  type: "Corrective" | "Preventive";
  createdAt: Date;
  updatedAt: Date;
}

const MaintenanceRequestSchema = new Schema<IMaintenanceRequest>(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    equipment: {
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
    timestamps: true,
  }
);

export const MaintenanceRequest = mongoose.model<IMaintenanceRequest>(
  "MaintenanceRequest",
  MaintenanceRequestSchema
);
