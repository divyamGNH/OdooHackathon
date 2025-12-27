import React from 'react';

export interface KanbanTask {
  id: string;
  title: string;
  equipment: string;
  dueDate: string;
  status: 'normal' | 'today' | 'overdue' | 'completed';
  assignee?: {
    name: string;
    avatar: string;
  };
  progress?: number;
  isArchived?: boolean;
}

interface KanbanTaskCardProps {
  task: KanbanTask;
  isDraggable: boolean;
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
  onDragEnd?: (e: React.DragEvent) => void;
}

export const KanbanTaskCard: React.FC<KanbanTaskCardProps> = ({ 
  task, 
  isDraggable,
  onDragStart,
  onDragEnd
}) => {
  const getBorderClass = () => {
    if (task.status === 'overdue') {
      return 'border-t border-r border-b border-l-[4px] border-l-accent-red border-gray-100';
    }
    if (task.status === 'completed') {
      return 'border border-accent-green/30';
    }
    return 'border border-gray-100 hover:border-accent/30';
  };

  const getDateBadgeClass = () => {
    switch (task.status) {
      case 'overdue':
        return 'bg-accent-red/10 text-accent-red font-bold';
      case 'today':
        return 'bg-orange-50 text-orange-600';
      case 'completed':
        return 'text-accent-green';
      default:
        return 'text-[#6c6284]';
    }
  };

  const getDateIcon = () => {
    switch (task.status) {
      case 'overdue':
        return 'error';
      case 'completed':
        return 'verified';
      default:
        return 'calendar_today';
    }
  };

  const cardClass = task.isArchived
    ? 'bg-[#f3f4f6] opacity-70 hover:opacity-100 shadow-none border-transparent cursor-not-allowed'
    : `bg-white shadow-sm hover:shadow-lift ${getBorderClass()} ${isDraggable ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`;

  return (
    <div
      draggable={isDraggable && !task.isArchived}
      onDragStart={(e) => isDraggable && !task.isArchived && onDragStart?.(e, task.id)}
      onDragEnd={onDragEnd}
      className={`group p-4 rounded-xl transition-all duration-200 relative overflow-hidden ${cardClass}`}
    >
      {task.status === 'completed' && (
        <div className="absolute top-0 right-0 p-1">
          <span className="material-symbols-outlined text-accent-green text-[16px]">check_circle</span>
        </div>
      )}

      <div className="flex justify-between items-start mb-2">
        <h4 className={`font-semibold text-[15px] leading-snug ${task.isArchived ? 'text-gray-500 line-through' : 'text-[#131117]'} ${task.status === 'completed' ? 'pr-4' : ''}`}>
          {task.title}
        </h4>
        {!task.isArchived && (
          <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-accent transition-opacity">
            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
          </button>
        )}
      </div>

      <p className={`text-xs font-medium inline-block px-2 py-1 rounded-md mb-4 ${task.isArchived ? 'text-gray-400 bg-gray-200' : 'text-[#6c6284] bg-gray-50'}`}>
        {task.equipment}
      </p>

      {task.progress !== undefined && (
        <div className="w-full bg-gray-100 h-1.5 rounded-full mb-3 overflow-hidden">
          <div className="bg-accent-blue h-1.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
        </div>
      )}

      <div className={`flex items-center justify-between pt-2 border-t ${task.isArchived ? 'border-gray-200' : 'border-gray-50'}`}>
        <div className={`flex items-center gap-1.5 text-xs font-medium ${getDateBadgeClass()} ${task.status === 'overdue' ? 'px-2 py-0.5 rounded' : ''}`}>
          <span className="material-symbols-outlined text-[16px]">{getDateIcon()}</span>
          <span>{task.dueDate}</span>
        </div>

        {task.assignee ? (
          <div
            className={`size-7 rounded-full bg-cover bg-center border shadow-sm ${task.isArchived ? 'grayscale border-gray-200' : 'border-white'}`}
            style={{ backgroundImage: `url('${task.assignee.avatar}')` }}
            title={task.assignee.name}
          ></div>
        ) : (
          <div className="size-7 flex items-center justify-center rounded-full bg-gray-100 border border-white text-xs text-gray-500 font-bold">
            ?
          </div>
        )}
      </div>
    </div>
  );
};
