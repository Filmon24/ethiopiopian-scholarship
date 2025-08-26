import Navbar from "../components/Navbar";
import mockRoadmap from "../data/roadmapUndergrad";
import RoadmapStep from "../components/RoadmapStep";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Undergraduate Roadmap 🗺️
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Follow this comprehensive guide to navigate your academic journey successfully.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Eligibility Criteria
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mockRoadmap.criteria.map((c, i) => (
              <li key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                <span className="text-green-500 mr-3">✓</span>
                {c.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Step-by-Step Process
          </h3>
          <div className="space-y-4">
            {mockRoadmap.steps.map((step) => (
              <RoadmapStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
