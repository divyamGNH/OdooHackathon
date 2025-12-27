
import React from 'react';

const Sidebar: React.FC = () => {
  const navItems = [
    { label: 'Dashboard', icon: 'dashboard', active: true },
    { label: 'Equipment', icon: 'precision_manufacturing' },
    { label: 'Requests', icon: 'receipt_long', badge: 8 },
    { label: 'Teams', icon: 'group' },
    { label: 'Calendar', icon: 'calendar_month' },
    { label: 'Reports', icon: 'bar_chart' },
  ];

  const bottomItems = [
    { label: 'Settings', icon: 'settings' },
    { label: 'Log Out', icon: 'logout' },
  ];

  return (
    <aside className="w-64 bg-primary flex flex-col h-screen fixed left-0 top-0 z-30 hidden lg:flex">
      <div className="h-16 flex items-center px-6 border-b border-white/10 gap-3">
        <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[20px]">shield</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-base font-bold leading-none tracking-tight">GearGuard</h1>
          <p className="text-white/50 text-[10px] font-medium mt-1 uppercase tracking-wider">Maintenance OS</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              item.active ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="p-3 border-t border-white/10 space-y-1">
        {bottomItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
