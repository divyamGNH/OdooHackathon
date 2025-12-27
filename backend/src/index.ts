import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
import ticketRouter from "./routes/ticketRoute.js";
import authRouter from "./routes/authRoute.js";
import departmentRouter from "./routes/departmentRoute.js";

// Import models to register them with mongoose
import "./models/User.js";
import "./models/Department.js";
import "./models/MaintenanceTeam.js";
import "./models/Equipment.js";
import "./models/MaintenanceRequest.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

connectDB();

app.use("/auth", authRouter);
app.use("/department", departmentRouter);
app.use("/ticket", ticketRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on PORT:${PORT}`);
});
