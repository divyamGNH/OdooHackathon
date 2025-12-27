
import React from 'react';
import { ActivityItem } from '../types';

const ActivityRow: React.FC<{ item: ActivityItem }> = ({ item }) => {
  const isClose = item.type === 'close';
  const isComment = item.type === 'comment';
  const isSystem = item.type === 'system';

  return (
    <div className="flex gap-4 relative">
      {/* Timeline line */}
      {!item.isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-100"></div>
      )}
      
      {/* Dot */}
      <div className="relative z-10 mt-1.5">
        <div className={`size-[22px] rounded-full border-4 border-white shadow-sm flex items-center justify-center ${isClose ? 'bg-accent-blue' : 'bg-slate-200'}`}>
        </div>
      </div>

      <div className="flex-1 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="text-sm">
            <span className="font-bold text-slate-800">{item.user}</span>{' '}
            <span className="text-slate-500">{item.action}</span>{' '}
            <a href="#" className="text-accent-blue font-medium hover:underline">
              {item.targetId}: {item.target}
            </a>
          </div>
          <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
            {item.timestamp}
          </span>
        </div>

        {item.comment && (
          <div className="mt-3 bg-slate-50/80 rounded-xl p-4 border border-slate-100">
            <p className="text-sm text-slate-500 italic">
              &ldquo;{item.comment}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ActivityFeed: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      user: 'Sarah Jenkins',
      action: 'closed request',
      target: 'Lobby AC noise',
      targetId: '#REQ-1015',
      timestamp: '10 mins ago',
      type: 'close',
    },
    {
      id: '2',
      user: 'Mike Ross',
      action: 'added a comment to',
      target: 'Door sensor',
      targetId: '#REQ-1021',
      timestamp: '45 mins ago',
      type: 'comment',
      comment: 'Spare parts ordered. ETA is tomorrow morning.',
    },
    {
      id: '3',
      user: 'System',
      action: 'generated monthly report',
      target: 'September Maintenance Summary',
      targetId: '',
      timestamp: '2 hours ago',
      type: 'system',
      isLast: true,
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-primary mb-8">Recent Activity Feed</h3>
      
      <div className="flex flex-col">
        {activities.map((activity) => (
          <ActivityRow key={activity.id} item={activity} />
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <button className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] hover:text-primary transition-colors flex items-center gap-2">
          Load more activity
          <span className="material-symbols-outlined text-[14px]">expand_more</span>
        </button>
      </div>
    </section>
  );
};

export default ActivityFeed;
