import React, { useState } from 'react';
import { KanbanBoardColumn } from '../components/KanbanBoardColumn';
import type { KanbanTask } from '../components/KanbanTaskCard';
import { MaintenanceRequestModal } from '../components/MaintenanceRequestModal';

// Role type for user permissions
type UserRole = 'admin' | 'maintenance' | 'employee';

// Mock user role - In production, this would come from auth context
const currentUserRole: UserRole = 'maintenance'; // Change to 'employee' to test restricted access

const initialTasks: Record<string, KanbanTask[]> = {
  new: [
    {
      id: 'task-1',
      title: 'Hydraulic Pump Failure',
      equipment: 'Forklift B-09',
      dueDate: 'Tomorrow',
      status: 'normal',
      assignee: {
        name: 'John Doe',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpT7ip03R1aWQaE-AYjIslBSOp8yfTOlxWqaiGJI4GLIBjlKvsiXSrEUDpeMO8Hw1ZtaNiAR4gxleutw1C9-wr_9wrFgxuU9YgcF1Xg_NXnAe05wZKnkbQivQ3HHldjTBGjY7rt2hIaSWQeOtiC4YvCXSq5r3rdMRw9U2HhESyIUGp2yYqDoCdBGE9o6aCo_VbbUHUI-8hDLi0ejrT2KCdQdRrnvBM7JArsCWbx1T5_kTmWfq_O_TsXtmPuw-8A3NRs2K4xKu_7w65'
      }
    },
    {
      id: 'task-2',
      title: 'Sensor Calibration',
      equipment: 'Conveyor Belt 04',
      dueDate: 'Today',
      status: 'today',
      assignee: {
        name: 'Jane Smith',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUggsSRMPBAMy3-rM7JT--tUInVtViFUNwvxtdQQvvi9zgMXZ2rS2Li1_YOtHVKOvoK0uQyfZY1l1AB3-g8EwVaPVFfrD8Gb7Oj3caze4eiQ3IRStbyb-PqxVLeWnAatQEiHQ358UpuwP5v9dNQbH5csNNSfpKBCcNSM16tNxwQsac3v_tZ14YJTnIvpHK5iFgdHCr0X-Cst76DtMHCeXJGpLn7sCM-3Qu-EV8db6EMaaAfW_s_E_mPXKVZRslaxpLLX1XBICtlZS9'
      }
    },
    {
      id: 'task-3',
      title: 'Routine Inspection',
      equipment: 'HVAC Unit 2',
      dueDate: 'Oct 24',
      status: 'normal'
    }
  ],
  inProgress: [
    {
      id: 'task-4',
      title: 'Oil Leak Repair',
      equipment: 'CNC Machine X1',
      dueDate: 'Yesterday',
      status: 'overdue',
      assignee: {
        name: 'Mike Johnson',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzqpik85NLrNdQUUnA1xCfuSUKgugh5gWxY0K2WzXD-gvvUvTCqw1QTJS4uD4G_OG-vErz0l9JR077lSCVDd_0kPWwWTwljuRFhnKiawT5cFmJtF8z-TaRjkhiQW3C2SXfYUtkc9GW1HzIFHyA6_TL_RepvAnuI1SuoVoiz54QDaXIeDskzJPl7D08zRzwzgCf9SRBKrAfTs2Dmwk_sfV9KN4U9rjVFBpgE7FWNGy1YVovyEA-jaJXeHqTyKT-Zz-QyMr6BX11ln8N'
      }
    },
    {
      id: 'task-5',
      title: 'Alignment Check',
      equipment: 'Conveyor Main',
      dueDate: 'Oct 28',
      status: 'normal',
      progress: 65,
      assignee: {
        name: 'Sarah Williams',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWay2T8nWeBrGDjvl6-G-f8Gs0-7Nkj004M6JweBGTJkb4vTcl1JkwHVW0br-5V0QkuK9aTNtR825xBwOCuUVuegKU5tR7nIU2BbFKu-4uxffoNnZ6VxI3RAupx4B5v3hUX6utAlevt-CimAvyxsoNV-_lKbsA4hXV_vgxoWoh8BOJfa-lT6whe2QiYA6H5ACo58cUbQm61QoQJlyR-M0JqMiRpbEvI66VJEfTt32jp0g0jgY0sdnIcGrW_sBu7DOXBy5I1NsltbSR'
      }
    }
  ],
  repaired: [
    {
      id: 'task-6',
      title: 'Replace Safety Guard',
      equipment: 'Press Brake',
      dueDate: 'Completed',
      status: 'completed',
      assignee: {
        name: 'Tom Brown',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS7hO6BVmA25HrmtCk029_Ha3miCclju49NXZN701_-7z1CGiUYA3B0_7GbSTVUqUD64424OMnSBLoNsf_Vjk7MfwPLMF6q6ixDD53JWaWCMUaOHz1dvMihh9gBC3XHr39REhWXylYiUrY2firnu29DhGrexWQl-h9SKBMqjktnXYjiiofBdGNkv-Pp3kPBt6hZZzTG_KVHZW5YIliIIMgw4rljkIOSX3K7e6Ae49IDit8vEpkVbOjYnkZ9gzWamLhImu62BUyAAJL'
      }
    }
  ],
  scrap: [
    {
      id: 'task-7',
      title: 'Damaged Rotor',
      equipment: 'Turbine 7',
      dueDate: 'Archived',
      status: 'normal',
      isArchived: true,
      assignee: {
        name: 'Alex Green',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeVrrHhKreYNzedatDizwi4Qb2Ycm3ZJMmW5W4yikYvH9PLPO8RxJrwW9_o02zv9vSKLlEXDdgk3EQmg5Yz63UkX8IIUc05ToYOW048nWf7M5rManxxcXeJRVDWal8LxwAAr0m_odx6F3Y3sxe0AEb3dy-hTPYje7w5WlrlkTdWjRfddNw6KDlCQT-84KDkJOC12D4HYb2qlfa_qqqNig-CvXxy0GL4vo-EqHAGAQT33GKFPq4GpW2vbRkfQx14ADPAVVmP96V5opr'
      }
    }
  ]
};

