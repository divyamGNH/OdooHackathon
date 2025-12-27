import React, { useState } from 'react';

interface CalendarTask {
  time: string;
  title: string;
  color: 'blue' | 'purple' | 'amber' | 'emerald' | 'red' | 'gray';
  icon?: string;
}

interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  tasks: CalendarTask[];
}

export const Calendar: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'month' | 'week' | 'day'>('month');
  const [currentMonth, setCurrentMonth] = useState('October 2023');

  // Sample calendar data
  const calendarDays: CalendarDay[] = [
    // Previous month
    { day: 29, isCurrentMonth: false, isToday: false, tasks: [] },
    { day: 30, isCurrentMonth: false, isToday: false, tasks: [] },
    // Current month
    { day: 1, isCurrentMonth: true, isToday: false, tasks: [{ time: '09:00 AM', title: 'HVAC Main A', color: 'blue' }] },
    { day: 2, isCurrentMonth: true, isToday: false, tasks: [{ time: '11:00 AM', title: 'Panel Board B', color: 'purple' }, { time: '02:00 PM', title: 'GenSet Test', color: 'purple' }] },
    { day: 3, isCurrentMonth: true, isToday: false, tasks: [{ time: '08:30 AM', title: 'Conveyor 4', color: 'amber' }] },
    { day: 4, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 5, isCurrentMonth: true, isToday: true, tasks: [{ time: '10:00 AM', title: 'Chiller Unit 2', color: 'blue' }, { time: '01:15 PM', title: 'Water Pump', color: 'emerald' }, { time: '', title: 'Emergency Valve', color: 'red', icon: 'warning' }] },
    { day: 6, isCurrentMonth: true, isToday: false, tasks: [{ time: '', title: 'Audit Prep', color: 'gray', icon: 'check_circle' }] },
    { day: 7, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 8, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 9, isCurrentMonth: true, isToday: false, tasks: [{ time: '09:00 AM', title: 'HVAC Filter', color: 'blue' }, { time: '11:30 AM', title: 'Compressor', color: 'blue' }, { time: '03:00 PM', title: 'Duct Clean', color: 'blue' }] },
    { day: 10, isCurrentMonth: true, isToday: false, tasks: [{ time: 'All Day', title: 'Grid Maintenance', color: 'purple' }] },
    { day: 11, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 12, isCurrentMonth: true, isToday: false, tasks: [{ time: '10:00 AM', title: 'Lift Service', color: 'amber' }] },
    { day: 13, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 14, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 15, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 16, isCurrentMonth: true, isToday: false, tasks: [{ time: '08:00 AM', title: 'Pipe Inspection', color: 'emerald' }] },
    { day: 17, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 18, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 19, isCurrentMonth: true, isToday: false, tasks: [{ time: '09:00 AM', title: 'AC Repair', color: 'blue' }, { time: '11:00 AM', title: 'Wiring Check', color: 'purple' }] },
    { day: 20, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 21, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 22, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 23, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 24, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 25, isCurrentMonth: true, isToday: false, tasks: [{ time: '01:30 PM', title: 'Boiler Check', color: 'amber' }] },
    { day: 26, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 27, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 28, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 29, isCurrentMonth: true, isToday: false, tasks: [] },
    { day: 30, isCurrentMonth: true, isToday: false, tasks: [{ time: '', title: 'Monthly Review', color: 'red', icon: 'calendar_month' }] },
    { day: 31, isCurrentMonth: true, isToday: false, tasks: [] },
    // Next month
    { day: 1, isCurrentMonth: false, isToday: false, tasks: [] },
    { day: 2, isCurrentMonth: false, isToday: false, tasks: [] },
    { day: 3, isCurrentMonth: false, isToday: false, tasks: [] },
    { day: 4, isCurrentMonth: false, isToday: false, tasks: [] },
  ];

  const getTaskColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-500 text-blue-700',
      purple: 'bg-purple-50 border-purple-500 text-purple-700',
      amber: 'bg-amber-50 border-amber-500 text-amber-800',
      emerald: 'bg-emerald-50 border-emerald-500 text-emerald-700',
      red: 'bg-red-50 border-red-500 text-red-700',
      gray: 'bg-gray-100 border-gray-400 text-gray-600',
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="flex-1 flex overflow-hidden bg-background-light">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white border-r border-[#eaecf0] flex flex-col overflow-y-auto hidden md:flex shrink-0">
        <div className="p-5 flex flex-col gap-6">
          {/* Create Request Button */}
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-10 px-4 bg-primary hover:bg-[#151f32] text-white text-sm font-bold shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span className="truncate">Create Request</span>
          </button>

          {/* Mini Calendar */}
          <div className="pb-4 border-b border-[#eaecf0]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-gray-900">October 2023</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              <span className="p-1 text-gray-300">29</span>
              <span className="p-1 text-gray-300">30</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">1</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">2</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">3</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">4</span>
              <span className="p-1 bg-primary text-white rounded-full font-bold shadow-md cursor-pointer">5</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">6</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">7</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">8</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">9</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">10</span>
              <span className="p-1 hover:bg-gray-100 rounded cursor-pointer">11</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Filters</h3>
              <button className="text-xs text-primary font-medium hover:underline">Reset</button>
            </div>

            {/* Teams Filter */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-gray-400">group</span> Teams
              </p>
              <div className="flex flex-col gap-2 pl-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="form-checkbox rounded border-gray-300 text-blue-600 focus:ring-blue-500 size-4" type="checkbox" />
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">HVAC</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="form-checkbox rounded border-gray-300 text-purple-600 focus:ring-purple-500 size-4" type="checkbox" />
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-purple-500"></span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Electrical</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="form-checkbox rounded border-gray-300 text-amber-600 focus:ring-amber-500 size-4" type="checkbox" />
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500"></span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Mechanical</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="form-checkbox rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 size-4" type="checkbox" />
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Plumbing</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="border-t border-gray-100 my-1"></div>

            {/* Priority Filter */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-gray-400">priority_high</span> Priority
              </p>
              <div className="flex flex-col gap-2 pl-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input defaultChecked className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary size-4" type="checkbox" />
                  <span className="text-sm text-gray-600">High Priority</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input defaultChecked className="form-checkbox rounded border-gray-300 text-primary focus:ring-primary size-4" type="checkbox" />
                  <span className="text-sm text-gray-600">Routine</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Calendar Section */}
      <main className="flex-1 flex flex-col min-w-0 bg-background-light relative overflow-hidden">
        {/* Calendar Header */}
        <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 bg-white border-b border-[#eaecf0]">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-primary tracking-tight">Preventive Maintenance Schedule</h1>
            <p className="text-gray-500 text-sm">Manage upcoming tasks across all facilities.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-[#eaecf0] shadow-sm">
            <div className="flex items-center">
              <button className="size-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <span className="text-base font-bold text-gray-900 px-3 min-w-[140px] text-center">{currentMonth}</span>
            </div>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedView('month')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedView === 'month' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setSelectedView('week')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedView === 'week' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setSelectedView('day')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedView === 'day' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Day
              </button>
            </div>
            <button className="ml-2 px-3 py-1.5 border border-[#eaecf0] rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Today
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6 pt-4">
          <div className="bg-white rounded-xl border border-[#eaecf0] shadow-sm overflow-hidden min-h-[800px] flex flex-col">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 border-b border-[#eaecf0] bg-gray-50">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="flex-1 grid grid-cols-7 auto-rows-fr divide-x divide-y divide-[#eaecf0]">
              {calendarDays.map((dayData, index) => {
                const bgClass = !dayData.isCurrentMonth
                  ? 'bg-gray-50/50'
                  : dayData.isToday
                  ? 'bg-blue-50/30 hover:bg-blue-50'
                  : 'bg-white hover:bg-gray-50';

                return (
                  <div
                    key={index}
                    className={`${bgClass} p-2 min-h-[120px] group transition-colors relative cursor-pointer`}
                  >
                    {dayData.isToday ? (
                      <span className="flex items-center justify-center size-7 rounded-full bg-primary text-white text-sm font-bold shadow-sm">
                        {dayData.day}
                      </span>
                    ) : (
                      <span className={`text-sm font-medium ${!dayData.isCurrentMonth ? 'text-gray-400' : 'text-gray-700'}`}>
                        {dayData.day}
                      </span>
                    )}
                    
                    <div className="mt-2 space-y-1.5">
                      {dayData.tasks.slice(0, 3).map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className={`px-2 py-1 border-l-2 rounded-r-md text-xs font-medium truncate hover:opacity-80 transition-opacity ${
                            dayData.isToday ? 'shadow-sm' : ''
                          } ${getTaskColorClasses(task.color)} flex items-center gap-1`}
                        >
                          {task.icon && <span className="material-symbols-outlined text-[12px]">{task.icon}</span>}
                          {task.time && `${task.time} • `}{task.title}
                        </div>
                      ))}
                      {dayData.tasks.length > 3 && (
                        <span className="text-[10px] text-gray-400 font-medium pl-1">+ {dayData.tasks.length - 3} more</span>
                      )}
                    </div>

                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-all">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
