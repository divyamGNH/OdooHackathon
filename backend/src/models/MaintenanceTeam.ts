import mongoose, { Schema, Document } from "mongoose";

export interface IMaintenanceTeam extends Document {
  teamName: string;
  members: string[];
  specialization: string;
  availability: "available" | "busy" | "offline";
  contactEmail: string;
  contactPhone?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MaintenanceTeamSchema = new Schema<IMaintenanceTeam>(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    members: {
      type: [String],
      required: true,
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
    availability: {
      type: String,
      enum: ["available", "busy", "offline"],
      default: "available",
    },
    contactEmail: {
      type: String,
      required: true,
      trim: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MaintenanceTeam = mongoose.model<IMaintenanceTeam>(
  "MaintenanceTeam",
  MaintenanceTeamSchema
);
