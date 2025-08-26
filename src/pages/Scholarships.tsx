import Navbar from "../components/Navbar";
import scholarships from "../data/scholarships";
import ScholarshipCard from "../components/ScholarshipCard";

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Available Scholarships 🎯
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover scholarship opportunities that match your academic goals and eligibility criteria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((s) => (
            <ScholarshipCard key={s.id} scholarship={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
