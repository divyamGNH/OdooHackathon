import { useEquipmentStore } from "../store/useEquipmentStore";
import { useState } from "react";
import Header from "../components/Header";

export default function EquipmentPage() {
  const categories = useEquipmentStore((state) => state.categories);

  // 🔽 Track open/close per category
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div>
      <Header/>
        <div className="min-h-screen bg-gray-100 px-6 py-6">
        
        {/* Page header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Equipment
          </h3>
          <p className="text-sm text-gray-500">
            Overview of all registered equipment by category
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {Object.entries(categories).map(([category, equipments]) => {
            const isOpen = openCategories[category] ?? true; // default open

            return (
              <div
                key={category}
                className="bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                {/* Category header (clickable) */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <h4 className="text-sm font-semibold text-gray-700 uppercase">
                    {category}
                  </h4>

                  {/* Chevron */}
                  <span
                    className={`text-gray-500 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>

                {/* Dropdown content */}
                {isOpen && (
                  <div className="divide-y divide-gray-200">
                    {equipments.map((eq) => (
                      <div
                        key={eq.id}
                        className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        {/* Left info */}
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {eq.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Team: {eq.team} • Location: {eq.location}
                          </p>
                        </div>

                        {/* Action */}
                        <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition">
                          Maintenance (2)
                        </button>
                      </div>
                    ))}

                    {/* Empty state */}
                    {equipments.length === 0 && (
                      <div className="px-6 py-4 text-sm text-gray-500 italic">
                        No equipment in this category
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
