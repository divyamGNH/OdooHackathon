import { useState } from "react";
import axios from "axios";
import type { Ticket } from "../types";

export default function TicketForm() {
  const [subject, setSubject] = useState("");
  const [equipment, setEquipment] = useState("");
  const [type, setType] = useState<"Corrective" | "Preventive">("Corrective");

  const handleCreate = async () => {
    alert("hi");
    const ticket: Ticket = {
      id: Date.now(),
      subject,
      equipment,
      team: "Auto-filled Team",
      status: "Open",
      type,
    };

    await axios.post("http://localhost:3000/ticket/", ticket,{
      withCredentials: true,
    });
    console.log("ticket sent", ticket);
  };

  return (
    <div className="p-6 max-w-[500px]">
      <h3 className="text-lg font-semibold mb-4">
        Create Maintenance Request
      </h3>

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-md"
      />

      <select
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-md"
      >
        <option value="">Select Equipment</option>
        <option value="Printer 01">Printer 01</option>
        <option value="AC Unit">AC Unit</option>
      </select>

      <input
        readOnly
        value="Auto-filled Team"
        className="w-full mb-3 px-3 py-2 border rounded-md bg-gray-100"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as any)}
        className="w-full mb-3 px-3 py-2 border rounded-md"
      >
        <option value="Corrective">Corrective</option>
        <option value="Preventive">Preventive</option>
      </select>

      <button
        onClick={handleCreate}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Create
      </button>
    </div>
  );
}
