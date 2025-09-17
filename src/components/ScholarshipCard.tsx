import { Link } from "react-router-dom";

type Scholarship = {
  id: number;
  title: string;
  deadline: string;
  level: string;
};

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
      <div className="mb-4">
        <h3 className="font-bold text-xl text-slate-800 mb-3 leading-tight">
          {scholarship.title}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-slate-600">
            <span className="text-blue-600 mr-2">📚</span>
            <span className="font-medium">Level:</span>
            <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
              {scholarship.level}
            </span>
          </div>
          <div className="flex items-center text-slate-600">
            <span className="text-red-500 mr-2">⏰</span>
            <span className="font-medium">Deadline:</span>
            <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium">
              {scholarship.deadline}
            </span>
          </div>
        </div>
      </div>
      
      <Link
        to={`/scholarships/${scholarship.id}`}
        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm"
      >
        View Details →
      </Link>
    </div>
  );
}