import { useEquipmentStore } from "../store/useEquipmentStore";

export default function EquipmentPage() {
  const categories = useEquipmentStore((state) => state.categories);

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-6">Equipment</h3>

      {Object.entries(categories).map(([category, equipments]) => (
        <div key={category} className="mb-6">
          {/* Category Title */}
          <h4 className="text-md font-bold mb-3 border-b border-gray-300 pb-1">
            {category}
          </h4>

          {/* Equipments under category */}
          {equipments.map((eq) => (
            <div
              key={eq.id}
              className="border border-gray-600 rounded-md p-3 mb-3 bg-white"
            >
              <strong className="block text-base">{eq.name}</strong>

              <div className="text-sm text-gray-600">
                Team: {eq.team}
              </div>

              <div className="text-sm text-gray-600">
                Location: {eq.location}
              </div>

              <button className="mt-3 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition">
                Maintenance (2)
              </button>
            </div>
          ))}

          {/* Empty state */}
          {equipments.length === 0 && (
            <p className="text-sm text-gray-500 italic">
              No equipment in this category
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
