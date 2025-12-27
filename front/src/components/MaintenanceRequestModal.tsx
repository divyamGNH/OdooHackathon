import React, { useState } from 'react';

interface MaintenanceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaintenanceRequestModal: React.FC<MaintenanceRequestModalProps> = ({ isOpen, onClose }) => {
  const [requestType, setRequestType] = useState<'corrective' | 'preventive'>('corrective');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex-none px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary tracking-tight">Create Maintenance Request</h2>
            <p className="text-slate-500 text-sm mt-1">Fill in the details below to log a new maintenance task for the engineering team.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 h-10 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-5 h-10 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-sm shadow-primary/20 flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[18px]">save</span>
              Save Draft
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Form Card */}
          <div className="p-8">
            <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              {/* Form Header */}
              <div className="border-b border-slate-100 px-8 py-5 flex items-center justify-between bg-white">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">assignment</span>
                  Request Details
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-2 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Draft</span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 bg-white">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Left Column: Core Info */}
                  <div className="space-y-6">
                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary/20 placeholder:text-slate-400"
                        placeholder="e.g., HVAC Unit 4 Noisy Fan"
                        type="text"
                      />
                    </div>

                    {/* Request Type (Radio Cards) */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Request Type
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="cursor-pointer relative">
                          <input
                            checked={requestType === 'corrective'}
                            onChange={() => setRequestType('corrective')}
                            className="peer sr-only"
                            name="req_type"
                            type="radio"
                            value="corrective"
                          />
                          <div className="p-3 rounded-lg border border-slate-200 bg-white peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col gap-1 hover:border-slate-300">
                            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                              <span className="material-symbols-outlined text-[18px] text-orange-500">warning</span>
                              Corrective
                            </div>
                            <span className="text-xs text-slate-500">Fixing a fault</span>
                          </div>
                        </label>
                        <label className="cursor-pointer relative">
                          <input
                            checked={requestType === 'preventive'}
                            onChange={() => setRequestType('preventive')}
                            className="peer sr-only"
                            name="req_type"
                            type="radio"
                            value="preventive"
                          />
                          <div className="p-3 rounded-lg border border-slate-200 bg-white peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col gap-1 hover:border-slate-300 group">
                            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                              <span className="material-symbols-outlined text-[18px] text-accent-green">event_repeat</span>
                              Preventive
                            </div>
                            <span className="text-xs text-slate-500">Scheduled maintenance</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Equipment Selector */}
                    <div className="space-y-1.5 relative">
                      <label className="block text-sm font-medium text-slate-700">
                        Equipment <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-slate-400 text-[20px]">precision_manufacturing</span>
                        </div>
                        <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 pl-10 focus:border-primary focus:ring-primary/20 appearance-none cursor-pointer" aria-label="Select equipment">
                          <option disabled selected value="">Select equipment...</option>
                          <option value="press-01">Hydraulic Press A1</option>
                          <option value="lathe-b">CNC Lathe B2</option>
                          <option value="conveyor-04">Main Conveyor Belt 04</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-slate-400 text-[20px]">expand_more</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500">Selecting equipment will auto-assign the responsible team.</p>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-700">
                        Description
                      </label>
                      <textarea
                        className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary/20 placeholder:text-slate-400 resize-none"
                        placeholder="Describe the issue or maintenance required in detail..."
                        rows={4}
                      ></textarea>
                    </div>
                  </div>

                  {/* Right Column: Execution & Schedule */}
                  <div className="space-y-6">
                    {/* Team (Auto-filled) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-slate-700">
                          Assigned Team
                        </label>
                        <span className="text-xs font-medium text-accent-blue bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                          Auto-filled
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          className="w-full rounded-lg border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
                          disabled
                          type="text"
                          value="Mechanical Maintenance B"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center">
                          <span className="material-symbols-outlined text-slate-400 text-[18px]">groups</span>
                        </div>
                      </div>
                    </div>

                    {/* Scheduled Date (Highlighted for Preventive) */}
                    <div className="space-y-1.5 p-4 rounded-lg bg-blue-50/50 border border-blue-100 transition-colors">
                      <label className="block text-sm font-medium text-primary">
                        Scheduled Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                        </div>
                        <input
                          className="w-full rounded-lg border-primary/20 bg-white text-slate-900 pl-10 focus:border-primary focus:ring-primary/20"
                          type="date"
                          aria-label="Scheduled date"
                        />
                      </div>
                      <p className="text-xs text-slate-500">Date highlighted for preventive maintenance.</p>
                    </div>

                    <div className="flex gap-4">
                      {/* Est Duration */}
                      <div className="space-y-1.5 flex-1">
                        <label className="block text-sm font-medium text-slate-700">
                          Est. Duration
                        </label>
                        <div className="flex rounded-lg shadow-sm">
                          <input
                            className="block w-full min-w-0 rounded-none rounded-l-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary/20 px-3"
                            placeholder="2"
                            type="number"
                            aria-label="Duration value"
                          />
                          <select className="inline-flex items-center rounded-r-lg border border-l-0 border-slate-200 bg-slate-100 px-3 text-sm text-slate-600 focus:border-primary focus:ring-primary/20" aria-label="Duration unit">
                            <option>Hours</option>
                            <option>Days</option>
                          </select>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="space-y-1.5 flex-1">
                        <label className="block text-sm font-medium text-slate-700">
                          Status
                        </label>
                        <div className="relative">
                          <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 pl-9 focus:border-primary focus:ring-primary/20 appearance-none" aria-label="Request status">
                            <option value="new">New</option>
                            <option value="in_progress">In Progress</option>
                            <option value="repaired">Repaired</option>
                            <option value="scrap">Scrap</option>
                          </select>
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <span className="block size-2.5 rounded-full bg-blue-500"></span>
                          </div>
                          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">expand_more</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Priority */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Priority Level
                      </label>
                      <div className="flex gap-2">
                        <label className="flex-1 cursor-pointer">
                          <input
                            checked={priority === 'low'}
                            onChange={() => setPriority('low')}
                            className="peer sr-only"
                            name="priority"
                            type="radio"
                            value="low"
                          />
                          <div className="text-center py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium peer-checked:bg-slate-100 peer-checked:border-slate-400 hover:bg-slate-50 transition-colors">
                            Low
                          </div>
                        </label>
                        <label className="flex-1 cursor-pointer">
                          <input
                            checked={priority === 'medium'}
                            onChange={() => setPriority('medium')}
                            className="peer sr-only"
                            name="priority"
                            type="radio"
                            value="medium"
                          />
                          <div className="text-center py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium peer-checked:bg-blue-50 peer-checked:border-blue-200 peer-checked:text-blue-700 hover:bg-slate-50 transition-colors">
                            Medium
                          </div>
                        </label>
                        <label className="flex-1 cursor-pointer">
                          <input
                            checked={priority === 'high'}
                            onChange={() => setPriority('high')}
                            className="peer sr-only"
                            name="priority"
                            type="radio"
                            value="high"
                          />
                          <div className="text-center py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium peer-checked:bg-red-50 peer-checked:border-red-200 peer-checked:text-red-700 hover:bg-slate-50 transition-colors">
                            High
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="lg:col-span-2 pt-4 border-t border-slate-100 flex justify-end gap-3 mt-4">
                    <button
                      className="px-6 h-11 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                      type="button"
                      onClick={onClose}
                    >
                      Reset Form
                    </button>
                    <button
                      className="px-8 h-11 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle form submission
                        onClose();
                      }}
                    >
                      Submit Request
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
