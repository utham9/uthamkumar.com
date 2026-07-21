// All page content, résumé-derived and static. Mirrors the prototype's renderVals().
// PRIVACY: the current employer's real name is intentionally withheld — shown as
// "A leading retail bank (current)". Keep it withheld unless Utham says otherwise.

export type NavItem = { id: string; label: string; idx: string; href: string };

export const nav: NavItem[] = [
  { id: "home", label: "Home", idx: "00", href: "/" },
  { id: "about", label: "About", idx: "01", href: "/about" },
  { id: "projects", label: "Projects", idx: "02", href: "/projects" },
  { id: "experience", label: "Experience", idx: "03", href: "/experience" },
  { id: "skills", label: "Skills", idx: "04", href: "/skills" },
  { id: "brainwaves", label: "Brainwaves", idx: "05", href: "/brainwaves" },
  { id: "syndicate", label: "Syndicate", idx: "06", href: "/syndicate" },
  { id: "contact", label: "Contact", idx: "07", href: "/contact" },
];

// ---- Home ----
export const stats = [
  { n: "14+", l: "Years engineering" },
  { n: "25+", l: "Engineers led" },
  { n: "40%", l: "Faster cycles" },
  { n: "70%", l: "Fewer deps" },
];

export const coreStack = [
  "LangGraph", "RAG", "OpenAI API", "Gemini", "Claude Code", "Python", "Java",
  "Playwright", "Selenium", "Appium", "Jenkins", "Docker", "AWS", "Grafana",
];

// ---- About ----
export const aboutParagraphs = [
  "Engineering leader with 14+ years designing scalable test-automation platforms adopted across teams and business units. I pioneered the transition from traditional QA to AI-augmented quality ecosystems — stateful multi-agent systems built with LangGraph and context-aware RAG agents that agentify SDLC testing: autonomous test generation, execution validation and edge-case discovery.",
  "I stay hands-on with LLM integrations and AI coding copilots combined with Selenium, Playwright and Appium to build self-healing automation, wired into CI/CD quality gates and observability dashboards. I mentor a 25+ engineer organisation and drive cross-functional initiatives across regions.",
];

export const competencies = [
  "Agentic systems & orchestration (LangGraph)",
  "LLM integrations (OpenAI, Gemini, Claude)",
  "RAG architectures",
  "Prompt engineering for agents",
  "AI-driven test automation & coverage",
  "Validation of AI-generated code",
  "CI/CD & DevOps automation",
  "Scalable platform & framework design",
  "Observability & metrics",
  "Service virtualization & API mocking",
  "Cloud (AWS, Docker)",
  "Technical mentorship & leadership",
];

export const achievements = [
  "Reduced regression cycle time 40% and build verification 75% via AI-augmented automation, parallel execution and custom Jenkins CI — a 3x reduction in testing effort.",
  "Cut external service dependencies 70% with a reusable Java-based API mocking framework adopted across teams.",
  "Revamped risk identification and escalation, reducing incident resolution time 30%.",
  "SPOT Award for Test Architect (HPE) · METS Star Performer (Capgemini) · Best Individual Contributor (Wipro).",
];

export const education = [
  { title: "B.E. Electronics & Instrumentation", org: "Sathyabama University, Chennai", year: "2009" },
  { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "Cert" },
  { title: "CRISC — Risk & Information Systems Control", org: "ISACA", year: "Cert" },
  { title: "CA Accredited Service Virtualization Associate", org: "LISA / DevTest", year: "Cert" },
  { title: "Accelerating Change Readiness & Agility", org: "UC Berkeley Executive Education", year: "Exec Ed" },
];

// ---- Projects ----
export const projects = [
  {
    metric: "−40% CYCLE TIME",
    title: "LangGraph Multi-Agent Test Platform",
    body: "Stateful multi-agent system that agentifies SDLC testing for enterprise retail banking — autonomous generation, execution validation and edge-case discovery.",
    stack: ["LangGraph", "Claude", "Playwright", "Appium"],
  },
  {
    metric: "SELF-HEALING",
    title: "Context-Aware RAG Test Generation",
    body: "RAG agents ingest PRDs, docs and code schemas to auto-generate production-grade, self-healing test scripts, with validation on all AI-generated assets.",
    stack: ["RAG", "OpenAI", "Gemini", "Java"],
  },
  {
    metric: "−70% DEPENDENCIES",
    title: "Java API Mocking & Data Virtualization",
    body: "Reusable Java mocking and data-virtualization framework adopted across teams, cutting third-party dependencies and speeding up test turnaround.",
    stack: ["Java", "Virtualization", "REST", "IBM MQ"],
  },
  {
    metric: "−75% VERIFY TIME",
    title: "Automated Quality Gates & Observability",
    body: "CI/CD quality gates flag regressions early, wired to Grafana / ReportPortal.io / Jira-Zephyr dashboards for measurable engineering impact.",
    stack: ["Jenkins", "Docker", "Grafana", "CI/CD"],
  },
];

