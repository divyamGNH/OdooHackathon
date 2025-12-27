import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import ScheduledToday from "../components/ScheduledToday";
import RequiresAttention from "../components/RequiresAttention";
import TeamCard from "../components/TeamCard";
import ActivityFeed from "../components/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-light">
      <DashboardHeader />

      <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back, Alex
              </h1>
              <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  calendar_today
                </span>
                <span>Monday, October 23 • 9:41 AM</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  bar_chart
                </span>{" "}
                Reports
              </button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>{" "}
                View Calendar
              </button>
              <button className="px-4 py-2 bg-accent-green text-white rounded-lg text-sm font-bold hover:bg-green-600 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>{" "}
                New Request
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <StatCard
              icon="assignment"
              iconBgColor="bg-blue-50"
              iconColor="text-accent-blue"
              title="Total Active Requests"
              value={47}
              badge={{
                text: "5 new",
                icon: "arrow_upward",
                color: "text-accent-green bg-green-50",
              }}
            />
            <StatCard
              icon="warning"
              iconBgColor="bg-red-50"
              iconColor="text-accent-red"
              title="Overdue Requests"
              value={8}
              badge={{
                text: "2 less",
                icon: "arrow_downward",
                color: "text-accent-green bg-green-50",
              }}
              borderColor="border-red-100"
              hasAnimation={true}
            />
            <StatCard
              icon="person"
              iconBgColor="bg-orange-50"
              iconColor="text-orange-500"
              title="My Tasks"
              value={5}
              subtitle="2 in progress"
            />
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  12 Techs Available
                </span>
              </div>
              <div className="flex items-end justify-between mt-2 mb-1">
                <h3 className="text-slate-500 text-sm font-medium">
                  Team Capacity
                </h3>
                <span className="text-2xl font-bold text-primary">68%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-accent-green h-2 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>
          </section>

          {/* Scheduled & Attention Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScheduledToday />
            <RequiresAttention />
          </div>

          {/* Team Status Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary">Team Status</h3>
              <a
                className="text-sm font-medium text-accent-blue hover:text-blue-700"
                href="#"
              >
                View All Teams
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TeamCard
                name="Electrical"
                lead="M. Ross"
                icon="bolt"
                iconBgColor="bg-yellow-50"
                iconColor="text-yellow-600"
                activeJobs={8}
                available="5/8"
                workload="High"
                workloadColor="text-yellow-600"
                workloadPercentage={75}
                workloadBarColor="bg-yellow-500"
              />
              <TeamCard
                name="HVAC"
                lead="S. Chen"
                icon="ac_unit"
                iconBgColor="bg-blue-50"
                iconColor="text-accent-blue"
                activeJobs={12}
                available="2/6"
                workload="Critical"
                workloadColor="text-accent-red"
                workloadPercentage={90}
                workloadBarColor="bg-accent-red"
              />
              <TeamCard
                name="Plumbing"
                lead="D. Wilson"
                icon="plumbing"
                iconBgColor="bg-cyan-50"
                iconColor="text-cyan-600"
                activeJobs={3}
                available="4/5"
                workload="Normal"
                workloadColor="text-accent-green"
                workloadPercentage={40}
                workloadBarColor="bg-accent-green"
              />
            </div>
          </section>

          {/* Activity Feed */}
          <ActivityFeed />

          {/* Footer */}
          <footer className="text-center text-xs text-slate-400 py-4">
            © 2023 GearGuard Inc. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
