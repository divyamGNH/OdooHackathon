
import React from 'react';
import { RequestItem } from '../types';

interface ColumnProps {
  title: string;
  count: number;
  items: RequestItem[];
  accentColor?: string;
}

const RequestCard: React.FC<{ item: RequestItem }> = ({ item }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow relative ${item.status === 'in-progress' ? 'border-l-4 border-l-accent-blue' : ''} ${item.status === 'on-hold' ? 'border-l-4 border-l-orange-400' : ''}`}>
      <div className={`absolute top-4 right-4 size-2 rounded-full ${item.priorityColor}`}></div>
      <div className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-tighter">{item.id}</div>
      <p className="text-sm font-semibold text-primary leading-snug mb-3 pr-4">{item.title}</p>
      
      {item.tag && (
        <span className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded mb-3">
          {item.tag}
        </span>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-500">
          <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
          <span className="text-xs font-medium">{item.category}</span>
        </div>
        {item.assignedTo ? (
           <div 
             className="size-6 rounded-full bg-slate-200 bg-cover border border-white shadow-sm"
             style={{ backgroundImage: `url('${item.assignedTo}')` }}
           ></div>
        ) : (
          <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-1.5 py-0.5 rounded">Unassigned</span>
        )}
      </div>
    </div>
  );
};

const BoardColumn: React.FC<ColumnProps> = ({ title, count, items, accentColor = 'text-slate-500' }) => {
  return (
    <div className="bg-slate-100/70 rounded-xl p-3 flex flex-col gap-3 min-h-[350px]">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className={`text-[10px] font-bold ${accentColor} uppercase tracking-wider`}>{title} ({count})</span>
      </div>
      {items.map((item) => <RequestCard key={item.id} item={item} />)}
    </div>
  );
};

const RequestBoard: React.FC = () => {
  const data: Record<string, RequestItem[]> = {
    new: [
      { id: '#REQ-1024', title: 'AC Unit #4 leaking coolant in Server Room B', category: 'HVAC', icon: 'ac_unit', status: 'new', priorityColor: 'bg-accent-red' },
      { id: '#REQ-1021', title: 'Lobby entrance door sensor malfunction', category: 'General', icon: 'meeting_room', status: 'new', priorityColor: 'bg-orange-400', assignedTo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg5t5tm3KdxekeIbPzyi9R5WCaVGJdhi6xh3w3OU6_gtVCXXBH-Dyzw9j1yrzM7OVKrRn2DTF5l0Ff7Rjn3K0Rc9Zek0eoOmX7IQcK8C6zZ-qixDFfK2LavIbw-ZvBY6j_kVXRCeU7bsycsTo7bBMxWpzzGgqQEf3JKSBoGoHaTeCajlscgRtHDwEdn5e-1j6tckbvAhegcwiK6HXbOxC7_BspmMlJnfzvIXwGWJ4kBcrzCC8a_Pt01_NtH0FQVvqeVQnJ0-iGHQ5H' },
    ],
    inProgress: [
      { id: '#REQ-1018', title: 'Quarterly elevator inspection - North Wing', category: 'Lift', icon: 'elevator', status: 'in-progress', priorityColor: 'bg-accent-green', assignedTo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfCAh-b5UhItVjS2Im1GC1Is8bUAjqlRqudPLZ-tEtnhTpYbGmKW2TK2lbwdmKKoVJWhl0fcXOI-VB5-CdmR0shQ_aCSRH_x7VKMFemV7C1Be9Sc09WSpI5PNbRgCERe-YZxMYhDImmkMlfDW728XeZ7e6CFNfa7KftBpxwJ11xl8cddPamcJT0QG6SPaCKoiSPyCk2nQfjSNAuwhFhd-ZucLnuDhTbAgxRt4LkDxxhFn6KoRRDUHZWKs7Ec9zuAzfBG--EsASY9cn' },
    ],
    onHold: [
      { id: '#REQ-0998', title: 'Replace backup generator filter', category: 'Power', icon: 'bolt', status: 'on-hold', priorityColor: 'bg-orange-400', tag: 'Waiting for parts', assignedTo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGuBB94A4a8M3-523clDJjiQf1RJOQ5nNw6dOh6GIMo22fFQkxhSY8a6nLCD_uzpIOuyNgL_n73MpnE1dMOrbhMBy567D9f6co63zQQVMOfSAPXUlgHMZBoy4rlsdCBWVh4qmF6zPOVZJEbvt-i9-_ewuZpV3mL1jf5y94USQfEsIfwb8PFaGlBDaf5H9-4mHzjA-LjwDidew839zTETORnl9jt21YHOPS_XkGvQz7VgEuKJIpor9gm_MrReND5XbAcVbaPhta4BGn' },
    ]
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-primary text-lg font-bold">Request Board</h3>
        <div className="flex gap-2">
          <button className="p-1.5 rounded bg-blue-50 text-accent-blue border border-blue-100">
            <span className="material-symbols-outlined text-[20px]">view_column</span>
          </button>
          <button className="p-1.5 rounded bg-white text-slate-400 border border-slate-200 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">table_rows</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BoardColumn title="New" count={4} items={data.new} accentColor="text-slate-500" />
        <BoardColumn title="In Progress" count={2} items={data.inProgress} accentColor="text-accent-blue" />
        <BoardColumn title="On Hold" count={1} items={data.onHold} accentColor="text-orange-500" />
      </div>
      <button className="w-full py-2.5 rounded-lg border border-dashed border-slate-300 text-sm font-bold text-accent-blue hover:bg-blue-50 hover:border-blue-200 transition-all flex items-center justify-center gap-2">
        View all requests (12)
      </button>
    </div>
  );
};

export default RequestBoard;