// ---- Experience ----
// The first role's employer name is intentionally withheld (see PRIVACY note above).
export const experience = [
  {
    role: "Vice President, Quality Engineering",
    org: "A leading retail bank (current)",
    place: "Retail banking platforms — Web, Android, iOS",
    dates: "Aug 2018 – Present",
    bullets: [
      "Architected a stateful multi-agent test-automation platform with LangGraph, agentifying core SDLC testing — autonomous script generation, execution validation and edge-case discovery.",
      "Engineered context-aware RAG agents that ingest PRDs, docs and code schemas to auto-generate self-healing test scripts.",
      "Integrated LLMs (Gemini, Claude/Sonnet, OpenAI API) with Selenium, Playwright and Appium — cutting testing cycle time by 40%.",
      "Drove adoption of AI-augmented workflows across a 25+ engineer org; set coding standards, patterns and reviews.",
      "Embedded automated quality gates into CI/CD; automated Android/iOS build verification, reducing verification time by 75%.",
      "Built observability — Grafana, ReportPortal.io, Jira/Zephyr — for metrics-based decisions on automation effectiveness.",
    ],
  },
  {
    role: "Specialist",
    org: "DXC Technology (formerly HPE) — American Airlines",
    place: "Bangalore / Dallas",
    dates: "Sep 2016 – Jul 2018",
    bullets: [
      "Built a test-automation framework with CA DevTest and Java covering web UI and web services.",
      "Automated the execution environment with Docker and GitHub on IBM Bluemix.",
      "Designed virtual services for REST, IBM MQ and RabbitMQ for stress and performance testing at scale.",
      "Implemented Node.js/SoapUI mocking, cutting external dependencies and wiring virtualization into CI/CD.",
    ],
  },
  {
    role: "Senior Analyst",
    org: "Accenture — JP Morgan & Chase",
    place: "Bangalore / Bournemouth, UK",
    dates: "Jan 2014 – Sep 2016",
    bullets: [
      "Developed a Selenium + TestNG page-object framework, improving maintainability and execution efficiency.",
      "Implemented BDD with Java/Cucumber integrated with IBM MQ Series.",
      "Created a CA LISA + MySQL data-virtualization solution across parallel workstreams; mentored juniors.",
    ],
  },
  {
    role: "Associate Consultant",
    org: "Capgemini India — ANZ",
    place: "Bangalore",
    dates: "Oct 2012 – Jan 2014",
    bullets: [
      "Built a SOA test solution with LISA Test and service virtualization for complex orchestration.",
      "Scaled virtual services (REST, TCP/IP) for performance and volume testing under high load.",
    ],
  },
  {
    role: "Project Engineer",
    org: "Wipro Technologies — Wal-Mart E-Commerce",
    place: "Bangalore",
    dates: "Mar 2010 – Sep 2012",
    bullets: [
      "Developed a no-code SOA testing solution for TIBCO BW interfaces using iTKO LISA.",
      "Tested JMS/EDI messages for order fulfilment with full traceability in Quality Center.",
    ],
  },
];

// ---- Skills ----
export const skillGroups = [
  { name: "GenAI / Agentic AI", items: ["LangGraph", "RAG architectures", "OpenAI API", "Gemini", "Claude Code", "Prompt engineering", "Self-healing agents"] },
  { name: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript"] },
  { name: "Test Automation", items: ["Playwright", "Selenium", "Appium", "WebDriver.io", "RestAssured", "Karate", "Cucumber", "TestNG"] },
  { name: "DevOps / Cloud / SDLC", items: ["Jenkins", "Docker", "GitHub", "CI/CD", "AWS", "Selenium Grid"] },
  { name: "APIs & Messaging", items: ["REST", "IBM MQ", "RabbitMQ", "TIBCO BW", "JMS", "SOA"] },
  { name: "Service Virtualization", items: ["CA LISA / DevTest", "SoapUI", "Node.js mocking", "Data virtualization"] },
  { name: "Observability & Reporting", items: ["Grafana", "ReportPortal.io", "Extent Reports", "Jira", "Zephyr"] },
  { name: "Certifications", items: ["AWS Cloud Practitioner", "CRISC (ISACA)", "CA LISA/DevTest", "UC Berkeley Exec Ed"] },
];

// ---- Brainwaves (blog) ----
// Post list + full essays live in src/lib/blog.ts (rendered at /brainwaves/<slug>).

export const codeSnippet = `graph = StateGraph(TestState)
graph.add_node("generate", rag_generate)
graph.add_node("validate", execute_and_heal)
graph.add_edge("generate", "validate")
agent = graph.compile()`;

// ---- Syndicate ----
// TODO: Placeholder testimonials — replace with real, attributed endorsements.
export const testimonials = [
  { quote: "Utham reframed how our teams think about quality — from writing tests to orchestrating agents that write and heal them.", name: "Engineering Director", role: "Retail Banking Technology" },
  { quote: "A rare leader — deeply hands-on with LLM tooling and able to scale it across a large organisation.", name: "Senior QE Manager", role: "Peer" },
];
