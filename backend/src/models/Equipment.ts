import mongoose, { Schema, Document } from "mongoose";

export interface IEquipment extends Document {
  name: string;
  category: string;
  status: "operational" | "maintenance" | "broken";
  location: string;
  purchaseDate: Date;
  lastMaintenanceDate?: Date;
  notes?: string;
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
    category: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["operational", "maintenance", "broken"],
      default: "operational",
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    lastMaintenanceDate: {
      type: Date,
    },
    notes: {
      type: String,
      trim: true,
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
