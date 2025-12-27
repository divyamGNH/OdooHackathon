import { connectDB } from "./connection.js";
import { Department } from "../models/Department.js";
import { User } from "../models/User.js";
import { MaintenanceTeam } from "../models/MaintenanceTeam.js";
import { Equipment } from "../models/Equipment.js";
import { Ticket } from "../models/MaintenanceRequest.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Department.deleteMany({});
    await User.deleteMany({});
    await MaintenanceTeam.deleteMany({});
    await Equipment.deleteMany({});
    await Ticket.deleteMany({});

    console.log("🗑️  Cleared existing data");

    // 1. Create Departments
    const departments = await Department.create([
      { name: "Production" },
      { name: "Maintenance" },
      { name: "IT" },
      { name: "Warehouse" },
    ]);
    console.log(`✅ Created ${departments.length} departments`);

    // 2. Create Users
    const users = await User.create([
      {
        name: "Admin User",
        email: "admin@gearguard.com",
        password: "admin123",
        role: "admin",
        departmentId: departments[1]!._id, // Maintenance
      },
      {
        name: "John Manager",
        email: "manager@gearguard.com",
        password: "manager123",
        role: "manager",
        departmentId: departments[0]!._id, // Production
      },
      {
        name: "Mike Technician",
        email: "tech1@gearguard.com",
        password: "tech123",
        role: "technician",
        departmentId: departments[1]!._id, // Maintenance
      },
      {
        name: "Sarah Technician",
        email: "tech2@gearguard.com",
        password: "tech123",
        role: "technician",
        departmentId: departments[1]!._id, // Maintenance
      },
      {
        name: "Regular User",
        email: "user@gearguard.com",
        password: "user123",
        role: "user",
        departmentId: departments[3]!._id, // Warehouse
      },
    ]);
    console.log(`✅ Created ${users.length} users`);

    // 3. Create Maintenance Teams
    const teams = await MaintenanceTeam.create([
      { name: "Mechanical Team", description: "Handles mechanical equipment" },
      { name: "Electrical Team", description: "Handles electrical systems" },
      { name: "IT Team", description: "Handles IT infrastructure" },
    ]);
    console.log(`✅ Created ${teams.length} maintenance teams`);

    // 4. Create Equipment
    const equipment = await Equipment.create([
      {
        name: "CNC Machine A1",
        serialNumber: "CNC-001",
        maintenanceTeamId: teams[0]!._id,
      },
      {
        name: "Conveyor Belt B2",
        serialNumber: "CONV-002",
        maintenanceTeamId: teams[0]!._id,
      },
      {
        name: "Main Server",
        serialNumber: "SRV-003",
        maintenanceTeamId: teams[2]!._id,
      },
      {
        name: "Forklift C1",
        serialNumber: "FORK-004",
        maintenanceTeamId: teams[0]!._id,
      },
      {
        name: "Power Generator",
        serialNumber: "GEN-005",
        maintenanceTeamId: teams[1]!._id,
      },
    ]);
    console.log(`✅ Created ${equipment.length} equipment`);

    // 5. Create Tickets
    const tickets = await Ticket.create([
      {
        subject: "CNC Machine oil leak",
        category: "Mechanical",
        equipmentId: 1,
        equipmentName: "CNC Machine A1",
        team: "Mechanical Team",
        status: "New",
        type: "Corrective",
      },
      {
        subject: "Conveyor belt motor replacement",
        category: "Mechanical",
        equipmentId: 2,
        equipmentName: "Conveyor Belt B2",
        team: "Mechanical Team",
        status: "In Progress",
        type: "Preventive",
      },
      {
        subject: "Server cooling system check",
        category: "IT",
        equipmentId: 3,
        equipmentName: "Main Server",
        team: "IT Team",
        status: "New",
        type: "Preventive",
      },
      {
        subject: "Forklift brake inspection",
        category: "Mechanical",
        equipmentId: 4,
        equipmentName: "Forklift C1",
        team: "Mechanical Team",
        status: "Repaired",
        type: "Corrective",
      },
      {
        subject: "Generator fuel system maintenance",
        category: "Electrical",
        equipmentId: 5,
        equipmentName: "Power Generator",
        team: "Electrical Team",
        status: "In Progress",
        type: "Preventive",
      },
    ]);
    console.log(`✅ Created ${tickets.length} tickets`);

    console.log("\n🎉 Database seeded successfully!");
    console.log(`\n📊 Summary:`);
    console.log(`   - Departments: ${departments.length}`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Teams: ${teams.length}`);
    console.log(`   - Equipment: ${equipment.length}`);
    console.log(`   - Tickets: ${tickets.length}`);

    console.log(`\n🔑 Test Credentials:`);
    console.log(`   Admin: admin@gearguard.com / admin123`);
    console.log(`   Manager: manager@gearguard.com / manager123`);
    console.log(`   Technician: tech1@gearguard.com / tech123`);
    console.log(`   User: user@gearguard.com / user123`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
