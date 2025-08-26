type Step = {
  id: string;
  name: string;
  description: string;
  mockFile?: string;
};

export default function RoadmapStep({ step }: { step: Step }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-lg text-slate-800 mb-2">{step.name}</h4>
          <p className="text-slate-600 leading-relaxed">{step.description}</p>
        </div>
        {step.mockFile && (
          <a
            href={step.mockFile}
            target="_blank"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm whitespace-nowrap"
          >
            View Sample →
          </a>
        )}
      </div>
    </div>
  );
}
