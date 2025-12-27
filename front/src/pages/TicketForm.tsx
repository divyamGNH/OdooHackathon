import { useState, useEffect } from "react";
import axios from "axios";
import type { Ticket } from "../types";
import { useEquipmentStore } from "../store/useEquipmentStore";
import { useTicketStore } from "../store/useTicketStore";

export default function TicketForm() {
  const categoriesMap = useEquipmentStore((s) => s.categories);
  const addTicket = useTicketStore((s) => s.addTicket);
  const tickets = useTicketStore((s) => s.tickets);

  const categories = Object.keys(categoriesMap);

  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [equipmentId, setEquipmentId] = useState<number | "">("");
  const [type, setType] = useState<"Corrective" | "Preventive">("Corrective");

  const selectedEquipment =
    category && equipmentId !== ""
      ? categoriesMap[category]?.find((e) => e.id === equipmentId)
      : undefined;

  useEffect(() => {
    console.log("📌 Tickets array updated:", tickets);
  }, [tickets]);

  const handleCreate = async () => {
    if (!subject || !category || !selectedEquipment) {
      alert("Please fill all required fields");
      return;
    }

    // ⛔ TEMP ticket has NO _id — do NOT add to store
    const payload = {
      subject,
      category: selectedEquipment.category,
      equipmentId: selectedEquipment.id,
      equipmentName: selectedEquipment.name,
      team: selectedEquipment.team,
      status: "New",
      type,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/ticket/",
        payload
      );

      // ✅ Backend must return saved ticket WITH _id
      const savedTicket: Ticket = res.data;

      addTicket(savedTicket); // ✅ now store has correct _id

      console.log("✅ Ticket created & added:", savedTicket);
    } catch (err) {
      console.error("❌ Ticket creation failed", err);
    }
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
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setEquipmentId("");
        }}
        className="w-full mb-3 px-3 py-2 border rounded-md"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={equipmentId}
        onChange={(e) => setEquipmentId(Number(e.target.value))}
        disabled={!category}
        className="w-full mb-3 px-3 py-2 border rounded-md"
      >
        <option value="">Select Equipment</option>
        {category &&
          categoriesMap[category]?.map((eq) => (
            <option key={eq.id} value={eq.id}>
              {eq.name}
            </option>
          ))}
      </select>

      <input
        readOnly
        value={selectedEquipment?.team || ""}
        placeholder="Team (auto-filled)"
        className="w-full mb-3 px-3 py-2 border rounded-md bg-gray-100"
      />

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value as "Corrective" | "Preventive")
        }
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
