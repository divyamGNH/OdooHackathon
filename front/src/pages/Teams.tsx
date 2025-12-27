import React, { useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  subtitleColor?: string;
  subtitleIcon?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  subtitleColor = 'text-[#626c84]',
  subtitleIcon,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#eaecf0] shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-6xl text-primary">{icon}</span>
      </div>
      <p className="text-[#626c84] font-medium text-sm relative z-10">{title}</p>
      <div className="relative z-10">
        <p className="text-3xl font-bold text-primary">{value}</p>
        <p className={`${subtitleColor} text-sm font-medium mt-1 flex items-center gap-1`}>
          {subtitleIcon && <span className="material-symbols-outlined text-sm">{subtitleIcon}</span>}
          {subtitle}
        </p>
      </div>
    </div>
  );
};

interface TeamData {
  name: string;
  category: string;
  description: string;
  requestCount: number;
  requestStatus: 'low' | 'medium' | 'high' | 'none';
  iconBg: string;
  icon: string;
  members: string[];
  additionalMembers: number;
  availableCount: number;
  availability: 'available' | 'busy';
  avgResponse: string;
}

const teamsData: TeamData[] = [
  {
    name: 'Mechanics',
    category: 'Heavy Machinery',
    description: 'Responsible for maintaining fleet vehicles, hydraulic presses, and conveyor belt systems.',
    requestCount: 4,
    requestStatus: 'high',
    iconBg: 'bg-orange-100 text-orange-600',
    icon: 'handyman',
    members: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDY23CH1E4VoW0Gq1VTscIvcTdgnsiXf85_4PFZFpy7yY8y2v5UImK96CKhRMQiTPlOYumJTiWyLVkLxIbeec3q6p0BS0kcj4p4wjEUKPHmicrjoWz-DxjdwdeuSUcgeYqdSXNXVcKhPIK9Uf23OPzG9exKfQEGF9YQekc_Q-GOBBan8ox-bWemiuPgWx-qSJ_PZmFSsTBWO3mM4YfukXC5Y-2jJ93FSAZUOxsQIpqe2duhHFqLTaE2LHFsaCaiLx3MrnXt1pxxZSHf',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvSQ0X5JcDYqUK118Apq3oCoC30Y8Ibpmja8XZXJWDPnQhkVXyRNNXMgGCWSB7QDR_56JMsn8ZXwmpyHfgX7h9fwarc4_tR_-mqLVuhjXm7DXtVLShfpXzUkr4t6K1TPUpFcZ_qeWsr-9gb6l7EAZEMwf4rEB9afZS7HSFpcJBIO-uEJbeDDi2fnZzd33uSAo3v-3Scx0dynY5bozTdO6LEY2tDkdx309zu48S2NtrzLo6Y4xK1oDFUuKXpjytbfbkF2PqJ7YypL2W',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARB3t6O2qflS1cuxImhtCrh8JBYjHQz6CA7S94Hr9WvfkT13alP6YFVAR5GaTCF73mIyDCY2u8zWoj_slGewG6lRgu8Zvh2qwbB3Vq9FH-FSibXgamnpHFQn7khGHhgtpXnC4opPE01rMw85r8VqN8GbBptryke2t4U6ry7NmXlfNkX4NvN9e0bqz4TjtYJJ6dYNgLEI3ZkYbGJf-rMEoL-OEaf9jsHgsfAn8YqbwfV9192nE3SSuXxoX8nurcfz2pDiWzh5wzLW0X',
    ],
    additionalMembers: 2,
    availableCount: 3,
    availability: 'available',
    avgResponse: '12m',
  },
  {
    name: 'IT Support',
    category: 'Network & Systems',
    description: 'Handling server maintenance, IoT sensor connectivity, and workstation troubleshooting.',
    requestCount: 1,
    requestStatus: 'medium',
    iconBg: 'bg-indigo-100 text-indigo-600',
    icon: 'dns',
    members: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3PzpRED-irukdCwqFT0yLO0FOVT5_NZo6hSUhG1CChixq7Oh3_Trmt-zCrooHo8wZGHdEqRXTukJIPR8H7j3qrFyha0eN7DWA_F7c0CD_-d_xawNJwTeErXo6JKsxFCoK66Fw0pyzMccHQZQCKcQU0eLQMSOjASYSw22WRKjS4T0cVSmZ3UjLWuG-8-AmWvTqrfz-McMdcX5DWI8hIYlTNmxlz5JW3eocEk1mjBdzoef_aQFYt_TmJzgy05js86bv4DthMe3-bhX',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPrYtZieYTLphzx9BXprTNqWriIN1tji8AKcEHfeJD7bEVqM9ENhJBY8Y63T1nnJB_MDDSvzUUEg5kwvjBMPc3364C9aQ7_c6IrDgqRPWSOR76YFKwSNyzqLx3BxDGX29moUZz-JhoooqDsOHrd7SL8u5GdSsrkknpm9Ufq8UGVcWOAeI2M7aaxgH3joSiahKnvCATJnTPYBxlnFk9XPy7SHZgI14v_s_9kzckixNbK4wucpZfrL8EsFaj6BxurpkXNAJWEKoYPLCH',
    ],
    additionalMembers: 0,
    availableCount: 2,
    availability: 'available',
    avgResponse: '4m',
  },
  {
    name: 'Facility Ops',
    category: 'General Maintenance',
    description: 'HVAC repair, lighting replacement, and general facility upkeep tasks.',
    requestCount: 12,
    requestStatus: 'high',
    iconBg: 'bg-teal-100 text-teal-600',
    icon: 'cleaning_services',
    members: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsKjuooBNeNX3th2v7ZXgBDWeKohWi6UwZEDhNgNuDgHKdMLAkIZjfgItM19aOb8HmGuc_AwNv7GEZWAyZ7E9gd-DWetZsL-knkcdISs7j4qLljrm0IgWK4S-HgdopkV05k40ZXk4i8ApeCdx2Hqku6qNfHRQEkBOhQKnRNDgB4Etznc5HRz9-j7A5uJHpiLvnUqgnUxtQH0J-OXpUFjtgwxFHwTFMiDvuxPbbJGtcZ6a0XXWdIdYw0-Ns5RtiwyPD5Z67GGPxUHzM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAls0HdX_eH-GTqBo-UzafeeVgPfumj3s9Lu2ZjYYAEGNB24ojRsWF-Px4Pqqap_-lJt9la-h9UbsDHPDCEy5E0ncsrwUC7-nwfTd_0dP6wKLYndJ0K9NlzCy15eODJwA11NforpyAG1feKu3L9I64ufI9aqI4vmmGMCPS_bYHpOvGpG8eqhb3Ky-N6MqtCeC2Nh6og0L0j0o90PBaHvmwTS-W-sLWfQa4NfHbJiK56RWxecsZIxt4OJWYuPXqRxYYmI2zVIpOP-LE-',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK81s788TxLmCmegHAEPReHi90uVkDQVTDREvU7_T326-vLYEr3ZjjzOj-2YdyzENSdwfom5qYH59VpsBON8RsagNZYy1Dl-tcBn5Qf8VM4XLcDLiDSC-TPs8lejFL8QxLxsBICcEIIc0YpoCsc_ZAG78Zh4n1GhyJnkSwONPBxoofom81ot4JTh2cR-vMv7OxdDRLR29Jx1RuG1_ejWgaOY6TD3wCgOaNyrK59MmPkvN-UfcV0myB8PKCEfiluYV7iBEO6dYkKmh8',
    ],
    additionalMembers: 5,
    availableCount: 0,
    availability: 'busy',
    avgResponse: '28m',
  },
  {
    name: 'Electrical',
    category: 'High Voltage',
    description: 'Power grid maintenance, generator testing, and circuit compliance checks.',
    requestCount: 0,
    requestStatus: 'low',
    iconBg: 'bg-yellow-100 text-yellow-600',
    icon: 'bolt',
    members: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuQD1EIJeyyUb0Irt8ptON5UKAY40S4Iihu-h3_YH7WvVvtgQlg32EoI8pWZfxq7BpxnxIfA33raeI0kNGqlXV4zdk3YsIO8CJR7beu9XfVxgR-4eNlYnikcr8BWwwkhWN5TazmF2Dk0wfMFV_R43PMjBVtkfXPFnCIJ5Rta1ecssegEJUBN1AS9gq7vWQbE7rCRxmnf5V_f1QUGbieWH7ww5-eFJuPOammH-qF38mlFTIhalEhx9KBKQ3lLy39_5P52qooI6IJ2Xn',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHQF5qtAk-4UUQLHe-Np9l93PL3O_5NtugZ0wtD9N721tFOiv_bmIxClYlE7qvCxmHWU1qO_0rWv0YvcYlITDuyf-dD6kaFGqVlYrZxQXCdzXQL2bYvPyHPVBL8b7bdUheZqMOFrggoOIXzeXZo6r7IcOaEbocfNebsfP5Mwikv5rEXhyqN3sQSG1VOOknGeWz7xcVhMqBJMOCVGjAXNJBGHBZc4wcVZC8naxA_Dg1VEp5ZOvmrsI7ODPAdgob4Gs6U_VZnhVAXaVN',
    ],
    additionalMembers: 0,
    availableCount: 2,
    availability: 'available',
    avgResponse: '8m',
  },
];

