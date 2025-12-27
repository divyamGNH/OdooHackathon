import mongoose, { Schema, Document } from "mongoose";

export interface IMaintenanceTeam extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MaintenanceTeamSchema = new Schema<IMaintenanceTeam>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
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