export const MaintenanceKanban: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [draggedFromColumn, setDraggedFromColumn] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('myTasks');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Check if user can drag tasks (admin or maintenance only)
  const canDrag = (currentUserRole as UserRole) === 'admin' || (currentUserRole as UserRole) === 'maintenance';

  const handleDragStart = (e: React.DragEvent, taskId: string, columnId: string) => {
    if (!canDrag) return;
    setDraggedTaskId(taskId);
    setDraggedFromColumn(columnId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedTaskId(null);
    setDraggedFromColumn(null);
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    if (!draggedTaskId || !draggedFromColumn || !canDrag) return;
    if (draggedFromColumn === targetColumnId) return;

    // Find the task being dragged
    const task = tasks[draggedFromColumn].find(t => t.id === draggedTaskId);
    if (!task) return;

    // Update task status based on column
    let updatedTask = { ...task };
    if (targetColumnId === 'repaired') {
      updatedTask.status = 'completed';
    } else if (targetColumnId === 'scrap') {
      updatedTask.isArchived = true;
    } else {
      updatedTask.isArchived = false;
      if (updatedTask.status === 'completed') {
        updatedTask.status = 'normal';
      }
    }

    // Remove from source column and add to target column
    setTasks(prev => ({
      ...prev,
      [draggedFromColumn]: prev[draggedFromColumn].filter(t => t.id !== draggedTaskId),
      [targetColumnId]: [...prev[targetColumnId], updatedTask]
    }));

    setDraggedTaskId(null);
    setDraggedFromColumn(null);
  };

  const columns = [
    { 
      id: 'new', 
      title: 'NEW', 
      bgColor: 'bg-[#E8EBF2]', 
      badgeColor: 'bg-[#eceaf0] text-[#6c6284]' 
    },
    { 
      id: 'inProgress', 
      title: 'IN PROGRESS', 
      bgColor: 'bg-[#E8EBF2]', 
      badgeColor: 'bg-blue-100 text-blue-700' 
    },
    { 
      id: 'repaired', 
      title: 'REPAIRED', 
      bgColor: 'bg-[#E8EBF2]', 
      badgeColor: 'bg-green-100 text-green-700' 
    },
    { 
      id: 'scrap', 
      title: 'SCRAP', 
      bgColor: 'bg-[#dcdfe6]', 
      badgeColor: 'bg-[#d1d5db] text-[#4b5563]' 
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      {/* Page Header & Toolbar */}
      <div className="flex-none px-6 py-5 flex flex-col gap-4 bg-background-light z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-[#131117] text-2xl font-bold leading-tight">Maintenance Kanban</h1>
            <p className="text-[#6c6284] text-sm mt-1">Daily technician tasks and equipment status workflow.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 h-10 px-5 bg-white border border-[#eceaf0] text-[#131117] text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Export</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-10 px-5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all" onClick={() => setIsRequestModalOpen(true)}>
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>New Work Order</span>
            </button>
          </div>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setActiveFilter('myTasks')}
              className={`flex items-center gap-2 px-4 h-8 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'myTasks'
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white border border-[#eceaf0] text-[#6c6284] hover:text-[#131117]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              My Tasks
            </button>
            <button
              onClick={() => setActiveFilter('overdue')}
              className={`flex items-center gap-2 px-4 h-8 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'overdue'
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white border border-[#eceaf0] text-[#6c6284] hover:text-[#131117]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] text-red-500">warning</span>
              Overdue
            </button>
            <button
              onClick={() => setActiveFilter('highPriority')}
              className={`flex items-center gap-2 px-4 h-8 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'highPriority'
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white border border-[#eceaf0] text-[#6c6284] hover:text-[#131117]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] text-orange-500">priority_high</span>
              High Priority
            </button>
            <button
              onClick={() => setActiveFilter('unassigned')}
              className={`flex items-center gap-2 px-4 h-8 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'unassigned'
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-white border border-[#eceaf0] text-[#6c6284] hover:text-[#131117]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">person_off</span>
              Unassigned
            </button>
          </div>

          <div className="flex items-center bg-white rounded-lg p-1 border border-[#eceaf0]">
            <button className="p-1.5 rounded-md hover:bg-gray-100 text-[#6c6284] transition-colors">
              <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
            </button>
            <button className="p-1.5 rounded-md bg-primary/10 text-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px] font-bold">view_kanban</span>
            </button>
          </div>
        </div>

        {/* Role-based message */}
        {!canDrag && (
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-orange-700 text-sm">
            <span className="material-symbols-outlined text-[20px]">info</span>
            <span>You have view-only access. Only maintenance staff and admins can move tasks.</span>
          </div>
        )}
      </div>

      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar px-6 pb-6 pt-4">
        <div className="flex h-full gap-4 min-w-max">
          {columns.map(column => (
            <KanbanBoardColumn
              key={column.id}
              columnId={column.id}
              title={column.title}
              count={tasks[column.id].length}
              tasks={tasks[column.id]}
              isDraggable={canDrag}
              bgColor={column.bgColor}
              badgeColor={column.badgeColor}
              onDragStart={(e, taskId) => handleDragStart(e, taskId, column.id)}
              onDragEnd={handleDragEnd}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>

      {/* Maintenance Request Modal */}
      <MaintenanceRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
};
