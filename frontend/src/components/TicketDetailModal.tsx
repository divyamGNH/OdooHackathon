import type { Ticket } from "../types";

interface TicketDetailModalProps {
  ticket: Ticket;
  onClose: () => void;
  onDelete: (id: string) => void;
  onEdit: (ticket: Ticket) => void;
}

export default function TicketDetailModal({
  ticket,
  onClose,
  onDelete,
  onEdit,
}: TicketDetailModalProps) {
  const handleDelete = () => {
    if (
      confirm(`Are you sure you want to delete ticket "${ticket.subject}"?`)
    ) {
      onDelete(ticket._id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-800">Ticket Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Subject */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Subject
            </label>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              {ticket.subject}
            </p>
          </div>

          {/* Status & Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Status
              </label>
              <p className="text-sm text-gray-800 mt-1 capitalize">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    ticket.status === "New"
                      ? "bg-blue-100 text-blue-700"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : ticket.status === "Repaired"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Type
              </label>
              <p className="text-sm text-gray-800 mt-1">{ticket.type}</p>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Equipment
              </label>
              <p className="text-sm text-gray-800 mt-1">
                {ticket.equipmentName}
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Category
              </label>
              <p className="text-sm text-gray-800 mt-1">{ticket.category}</p>
            </div>
          </div>

          {/* Team */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Assigned Team
            </label>
            <p className="text-sm text-gray-800 mt-1">{ticket.team}</p>
          </div>

          {/* Equipment ID */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Equipment ID
            </label>
            <p className="text-sm text-gray-600 mt-1 font-mono">
              {ticket.equipmentId}
            </p>
          </div>

          {/* Created Date */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Created At
            </label>
            <p className="text-sm text-gray-800 mt-1">
              {new Date(ticket.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(ticket)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
          >
            Edit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
