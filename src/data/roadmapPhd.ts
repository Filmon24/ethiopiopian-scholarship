const roadmapPhd = {
  criteria: [
    { label: "Masters degree with GPA ≥ 3.0" },
    { label: "Research proposal submission" },
  ],
  steps: [
    {
      id: "transcript",
      name: "Upload Masters Transcript",
      description: "Get official transcript from registrar",
      mockFile: "/mock/phd_transcript.pdf",
    },
    {
      id: "proposal",
      name: "Detailed Research Proposal",
      description: "Submit full proposal to department",
      mockFile: "/mock/phd_proposal.pdf",
    },
  ],
};

export default roadmapPhd;
