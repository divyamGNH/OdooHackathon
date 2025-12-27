import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="px-6 py-4 border-b border-gray-700 bg-gray-800 text-white flex justify-between items-center">
      <Link
        to="/"
        className="text-lg font-bold tracking-tight uppercase text-white hover:text-gray-300 transition"
      >
        GearGuard – Maintenance Tracker
      </Link>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <div className="text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400 capitalize">{user.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
