
import React from 'react';
import { StatItem } from '../types';

const StatCard: React.FC<StatItem & { progress?: number }> = ({ label, value, change, isPositive, icon, iconBg, iconColor, progress }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${iconBg} ${iconColor} group-hover:bg-opacity-80 transition-colors`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`flex items-center text-[10px] font-bold ${isPositive ? 'text-accent-green bg-green-50' : 'text-accent-red bg-red-50'} px-2 py-1 rounded-full gap-0.5`}>
          <span className="material-symbols-outlined text-[12px]">{isPositive ? 'arrow_upward' : 'arrow_downward'}</span> {change}
        </span>
      </div>
      <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</h3>
      <div className="mt-1 flex items-baseline justify-between">
        <p className="text-3xl font-bold text-primary">{value}</p>
        {progress !== undefined && <span className="text-xs text-slate-400 font-medium">12 Techs Available</span>}
      </div>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div className="bg-accent-green h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
