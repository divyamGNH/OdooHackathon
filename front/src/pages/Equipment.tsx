import type { Equipment } from "../types";

const equipments: Equipment[] = [
  { id: 1, name: "Printer 01", category: "Office", team: "IT", location: "Floor 2" },
  { id: 2, name: "AC Unit", category: "Electrical", team: "Electrical", location: "Roof" },
];

export default function EquipmentPage() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">Equipment</h3>

      {equipments.map((eq) => (
        <div
          key={eq.id}
          className="border border-gray-600 rounded-md p-3 mb-3 bg-white"
        >
          <strong className="block text-base">{eq.name}</strong>

          <div className="text-sm text-gray-600">{eq.category}</div>
          <div className="text-sm text-gray-600">{eq.team}</div>

          <button className="mt-3 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition">
            Maintenance (2)
          </button>
        </div>
      ))}
    </div>
  );
}
