import { Link } from "react-router-dom";

interface EquipmentHeaderProps {
  onAddEquipment: () => void;
}

export default function EquipmentHeader({ onAddEquipment }: EquipmentHeaderProps) {
  return (
    <header className="bg-background-light">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-slate-900 font-medium">Equipment</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Equipment List
            </h2>
            <p className="text-slate-500 text-base">
              Manage and track status of all facility assets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center h-10 px-4 rounded-xl border border-gray-200 bg-white text-slate-700 font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
              <span className="material-symbols-outlined mr-2 text-[20px]">
                file_upload
              </span>
              Import
            </button>
            <button 
              onClick={onAddEquipment}
              className="flex items-center justify-center h-11 px-6 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]">
                add
              </span>
              Add Equipment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