export const Teams: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getRequestBadgeColor = (status: string) => {
    switch (status) {
      case 'low':
        return 'bg-gray-100 text-[#626c84]';
      case 'medium':
        return 'bg-green-50 text-green-700';
      case 'high':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-red-50 text-red-700';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    return availability === 'available' ? 'bg-accent-green' : 'bg-red-500';
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light">
      {/* Header */}
      <div className="flex-none px-8 py-4 border-b border-[#eaecf0] bg-white flex items-center justify-between">
        <h2 className="text-primary text-lg font-bold">Teams Overview</h2>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center relative h-10 w-64">
            <span className="material-symbols-outlined absolute left-3 text-[#98a2b3]">search</span>
            <input
              className="w-full h-full pl-10 pr-4 rounded-xl bg-background-light border-none text-sm text-primary placeholder-[#98a2b3] focus:ring-2 focus:ring-primary/20"
              placeholder="Search teams or technicians..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 h-10 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="hidden sm:inline">Create New Team</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Page Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-primary tracking-tight">Maintenance Teams</h1>
            <p className="text-[#626c84] max-w-2xl">
              Overview of all operational units. Monitor active requests, workforce distribution, and real-time availability.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Teams"
              value="8"
              subtitle="+1 new"
              icon="groups"
              subtitleColor="text-accent-green"
              subtitleIcon="trending_up"
            />
            <StatCard
              title="Total Technicians"
              value="42"
              subtitle="Across 3 shifts"
              icon="engineering"
            />
            <StatCard
              title="Active Requests"
              value="15"
              subtitle="3 critical"
              icon="assignment_late"
              subtitleColor="text-[#ef4444]"
              subtitleIcon="priority_high"
            />
            <div className="bg-white p-5 rounded-xl border border-[#eaecf0] shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
              </div>
              <p className="text-[#626c84] font-medium text-sm relative z-10">Technicians Available</p>
              <div className="relative z-10">
                <p className="text-3xl font-bold text-primary">27</p>
                <div className="w-full bg-[#eaecf0] rounded-full h-1.5 mt-3">
                  <div className="bg-accent-green h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-12">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#eaecf0] shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-lg ${team.iconBg} flex items-center justify-center`}>
                        <span className="material-symbols-outlined">{team.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-lg leading-tight">{team.name}</h3>
                        <p className="text-xs text-[#626c84]">{team.category}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${getRequestBadgeColor(
                        team.requestStatus
                      )}`}
                    >
                      {team.requestCount} {team.requestCount === 1 ? 'Request' : 'Requests'}
                    </span>
                  </div>

                  <p className="text-sm text-[#626c84] mb-6 line-clamp-2">{team.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex -space-x-2">
                      {team.members.map((memberImg, idx) => (
                        <div
                          key={idx}
                          className="size-8 rounded-full border-2 border-white bg-cover bg-center"
                          style={{ backgroundImage: `url('${memberImg}')` }}
                          title="Team Member"
                        ></div>
                      ))}
                      {team.additionalMembers > 0 && (
                        <div className="size-8 rounded-full border-2 border-white bg-[#eaecf0] flex items-center justify-center text-xs font-medium text-[#626c84]">
                          +{team.additionalMembers}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`flex size-2 rounded-full ${getAvailabilityColor(team.availability)}`}></span>
                      <span className="text-xs font-medium text-[#626c84]">
                        {team.availability === 'available' ? `${team.availableCount} Available` : 'Busy'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 border-t border-[#eaecf0] bg-[#fcfcfd] rounded-b-xl flex justify-between items-center">
                  <span className="text-xs text-[#626c84] font-medium">Avg. Response: {team.avgResponse}</span>
                  <span className="material-symbols-outlined text-[#98a2b3] text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
