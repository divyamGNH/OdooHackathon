
import React from 'react';
import { ScheduledTask, AttentionItem } from '../types';

const ScheduleSection: React.FC = () => {
  const tasks: ScheduledTask[] = [
    { time: '10:00', period: 'AM', title: 'Fire Alarm System Test', location: 'Main Building', icon: 'notifications_active' },
    { time: '02:30', period: 'PM', title: 'Conveyor Belt Lubrication', location: 'Production Line A', icon: 'oil_barrel' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-blue text-[20px]">calendar_today</span> Scheduled Today
        </h3>
        <button className="text-[10px] font-bold text-accent-blue hover:underline uppercase tracking-wider">View Calendar</button>
      </div>
      <div className="divide-y divide-slate-50">
        {tasks.map((task, i) => (
          <div key={i} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors group">
            <div className="flex gap-3">
              <div className="flex flex-col text-[10px] font-bold text-slate-400 w-10 pt-0.5 uppercase tracking-tighter">
                <span>{task.time}</span>
                <span>{task.period}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-primary group-hover:text-accent-blue transition-colors">{task.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> {task.location}
                </p>
              </div>
              <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-[16px]">{task.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AlertsSection: React.FC = () => {
  const alerts: AttentionItem[] = [
    { id: '#REQ-0899', title: 'Emergency Light Failure', overdue: 'Overdue by 3 days' },
    { id: '#REQ-0902', title: 'Water Pump Noise', overdue: 'Overdue by 1 day' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
      <div className="p-4 bg-red-50/50 border-b border-red-100 flex items-center gap-2">
        <span className="material-symbols-outlined text-accent-red">warning</span>
        <h3 className="font-bold text-slate-800">Requires Attention</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {alerts.map((alert, i) => (
          <div key={i} className="p-4 hover:bg-red-50/30 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{alert.id}</span>
            </div>
            <h4 className="text-sm font-bold text-primary">{alert.title}</h4>
            <p className="text-[10px] font-bold text-accent-red mt-1 uppercase tracking-wider">{alert.overdue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScheduleAndAlerts: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <ScheduleSection />
      <AlertsSection />
    </div>
  );
};

export default ScheduleAndAlerts;
