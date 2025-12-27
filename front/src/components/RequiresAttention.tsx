interface AttentionItem {
  id: string;
  title: string;
  overdueText: string;
}

const items: AttentionItem[] = [
  {
    id: "#REQ-0899",
    title: "Emergency Light Failure",
    overdueText: "Overdue by 3 days",
  },
  {
    id: "#REQ-0902",
    title: "Water Pump Noise",
    overdueText: "Overdue by 1 day",
  },
];

export default function RequiresAttention() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
      <div className="p-4 bg-red-50/50 border-b border-red-100 flex items-center gap-2">
        <span className="material-symbols-outlined text-accent-red">
          warning
        </span>
        <h3 className="font-bold text-slate-800">Requires Attention</h3>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border-b border-slate-100 last:border-0 hover:bg-red-50/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-slate-400 font-medium">
                {item.id}
              </span>
            </div>
            <h4 className="text-sm font-bold text-primary">{item.title}</h4>
            <p className="text-xs font-medium text-accent-red mt-1">
              {item.overdueText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
