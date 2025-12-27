
import React from 'react';
import StatCard from '../components/StatCard';
import RequestBoard from '../components/RequestBoard';
import TrendChart from '../components/TrendChart';
import ScheduleAndAlerts from '../components/ScheduleAndAlerts';
import TeamStatus from '../components/TeamStatus';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, Alex</h1>
            <div className="flex items-center gap-2 mt-1 text-slate-500 text-xs font-medium uppercase tracking-tight">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Monday, October 23 • 9:41 AM</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2 uppercase tracking-wide transition-all">
              <span className="material-symbols-outlined text-[18px]">bar_chart</span> Reports
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2 uppercase tracking-wide transition-all">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span> View Calendar
            </button>
            <button className="px-4 py-2 bg-accent-green text-white rounded-lg text-xs font-bold hover:bg-green-600 shadow-sm flex items-center gap-2 uppercase tracking-wide transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span> New Request
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard 
            label="Total Active Requests" 
            value="47" 
            change="5 new" 
            isPositive={true} 
            icon="assignment" 
            iconBg="bg-blue-50" 
            iconColor="text-accent-blue" 
          />
          <StatCard 
            label="Overdue Requests" 
            value="8" 
            change="2 less" 
            isPositive={true} 
            icon="warning" 
            iconBg="bg-red-50" 
            iconColor="text-accent-red" 
          />
          <StatCard 
            label="My Tasks" 
            value="5" 
            change="2 active" 
            isPositive={false} 
            icon="person" 
            iconBg="bg-orange-50" 
            iconColor="text-orange-500" 
          />
          <StatCard 
            label="Team Capacity" 
            value="68%" 
            change="12% up" 
            isPositive={true} 
            icon="speed" 
            iconBg="bg-emerald-50" 
            iconColor="text-emerald-600" 
            progress={68}
          />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-8 flex flex-col gap-8">
            <RequestBoard />
            <TrendChart />
          </div>
          
          <div className="xl:col-span-4">
            <ScheduleAndAlerts />
            
            {/* Quick Status Info */}
            <div className="mt-6 bg-primary rounded-xl p-5 text-white shadow-lg overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Shift Summary</h4>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold">14</span>
                  <span className="text-xs mb-1 opacity-60 font-medium italic">Tasks remaining today</span>
                </div>
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-xs font-bold uppercase tracking-widest border border-white/10">
                  Daily Briefing
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 pointer-events-none">assignment_turned_in</span>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <TeamStatus />

        {/* Recent Activity Feed - Added below team status as requested */}
        <ActivityFeed />

        <footer className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] py-8 border-t border-slate-100">
           © 2023 GearGuard Inc. Maintenance OS v4.2.1
        </footer>
      </div>
    </main>
  );
};

export default Dashboard;
