import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"; // Import the Link component

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Welcome to your Dashboard 🎓
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose from the navigation menu above to explore Roadmap, Scholarships, or Support options.
            Your academic journey starts here!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Roadmap Card */}
          <Link to="/roadmap"> {/* Wrap the card with a Link component */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Roadmap</h3>
              <p className="text-slate-600">Step-by-step guide to your academic journey</p>
            </div>
          </Link>
          
          {/* Scholarships Card */}
          <Link to="/scholarships"> {/* Wrap the card with a Link component */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Scholarships</h3>
              <p className="text-slate-600">Discover available scholarship opportunities</p>
            </div>
          </Link>
          
          {/* Support Card */}
          <Link to="/support"> {/* Wrap the card with a Link component */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Support</h3>
              <p className="text-slate-600">Get help and mentorship guidance</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}