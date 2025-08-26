import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Scholarship Roadmap
          <span className="block text-4xl text-blue-700 mt-2">Ethiopia</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Your comprehensive step-by-step guide to scholarships, documents, and mentorship opportunities.
          Navigate your academic journey with confidence and clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/login"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg min-w-[160px]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-blue-700 rounded-xl shadow-lg hover:bg-slate-50 transition-all duration-200 font-semibold text-lg border-2 border-blue-200 min-w-[160px]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
