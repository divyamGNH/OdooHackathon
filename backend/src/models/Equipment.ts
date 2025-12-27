import mongoose, { Schema, Document } from "mongoose";

export interface IEquipment extends Document {
  name: string;
  serialNumber: string;
  maintenanceTeamId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const EquipmentSchema = new Schema<IEquipment>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    maintenanceTeamId: {
      type: Schema.Types.ObjectId,
      ref: "MaintenanceTeam",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Equipment = mongoose.model<IEquipment>(
  "Equipment",
  EquipmentSchema
);
