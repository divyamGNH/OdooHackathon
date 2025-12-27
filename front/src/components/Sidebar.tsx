import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
  badge?: number;
}

function NavItem({ icon, label, path, badge }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
        isActive
          ? "bg-white/10 text-white"
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="material-symbols-outlined text-[22px]">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
      {badge && (
        <span className="ml-auto bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary flex flex-col h-full flex-shrink-0 transition-all duration-300 z-20 hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-white/10 gap-3">
        <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[20px]">shield</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-base font-bold leading-none tracking-tight">
            GearGuard
          </h1>
          <p className="text-white/50 text-xs font-medium mt-1">
            Maintenance OS
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        <NavItem icon="dashboard" label="Dashboard" path="/" />
        <NavItem icon="precision_manufacturing" label="Equipment" path="/equipment" />
        <NavItem icon="receipt_long" label="Requests" path="/requests" badge={8} />
        <NavItem icon="group" label="Teams" path="/teams" />
        <NavItem icon="calendar_month" label="Calendar" path="/calendar" />
        <NavItem icon="bar_chart" label="Reports" path="/reports" />
      </nav>

      <div className="p-3 border-t border-white/10 space-y-1">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-[22px]">logout</span>
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
