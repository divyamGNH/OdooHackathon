import { useState } from "react";

interface EquipmentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EquipmentFormModal({
  isOpen,
  onClose,
}: EquipmentFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/10">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop - Click to close */}
        <div
          className="fixed inset-0"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-white z-10">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  Equipment Details
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                View and manage asset specifications
              </p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="px-6 py-6 border-b border-gray-100 bg-gray-50/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <span className="material-symbols-outlined">build</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Maintenance
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    5
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Documents
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    12
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    History
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    28
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="px-6 py-6 space-y-8">
            {/* Basic Information */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900">
                <span className="material-symbols-outlined text-gray-400">
                  info
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Basic Information
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="equipment-name"
                  >
                    Equipment Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="equipment-name"
                      name="equipment-name"
                      placeholder="e.g., CNC Machine Model X"
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="serial-number"
                  >
                    Serial Number
                  </label>
                  <div className="mt-1">
                    <input
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="serial-number"
                      name="serial-number"
                      placeholder="SN-XXXX-XXX"
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="category"
                      name="category"
                    >
                      <option>Industrial Machinery</option>
                      <option>Vehicles</option>
                      <option>Electronics</option>
                      <option>Tools</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Equipment Tags
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Heavy Duty
                      <button
                        className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-xs">
                          close
                        </span>
                      </button>
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Factory A
                      <button
                        className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-xs">
                          close
                        </span>
                      </button>
                    </span>
                    <button
                      className="inline-flex items-center px-3 py-1 border border-dashed border-gray-300 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-400"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm mr-1">
                        add
                      </span>
                      Add Tag
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Ownership & Assignment */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900">
                <span className="material-symbols-outlined text-gray-400">
                  badge
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Ownership & Assignment
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="department"
                      name="department"
                    >
                      <option>Operations</option>
                      <option>Logistics</option>
                      <option>IT</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="assigned-to"
                  >
                    Assigned To
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="assigned-to"
                      name="assigned-to"
                    >
                      <option>Tom Cook</option>
                      <option>Wade Warren</option>
                      <option>Esther Howard</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Maintenance Details */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900">
                <span className="material-symbols-outlined text-gray-400">
                  home_repair_service
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Maintenance Details
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="maintenance-team"
                  >
                    Maintenance Team
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="maintenance-team"
                      name="maintenance-team"
                    >
                      <option>Mechanics</option>
                      <option>Electrical</option>
                      <option>HVAC</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="default-technician"
                  >
                    Default Technician
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="default-technician"
                      name="default-technician"
                    >
                      <option>Sarah Smith</option>
                      <option>Jenny Wilson</option>
                      <option>Cody Fisher</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-gray-400 text-lg">
                        location_on
                      </span>
                    </div>
                    <input
                      className="focus:ring-accent focus:border-accent block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="location"
                      name="location"
                      placeholder="Building-Floor-Room"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Purchase & Warranty */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900">
                <span className="material-symbols-outlined text-gray-400">
                  payments
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Purchase & Warranty
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="purchase-date"
                  >
                    Purchase Date
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-gray-400 text-lg">
                        calendar_today
                      </span>
                    </div>
                    <input
                      className="focus:ring-accent focus:border-accent block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="purchase-date"
                      name="purchase-date"
                      placeholder="YYYY-MM-DD"
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="purchase-cost"
                  >
                    Purchase Cost
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      className="focus:ring-accent focus:border-accent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="purchase-cost"
                      name="purchase-cost"
                      placeholder="0.00"
                      type="text"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">USD</span>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="warranty-expiry"
                  >
                    Warranty Expiry
                  </label>
                  <div className="mt-1">
                    <input
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="warranty-expiry"
                      name="warranty-expiry"
                      placeholder="YYYY-MM-DD"
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Warranty Status
                  </label>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                      Active
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="warranty-provider"
                  >
                    Warranty Provider
                  </label>
                  <div className="mt-1">
                    <input
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                      id="warranty-provider"
                      name="warranty-provider"
                      placeholder="Provider Name"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Additional Information */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900">
                <span className="material-symbols-outlined text-gray-400">
                  upload_file
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Additional Information
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="notes"
                  >
                    Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border border-gray-300 rounded-md p-2.5"
                      id="notes"
                      name="notes"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Attachments
                  </label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="space-y-1 text-center">
                      <span className="material-symbols-outlined text-gray-400 text-4xl">
                        cloud_upload
                      </span>
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          className="relative cursor-pointer rounded-md font-medium text-accent hover:text-blue-500 focus-within:outline-none"
                          htmlFor="file-upload"
                        >
                          <span>Upload a file</span>
                          <input
                            className="sr-only"
                            id="file-upload"
                            name="file-upload"
                            type="file"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border border-gray-200 rounded-md bg-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">
                        attach_file
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          invoice_2023.pdf
                        </p>
                        <p className="text-xs text-gray-500">2.4mb</p>
                      </div>
                    </div>
                    <a
                      className="text-sm font-medium text-accent hover:text-blue-500"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0">
            <button
              className="text-red-600 hover:text-red-800 font-medium text-sm focus:outline-none"
              type="button"
            >
              Delete
            </button>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                type="button"
              >
                Discard
              </button>
              <button
                className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                type="button"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
