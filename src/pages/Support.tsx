import Navbar from "../components/Navbar";
import mentors from "../data/mentors";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Support & Mentorship 🤝
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect with experienced mentors and get the guidance you need for your academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <div key={m.id} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  {m.name.charAt(0)}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{m.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{m.role}</p>
                <p className="text-slate-600 text-sm flex items-center justify-center">
                  <span className="mr-2">📍</span>
                  {m.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
