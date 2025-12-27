interface Activity {
  user: string;
  action: string;
  reference: string;
  refLink: string;
  time: string;
  dotColor: string;
  comment?: string;
}

const activities: Activity[] = [
  {
    user: "Sarah Jenkins",
    action: "closed request",
    reference: "#REQ-1015: Lobby AC noise",
    refLink: "#",
    time: "10 mins ago",
    dotColor: "bg-accent-blue",
  },
  {
    user: "Mike Ross",
    action: "added a comment to",
    reference: "#REQ-1021: Door sensor",
    refLink: "#",
    time: "45 mins ago",
    dotColor: "bg-slate-300",
    comment: "Spare parts ordered. ETA is tomorrow morning.",
  },
  {
    user: "System",
    action: "generated monthly report",
    reference: "September Maintenance Summary",
    refLink: "#",
    time: "2 hours ago",
    dotColor: "bg-slate-300",
  },
];

export default function ActivityFeed() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-primary mb-6">
        Recent Activity Feed
      </h3>

      <div className="space-y-6 relative">
        <div className="absolute left-[7px] top-2 bottom-6 w-px bg-slate-200"></div>

        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 relative">
            <div
              className={`size-4 rounded-full ${activity.dotColor} mt-1.5 flex-shrink-0 ring-4 ring-white z-10`}
            ></div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-primary">{activity.user}</span>{" "}
                  {activity.action}{" "}
                  <a
                    className="text-accent-blue hover:underline"
                    href={activity.refLink}
                  >
                    {activity.reference}
                  </a>
                </p>
                <span className="text-xs text-slate-400 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
              {activity.comment && (
                <div className="mt-2 p-3 bg-slate-50 rounded-lg text-sm text-slate-500 italic border border-slate-100">
                  "{activity.comment}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
          Load more activity
        </button>
      </div>
    </section>
  );
}
