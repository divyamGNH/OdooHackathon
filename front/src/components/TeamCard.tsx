interface TeamCardProps {
  name: string;
  lead: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  activeJobs: number;
  available: string;
  workload: string;
  workloadColor: string;
  workloadPercentage: number;
  workloadBarColor: string;
}

export default function TeamCard({
  name,
  lead,
  icon,
  iconBgColor,
  iconColor,
  activeJobs,
  available,
  workload,
  workloadColor,
  workloadPercentage,
  workloadBarColor,
}: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`size-10 rounded-lg ${iconBgColor} flex items-center justify-center ${iconColor}`}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-xs text-slate-500">Lead: {lead}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <div>
          <span className="block text-slate-400 text-xs">Active Jobs</span>
          <span className="font-bold text-primary">{activeJobs}</span>
        </div>
        <div>
          <span className="block text-slate-400 text-xs">Available</span>
          <span className="font-bold text-primary">{available}</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-slate-400">Workload</span>
          <span className={`font-bold ${workloadColor}`}>{workload}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${workloadBarColor} rounded-full transition-all`}
            style={{ width: `${workloadPercentage}%` }}
          ></div>
        </div>
      </div>

      <button className="w-full mt-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
        View Team
      </button>
    </div>
  );
}
