import React from 'react';
import { KanbanTaskCard } from './KanbanTaskCard';
import type { KanbanTask } from './KanbanTaskCard';

interface KanbanBoardColumnProps {
  title: string;
  count: number;
  tasks: KanbanTask[];
  isDraggable: boolean;
  columnId: string;
  bgColor?: string;
  badgeColor?: string;
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, columnId: string) => void;
}

export const KanbanBoardColumn: React.FC<KanbanBoardColumnProps> = ({
  title,
  count,
  tasks,
  isDraggable,
  columnId,
  bgColor = 'bg-[#E8EBF2]',
  badgeColor = 'bg-[#eceaf0] text-[#6c6284]',
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  const isScrapColumn = columnId === 'scrap';

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    onDragOver?.(e);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop?.(e, columnId);
  };

  return (
    <div className="flex flex-col w-[340px] h-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <h3 className={`font-bold text-sm uppercase tracking-wide ${isScrapColumn ? 'text-[#6c6284]' : 'text-[#131117]'}`}>
            {title}
          </h3>
          <span className={`flex items-center justify-center h-5 px-2 rounded-full text-xs font-bold ${badgeColor}`}>
            {count}
          </span>
        </div>
        {!isScrapColumn && (
          <button className="text-[#6c6284] hover:text-[#131117] transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        )}
      </div>

      <div
        className={`flex-1 ${bgColor} rounded-xl p-3 flex flex-col gap-3 overflow-y-auto custom-scrollbar border border-transparent`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {tasks.map((task) => (
          <KanbanTaskCard
            key={task.id}
            task={task}
            isDraggable={isDraggable}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        ))}

        {isScrapColumn && tasks.length > 0 && (
          <div className="h-24 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-1">
            <span className="material-symbols-outlined">delete_outline</span>
            <span className="text-xs font-medium">Drop to scrap</span>
          </div>
        )}

        {tasks.length === 0 && (
          <div className="h-full min-h-[200px] rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-1">
            <span className="material-symbols-outlined text-[32px]">
              {isScrapColumn ? 'delete_outline' : 'add_circle_outline'}
            </span>
            <span className="text-xs font-medium">
              {isScrapColumn ? 'Drop to scrap' : 'No tasks'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
