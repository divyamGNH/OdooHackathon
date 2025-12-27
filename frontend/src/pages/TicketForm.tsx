import { useState } from "react";

export default function TicketForm() {
  const [type, setType] = useState<"Corrective" | "Preventive">("Corrective");

  return (
    <div className="p-6 max-w-[500px]">
      <h3 className="text-lg font-semibold mb-4">
        Create Maintenance Request
      </h3>

      <input
        placeholder="Subject"
        className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        className="w-full mb-3 px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>Select Equipment</option>
        <option>Printer 01</option>
        <option>AC Unit</option>
      </select>

      <input
        readOnly
        value="Auto-filled Team"
        className="w-full mb-3 px-3 py-2 border rounded-md bg-gray-100 text-gray-600"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as any)}
        className="w-full mb-3 px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Corrective">Corrective</option>
        <option value="Preventive">Preventive</option>
      </select>

      {type === "Preventive" && (
        <input
          type="date"
          className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Create
      </button>
    </div>
  );
}
