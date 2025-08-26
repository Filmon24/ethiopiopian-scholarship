const roadmapUndergrad = {
  criteria: [
    { label: "Minimum GPA 3.0" },
    { label: "Grade 12 exam score ≥ 75%" },
  ],
  steps: [
    {
      id: "transcript",
      name: "Get Official Transcript",
      description: "Request from your school registrar",
      mockFile: "/mock/transcript.pdf",
    },
    {
      id: "recommendations",
      name: "Collect Recommendation Letters",
      description: "Ask 2 teachers to complete letters",
      mockFile: "/mock/recommendation.pdf",
    },
    {
      id: "financial",
      name: "Prepare Financial Statement",
      description: "Get notarized financial need statement",
      mockFile: "/mock/financial.pdf",
    },
  ],
};

export default roadmapUndergrad;
