import { Link } from "react-router-dom";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider group">
        {title}
        <span className="material-symbols-outlined text-[16px] group-hover:text-primary">
          expand_less
        </span>
      </button>
      {children}
    </div>
  );
}

export default function EquipmentFilters() {
  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-fit lg:h-full lg:max-h-[calc(100vh-250px)] overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <span className="material-symbols-outlined">filter_list</span>
            Filters
          </div>
          <button className="text-xs font-medium text-slate-500 hover:text-primary">
            Clear All
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
          <FilterSection title="Department">
            <div className="flex flex-col gap-2">
              {[
                { name: "Production", count: 12 },
                { name: "Logistics", count: 8 },
                { name: "Fabrication", count: 5 },
                { name: "R&D", count: 4 },
              ].map((dept) => (
                <label
                  key={dept.name}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary/20 size-4"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-primary transition-colors">
                      {dept.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 bg-gray-50 px-1.5 py-0.5 rounded">
                    {dept.count}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          <hr className="border-gray-100" />

          <FilterSection title="Equipment Category">
            <div className="flex flex-col gap-2">
              {[
                { name: "Heavy Machinery", count: 15 },
                { name: "Vehicles", count: 7 },
                { name: "Electronics", count: 18 },
              ].map((cat) => (
                <label
                  key={cat.name}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary/20 size-4"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 bg-gray-50 px-1.5 py-0.5 rounded">
                    {cat.count}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          <hr className="border-gray-100" />

          <FilterSection title="Status">
            <div className="flex flex-col gap-2">
              {[
                "All Statuses",
                "Active",
                "Under Maintenance",
                "Scrapped",
              ].map((status, index) => (
                <label
                  key={status}
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <input
                    type="radio"
                    name="status"
                    defaultChecked={index === 1}
                    className="form-radio text-primary focus:ring-primary/20 size-4 border-gray-300"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-primary transition-colors">
                    {status}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>

        <div className="p-4 border-t border-gray-100 mt-auto bg-gray-50">
          <button className="w-full flex items-center justify-center h-10 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-all shadow-sm">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
}
