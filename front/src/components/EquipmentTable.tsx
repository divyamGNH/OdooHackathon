interface Equipment {
  id: number;
  name: string;
  lastMaintenance: string;
  serialNumber: string;
  category: string;
  categoryColor: string;
  department: string;
  departmentInitial: string;
  departmentColor: string;
  location: string;
  team: string;
  status: "Active" | "Scrap" | "Review";
  icon: string;
  iconBg: string;
  iconColor: string;
  selected?: boolean;
  scrapped?: boolean;
}

const equipmentData: Equipment[] = [
  {
    id: 1,
    name: "Hydraulic Press X200",
    lastMaintenance: "2 days ago",
    serialNumber: "HYD-2023-88",
    category: "Heavy Machinery",
    categoryColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    department: "Fabrication",
    departmentInitial: "F",
    departmentColor: "bg-blue-100 text-blue-700",
    location: "Zone A",
    team: "Team Alpha",
    status: "Active",
    icon: "precision_manufacturing",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    selected: true,
  },
  {
    id: 2,
    name: "Forklift Series 5",
    lastMaintenance: "3 weeks ago",
    serialNumber: "FLT-S5-002",
    category: "Vehicles",
    categoryColor: "bg-orange-50 text-orange-700 border-orange-100",
    department: "Logistics",
    departmentInitial: "L",
    departmentColor: "bg-purple-100 text-purple-700",
    location: "Warehouse 2",
    team: "Logistics Crew",
    status: "Active",
    icon: "forklift",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    selected: true,
  },
  {
    id: 3,
    name: "Conveyor Motor M1",
    lastMaintenance: "Decommissioned: Oct 12",
    serialNumber: "CVM-992-01",
    category: "Machinery",
    categoryColor: "bg-gray-100 text-gray-500 border-gray-200",
    department: "Packaging",
    departmentInitial: "P",
    departmentColor: "bg-gray-200 text-gray-600",
    location: "Disposed",
    team: "Maint. B",
    status: "Scrap",
    icon: "conveyor_belt",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-500",
    scrapped: true,
  },
  {
    id: 4,
    name: "3D Printer Pro",
    lastMaintenance: "Yesterday",
    serialNumber: "3DP-PRO-X",
    category: "Electronics",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-100",
    department: "R&D",
    departmentInitial: "R",
    departmentColor: "bg-teal-100 text-teal-700",
    location: "Lab 4",
    team: "Tech Ops",
    status: "Active",
    icon: "print",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 5,
    name: "Generator Backup",
    lastMaintenance: "Attention Required",
    serialNumber: "GEN-BK-200",
    category: "Power",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-100",
    department: "Facilities",
    departmentInitial: "F",
    departmentColor: "bg-indigo-100 text-indigo-700",
    location: "Ext. North",
    team: "Facilities",
    status: "Review",
    icon: "bolt",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function EquipmentTable() {
  return (
    <>
      {/* Selection Bar */}
      <div className="bg-primary text-white rounded-xl shadow-lg shadow-primary/20 p-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 pl-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-5 bg-white text-primary rounded text-xs font-bold">
              2
            </span>
            <span className="text-sm font-semibold">items selected</span>
          </div>
          <div className="h-4 w-px bg-white/20"></div>
          <button className="text-xs font-medium text-white/80 hover:text-white hover:underline transition-colors">
            Deselect All
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-all border border-white/10">
            <span className="material-symbols-outlined text-[16px]">
              group_add
            </span>
            Assign Team
          </button>
          <button className="flex items-center gap-2 h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-all border border-white/10">
            <span className="material-symbols-outlined text-[16px]">
              edit_note
            </span>
            Change Status
          </button>
          <button className="flex items-center gap-2 h-8 px-3 rounded-lg bg-red-500/80 hover:bg-red-500 text-white text-xs font-bold transition-all border border-red-400/50 ml-2">
            <span className="material-symbols-outlined text-[16px]">
              delete
            </span>
            Delete
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="py-4 pl-6 pr-3 w-10">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary/20 size-4"
                  />
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 w-[25%]">
                  Equipment Name
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Serial Number
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Category
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Department
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </th>
                <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Assigned Team
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {equipmentData.map((equipment) => (
                <tr
                  key={equipment.id}
                  className={`group transition-colors cursor-pointer border-l-4 ${
                    equipment.selected
                      ? "bg-primary/5 hover:bg-primary/10 border-l-primary"
                      : equipment.scrapped
                      ? "bg-gray-50/50 opacity-60 hover:opacity-100 hover:bg-gray-50 grayscale-[0.5] hover:grayscale-0 border-l-transparent"
                      : "hover:bg-slate-50 border-l-transparent hover:border-l-primary/20"
                  }`}
                >
                  <td className="py-4 pl-6 pr-3">
                    <input
                      type="checkbox"
                      defaultChecked={equipment.selected}
                      className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary/20 size-4"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-lg ${equipment.iconBg} flex items-center justify-center ${equipment.iconColor} shrink-0`}
                      >
                        <span className="material-symbols-outlined">
                          {equipment.icon}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p
                            className={`text-sm font-bold group-hover:text-primary transition-colors ${
                              equipment.scrapped
                                ? "text-slate-700 line-through decoration-slate-400"
                                : "text-slate-900"
                            }`}
                          >
                            {equipment.name}
                          </p>
                          {equipment.scrapped && (
                            <span
                              className="material-symbols-outlined text-[16px] text-amber-500"
                              title="Scrapped"
                            >
                              warning
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">
                          Last maintenance: {equipment.lastMaintenance}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`font-mono text-sm ${
                        equipment.scrapped ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {equipment.serialNumber}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${equipment.categoryColor}`}
                    >
                      {equipment.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div
                      className={`flex items-center gap-2 ${
                        equipment.scrapped ? "opacity-70" : ""
                      }`}
                    >
                      <div
                        className={`size-6 rounded-full ${equipment.departmentColor} flex items-center justify-center text-xs font-bold`}
                      >
                        {equipment.departmentInitial}
                      </div>
                      <p
                        className={`text-sm ${
                          equipment.scrapped ? "text-slate-600" : "text-slate-700"
                        }`}
                      >
                        {equipment.department}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p
                      className={`text-sm ${
                        equipment.scrapped
                          ? "text-slate-500 italic"
                          : "text-slate-700"
                      }`}
                    >
                      {equipment.location}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p
                      className={`text-sm ${
                        equipment.scrapped
                          ? "text-slate-500 line-through"
                          : "text-slate-700"
                      }`}
                    >
                      {equipment.team}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {equipment.status === "Active" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                      </span>
                    )}
                    {equipment.status === "Scrap" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-slate-500 border border-gray-200">
                        <span className="material-symbols-outlined text-[14px]">
                          delete
                        </span>
                        Scrap
                      </span>
                    )}
                    {equipment.status === "Review" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                        Review
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/30 gap-4 mt-auto">
          <p className="text-sm text-slate-500 order-2 sm:order-1">
            Showing <span className="font-bold text-slate-700">1-5</span> of{" "}
            <span className="font-bold text-slate-700">42</span> assets
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              className="flex items-center justify-center size-9 rounded-lg border border-gray-200 bg-white text-slate-400 disabled:opacity-50 hover:bg-gray-50 hover:text-primary transition-colors"
              disabled
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <div className="flex gap-1">
              <button className="flex items-center justify-center size-9 rounded-lg bg-primary text-white text-sm font-medium shadow-sm">
                1
              </button>
              <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                2
              </button>
              <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                3
              </button>
              <span className="flex items-center justify-center size-9 text-slate-400">
                ...
              </span>
              <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                8
              </button>
            </div>
            <button className="flex items-center justify-center size-9 rounded-lg border border-gray-200 bg-white text-slate-600 hover:bg-gray-50 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
