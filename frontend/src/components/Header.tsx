import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-6 py-4 border-b border-gray-700 bg-white">
      <Link
        to="/"
        className="text-lg font-bold tracking-tight uppercase text-gray-900 hover:text-gray-700 transition"
      >
        GearGuard
      </Link>
    </div>
  );
}
