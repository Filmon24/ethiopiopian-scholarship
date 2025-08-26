import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import scholarships from "../data/scholarships";

export default function ScholarshipDetail() {
  const { id } = useParams();
  const scholarship = scholarships.find((s) => s.id.toString() === id);

  if (!scholarship) return <p>Scholarship not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 leading-tight">
              {scholarship.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <span className="mr-2">📚</span>
                <span className="font-medium">{scholarship.level}</span>
              </div>
              <div className="flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full">
                <span className="mr-2">⏰</span>
                <span className="font-medium">Deadline: {scholarship.deadline}</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">About This Scholarship</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              This prestigious scholarship opportunity provides comprehensive support for students pursuing their academic goals. 
              The program is designed to recognize and reward exceptional academic achievement and potential.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Requirements</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-slate-600">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Excellent academic record with minimum GPA requirements
              </li>
              <li className="flex items-start text-slate-600">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Strong letters of recommendation from academic mentors
              </li>
              <li className="flex items-start text-slate-600">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Personal statement demonstrating academic goals and motivation
              </li>
              <li className="flex items-start text-slate-600">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Completed application form with all required documents
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Application Process</h3>
            <p className="text-slate-600 leading-relaxed">
              Submit your complete application package before the deadline. Ensure all documents are properly formatted 
              and meet the specified requirements. Applications will be reviewed by a committee of academic professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
