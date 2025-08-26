import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 shadow-lg border-b border-slate-600">
      <Link to="/dashboard" className="font-bold text-xl tracking-wide hover:text-blue-300 transition-colors duration-200">
        🎓 Scholarship Hub
      </Link>
      <div className="flex items-center space-x-6 ml-4">
        <Link to="/roadmap" className="hover:text-blue-300 transition-colors duration-200 font-medium">Roadmap</Link>
        <Link to="/scholarships" className="hover:text-blue-300 ml-4 transition-colors duration-200 font-medium">Scholarships</Link>
        <Link to="/support" className="hover:text-blue-300 ml-4 transition-colors duration-200 font-medium">Support</Link>
        <button
          onClick={logout}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
