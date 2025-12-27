import { useState } from "react";
import EquipmentHeader from "../components/EquipmentHeader";
import EquipmentFilters from "../components/EquipmentFilters";
import EquipmentTable from "../components/EquipmentTable";
import EquipmentFormModal from "../components/EquipmentFormModal";

export default function EquipmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      <EquipmentHeader onAddEquipment={() => setIsModalOpen(true)} />
      <EquipmentFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <main className="flex-1 overflow-y-auto bg-background-light scroll-smooth">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 pb-8">
          <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0">
            <EquipmentFilters />

            <div className="flex-1 flex flex-col gap-4 min-w-0">
              {/* Search and View Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-2 rounded-2xl shadow-sm border border-gray-200/60">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400">
                      search
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-gray-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all sm:text-sm"
                    placeholder="Search by name, serial number, or department..."
                    type="text"
                  />
                </div>

                <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200/50">
                  <button className="p-1.5 rounded-lg bg-white shadow-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      view_list
                    </span>
                  </button>
                  <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white/50 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      grid_view
                    </span>
                  </button>
                </div>
              </div>

              <EquipmentTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
