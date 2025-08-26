const roadmapMasters = {
  criteria: [
    { label: "Bachelor’s degree with GPA ≥ 2.75" },
    { label: "English proficiency (IELTS/TOEFL or exemption)" },
  ],
  steps: [
    {
      id: "transcript",
      name: "Upload Bachelor’s Transcript",
      description: "Request from your university registrar",
      mockFile: "/mock/masters_transcript.pdf",
    },
    {
      id: "proposal",
      name: "Research Proposal",
      description: "Prepare a research topic outline",
      mockFile: "/mock/proposal.pdf",
    },
  ],
};

export default roadmapMasters;
