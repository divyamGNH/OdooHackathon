import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { Ticket } from "../types";
import { useEquipmentStore } from "../store/useEquipmentStore";
import { useTicketStore } from "../store/useTicketStore";
import Header from "../components/Header";

export default function TicketForm() {
  const navigate = useNavigate();
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
      const res = await axios.post("http://localhost:3000/ticket/", payload);

      const savedTicket: Ticket = res.data;
      addTicket(savedTicket);

      console.log("✅ Ticket created & added:", savedTicket);

      // Redirect to dashboard
      navigate("/");
    } catch (err) {
      console.error("❌ Ticket creation failed", err);
      alert("Failed to create ticket");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-800">
              Create Maintenance Request
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Fill in the details to log a new maintenance ticket
            </p>
          </div>

          {/* Form */}
          <div className="p-6 space-y-5">
            {/* Subject */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Subject
              </label>
              <input
                placeholder="e.g. Printer not working"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setEquipmentId("");
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Equipment */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Equipment
              </label>
              <select
                value={equipmentId}
                onChange={(e) => setEquipmentId(Number(e.target.value))}
                disabled={!category}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white disabled:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Equipment</option>
                {category &&
                  categoriesMap[category]?.map((eq) => (
                    <option key={eq.id} value={eq.id}>
                      {eq.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Team */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Responsible Team
              </label>
              <input
                readOnly
                value={selectedEquipment?.team || ""}
                placeholder="Auto-filled"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-100 text-gray-600"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Maintenance Type
              </label>
              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as "Corrective" | "Preventive")
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Corrective">Corrective</option>
                <option value="Preventive">Preventive</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end bg-gray-50">
            <button
              onClick={handleCreate}
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
            >
              Create Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
