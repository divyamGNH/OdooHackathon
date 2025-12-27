import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import TicketForm from "./pages/TicketForm";
import { MaintenanceKanban } from "./pages/MaintenanceKanban";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/work-orders" element={<MaintenanceKanban />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/ticket/new" element={<TicketForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
