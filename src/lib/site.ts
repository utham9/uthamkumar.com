// Central profile / contact constants (résumé-derived, static).
// Single source of truth for links used across the terminal, syndicate and footer.

export const site = {
  name: "Utham Kumar N S",
  moniker: "Utham Kumar",
  role: "// LEAD_ARCHITECT.QUALITY_ENGINEERING",
  location: "HYDERABAD · IN",
  domain: "uthamkumar.com",
  domainLabel: "UTHAMKUMAR.COM",
  status: "Status: Available for Q3 2026",
  bio:
    "Quality Engineering leader with 14+ years architecting scalable test-automation platforms. " +
    "Building AI-augmented, agentic quality ecosystems — LangGraph multi-agent systems, RAG agents " +
    "and self-healing automation bridging raw compute and release velocity.",

  email: "uthamkmr@gmail.com",
  phone: "+91 99729 74000",
  pgp: "9F2A 4C71 D3E8 6B05 · uthamkumar.com",

  github: "https://github.com/utham9",
  githubHandle: "github.com/utham9",
  linkedin: "https://www.linkedin.com/in/uthamkmr",
  linkedinHandle: "linkedin.com/in/uthamkmr",

  // TODO: Replace with the exact Topmate profile URL once confirmed with Utham.
  topmate: "https://topmate.io/",
  // TODO: Replace with the exact Freelancer profile URL once confirmed with Utham.
  freelancer: "https://www.freelancer.com/",

  // Static asset. Currently wired to the résumé PDF committed at project root
  // (copied into /public). TODO: swap for the final résumé export when supplied.
  resumePdf: "/uthamkumar-resume.pdf",
} as const;
