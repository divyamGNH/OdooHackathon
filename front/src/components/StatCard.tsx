interface StatCardProps {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  value: string | number;
  badge?: {
    text: string;
    icon: string;
    color: string;
  };
  subtitle?: string;
  progress?: number;
  borderColor?: string;
  hasAnimation?: boolean;
}

export default function StatCard({
  icon,
  iconBgColor,
  iconColor,
  title,
  value,
  badge,
  subtitle,
  progress,
  borderColor = "border-slate-200",
  hasAnimation = false,
}: StatCardProps) {
  return (
    <div
      className={`bg-white p-5 rounded-xl border ${borderColor} shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group`}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-lg ${iconBgColor} ${iconColor} group-hover:bg-opacity-100 transition-colors`}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {badge && (
          <span
            className={`flex items-center text-xs font-bold ${badge.color} px-2 py-1 rounded-full gap-1`}
          >
            <span className="material-symbols-outlined text-[12px]">
              {badge.icon}
            </span>{" "}
            {badge.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
        {hasAnimation && (
          <span className="size-2 rounded-full bg-accent-red animate-pulse"></span>
        )}
      </div>

      <div className="mt-1 flex items-baseline gap-2">
        <p className={`text-3xl font-bold ${iconColor}`}>{value}</p>
        {subtitle && <span className="text-sm text-slate-400">{subtitle}</span>}
      </div>

      {progress !== undefined && (
        <div className="mt-2">
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-accent-green h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
