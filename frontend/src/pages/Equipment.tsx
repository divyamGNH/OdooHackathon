import { useEffect, useState } from "react";
import api from "../utils/api";
import Header from "../components/Header";
import AddEquipmentModal from "../components/AddEquipmentModal";

interface Equipment {
  _id: string;
  name: string;
  serialNumber: string;
  maintenanceTeamId: {
    _id: string;
    name: string;
  };
}

interface Team {
  _id: string;
  name: string;
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchEquipment = async () => {
    try {
      const res = await api.get("/equipment");
      setEquipment(res.data);
    } catch (err) {
      console.error("Failed to fetch equipment", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeams = async () => {
    try {
      const res = await api.get("/teams");
      setTeams(res.data);
    } catch (err) {
      console.error("Failed to fetch teams", err);
    }
  };

  useEffect(() => {
    fetchEquipment();
    fetchTeams();
  }, []);

  const handleAddEquipment = () => {
    fetchEquipment();
  };

  // Group equipment by team
  const groupedByTeam: Record<string, Equipment[]> = {};
  equipment.forEach((eq) => {
    const teamName = eq.maintenanceTeamId?.name || "Unassigned";
    if (!groupedByTeam[teamName]) {
      groupedByTeam[teamName] = [];
    }
    groupedByTeam[teamName].push(eq);
  });

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Loading equipment...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 px-6 py-6">
        {/* Page header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Equipment</h3>
            <p className="text-sm text-gray-500">
              Overview of all registered equipment by maintenance team
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
          >
            + Add Equipment
          </button>
        </div>

        {/* Teams */}
        <div className="space-y-6">
          {Object.entries(groupedByTeam).map(([teamName, equipmentList]) => (
            <div
              key={teamName}
              className="bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              {/* Team header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <h4 className="text-sm font-semibold text-gray-700 uppercase">
                  {teamName}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {equipmentList.length} equipment
                </p>
              </div>

              {/* Equipment list */}
              <div className="divide-y divide-gray-200">
                {equipmentList.map((eq) => (
                  <div
                    key={eq._id}
                    className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    {/* Left info */}
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {eq.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Serial: {eq.serialNumber}
                      </p>
                    </div>

                    {/* Action */}
                    <button className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Empty state */}
          {Object.keys(groupedByTeam).length === 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No equipment found</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Equipment Modal */}
      {showAddModal && (
        <AddEquipmentModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddEquipment}
          teams={teams}
        />
      )}
    </>
  );
}
