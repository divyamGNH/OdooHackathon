import mongoose from "mongoose";
import dotenv from "dotenv";
import { Equipment } from "../models/Equipment.js";
import { MaintenanceTeam } from "../models/MaintenanceTeam.js";
import { MaintenanceRequest } from "../models/MaintenanceRequest.js";

dotenv.config();

const seedData = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/gearguard";
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Equipment.deleteMany({});
    await MaintenanceTeam.deleteMany({});
    await MaintenanceRequest.deleteMany({});
    console.log("🗑️  Cleared existing data");

    // Create Equipment
    const equipment = await Equipment.insertMany([
      {
        name: "Industrial Lathe Machine",
        category: "Manufacturing",
        status: "operational",
        location: "Building A - Floor 2",
        purchaseDate: new Date("2023-01-15"),
        lastMaintenanceDate: new Date("2024-11-20"),
        notes: "High precision lathe for metal parts",
      },
      {
        name: "HVAC System Unit 1",
        category: "Climate Control",
        status: "maintenance",
        location: "Building B - Roof",
        purchaseDate: new Date("2022-06-10"),
        lastMaintenanceDate: new Date("2024-10-05"),
        notes: "Requires filter replacement",
      },
      {
        name: "Forklift - FL-203",
        category: "Transportation",
        status: "operational",
        location: "Warehouse - Zone C",
        purchaseDate: new Date("2021-03-20"),
        lastMaintenanceDate: new Date("2024-12-01"),
      },
      {
        name: "CNC Milling Machine",
        category: "Manufacturing",
        status: "broken",
        location: "Building A - Floor 3",
        purchaseDate: new Date("2020-08-12"),
        lastMaintenanceDate: new Date("2024-09-15"),
        notes: "Spindle motor failure - urgent repair needed",
      },
      {
        name: "Conveyor Belt System",
        category: "Logistics",
        status: "operational",
        location: "Warehouse - Main Line",
        purchaseDate: new Date("2022-11-05"),
        lastMaintenanceDate: new Date("2024-11-28"),
      },
    ]);
    console.log(`✅ Created ${equipment.length} equipment items`);

    // Create Maintenance Teams
    const teams = await MaintenanceTeam.insertMany([
      {
        teamName: "Mechanical Maintenance Team",
        members: ["John Smith", "Sarah Johnson", "Mike Davis"],
        specialization: "Mechanical Systems",
        availability: "available",
        contactEmail: "mechanical@gearguard.com",
        contactPhone: "+1-555-0101",
      },
      {
        teamName: "HVAC Specialists",
        members: ["Lisa Brown", "Tom Wilson"],
        specialization: "HVAC and Climate Control",
        availability: "busy",
        contactEmail: "hvac@gearguard.com",
        contactPhone: "+1-555-0102",
      },
      {
        teamName: "Electrical Team",
        members: ["David Lee", "Emma Garcia", "Ryan Martinez", "Olivia Taylor"],
        specialization: "Electrical Systems",
        availability: "available",
        contactEmail: "electrical@gearguard.com",
        contactPhone: "+1-555-0103",
      },
    ]);
    console.log(`✅ Created ${teams.length} maintenance teams`);

    // Create Maintenance Requests
    const requests = await MaintenanceRequest.insertMany([
      {
        subject: "HVAC Filter Replacement",
        equipment: "HVAC System Unit 1",
        team: "HVAC Specialists",
        status: "In Progress",
        type: "Preventive",
      },
      {
        subject: "CNC Spindle Motor Repair",
        equipment: "CNC Milling Machine",
        team: "Mechanical Maintenance Team",
        status: "In Progress",
        type: "Corrective",
      },
      {
        subject: "Routine Forklift Inspection",
        equipment: "Forklift - FL-203",
        team: "Mechanical Maintenance Team",
        status: "New",
        type: "Preventive",
      },
      {
        subject: "Lathe Calibration Check",
        equipment: "Industrial Lathe Machine",
        team: "Mechanical Maintenance Team",
        status: "Repaired",
        type: "Preventive",
      },
      {
        subject: "Conveyor Belt Lubrication",
        equipment: "Conveyor Belt System",
        team: "Mechanical Maintenance Team",
        status: "New",
        type: "Preventive",
      },
      {
        subject: "Emergency CNC Repair",
        equipment: "CNC Milling Machine",
        team: "Electrical Team",
        status: "Scrap",
        type: "Corrective",
      },
    ]);
    console.log(`✅ Created ${requests.length} maintenance requests`);

    console.log("\n🎉 Database seeded successfully!");
    console.log("\nSummary:");
    console.log(`- Equipment: ${equipment.length}`);
    console.log(`- Teams: ${teams.length}`);
    console.log(`- Requests: ${requests.length}`);

    await mongoose.disconnect();
    console.log("\n✅ Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
};

seedData();
