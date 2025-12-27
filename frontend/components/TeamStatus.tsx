
import React from 'react';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ team: TeamMember }> = ({ team }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className={`size-10 rounded-lg ${team.iconBg} flex items-center justify-center ${team.iconColor}`}>
          <span className="material-symbols-outlined">{team.icon}</span>
        </div>
        <div>
          <h4 className="font-bold text-primary">{team.name}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lead: {team.role}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm mb-3">
        <div>
          <span className="block text-slate-400 text-[10px] font-bold uppercase">Active Jobs</span>
          <span className="font-bold text-primary">{team.activeJobs}</span>
        </div>
        <div>
          <span className="block text-slate-400 text-[10px] font-bold uppercase">Available</span>
          <span className="font-bold text-primary">{team.available}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[10px] font-bold uppercase mb-1 tracking-wider">
          <span className="text-slate-400">Workload</span>
          <span className={team.iconColor}>{team.workload}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full ${team.workloadColor} rounded-full`} style={{ width: `${team.workloadValue}%` }}></div>
        </div>
      </div>
      <button className="w-full mt-4 py-2 text-[10px] font-bold text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-widest">
        View Team
      </button>
    </div>
  );
};

const TeamStatus: React.FC = () => {
  const teams: TeamMember[] = [
    { name: 'Electrical', role: 'M. Ross', activeJobs: 8, available: '5/8', workload: 'High', workloadValue: 75, workloadColor: 'bg-orange-400', icon: 'bolt', iconBg: 'bg-orange-50', iconColor: 'text-orange-600' },
    { name: 'HVAC', role: 'S. Chen', activeJobs: 12, available: '2/6', workload: 'Critical', workloadValue: 90, workloadColor: 'bg-accent-red', icon: 'ac_unit', iconBg: 'bg-blue-50', iconColor: 'text-accent-blue' },
    { name: 'Plumbing', role: 'D. Wilson', activeJobs: 3, available: '4/5', workload: 'Normal', workloadValue: 40, workloadColor: 'bg-accent-green', icon: 'plumbing', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600' },
  ];

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-primary">Team Status</h3>
        <a className="text-[10px] font-bold text-accent-blue hover:text-blue-700 uppercase tracking-widest" href="#">View All Teams</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team) => <TeamCard key={team.name} team={team} />)}
      </div>
    </section>
  );
};

export default TeamStatus;
