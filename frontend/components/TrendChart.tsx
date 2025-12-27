
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'W1', total: 15 },
  { name: 'W2', total: 22 },
  { name: 'W3', total: 18 },
  { name: 'W4', total: 30 },
  { name: 'W5', total: 25 },
  { name: 'W6', total: 38 },
  { name: 'W7', total: 32 },
];

const TrendChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-lg font-bold text-primary">Request Trends</h3>
        <div className="flex items-center gap-3">
          <select className="text-sm border-slate-200 rounded-lg text-slate-600 focus:ring-primary focus:border-primary py-1 px-3">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>This Quarter</option>
          </select>
          <button className="text-xs font-bold text-slate-500 hover:text-primary flex items-center gap-1 uppercase tracking-wide">
            <span className="material-symbols-outlined text-[18px]">download</span> Export
          </button>
        </div>
      </div>
      
      <div className="flex gap-6 border-b border-slate-100 mb-6">
        <button className="pb-3 text-sm font-bold text-accent-blue border-b-2 border-accent-blue">Request Volume</button>
        <button className="pb-3 text-sm font-medium text-slate-400 hover:text-primary transition-colors">Requests by Team</button>
        <button className="pb-3 text-sm font-medium text-slate-400 hover:text-primary transition-colors">Equipment Breakdown</button>
      </div>

      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-accent-blue"></span> Total</div>
          <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-400"></span> Preventive</div>
          <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-red-400"></span> Corrective</div>
        </div>
        <span>Oct 1 - Oct 30</span>
      </div>
    </div>
  );
};

export default TrendChart;
