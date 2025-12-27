interface Schedule {
  time: string;
  period: string;
  title: string;
  location: string;
  locationIcon: string;
  icon: string;
}

const schedules: Schedule[] = [
  {
    time: "10:00",
    period: "AM",
    title: "Fire Alarm System Test",
    location: "Main Building",
    locationIcon: "location_on",
    icon: "notifications_active",
  },
  {
    time: "02:30",
    period: "PM",
    title: "Conveyor Belt Lubrication",
    location: "Production Line A",
    locationIcon: "precision_manufacturing",
    icon: "oil_barrel",
  },
];

export default function ScheduledToday() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-blue">
            calendar_today
          </span>{" "}
          Scheduled Today
        </h3>
        <button className="text-xs font-medium text-accent-blue hover:underline">
          View Calendar
        </button>
      </div>
      <div>
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer transition-colors group"
          >
            <div className="flex gap-3">
              <div className="flex flex-col text-xs font-medium text-slate-500 w-10 pt-0.5">
                <span>{schedule.time}</span>
                <span>{schedule.period}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-primary group-hover:text-accent-blue transition-colors">
                  {schedule.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    {schedule.locationIcon}
                  </span>{" "}
                  {schedule.location}
                </p>
              </div>
              <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-[16px]">
                  {schedule.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
