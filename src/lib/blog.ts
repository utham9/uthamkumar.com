// Brainwaves — blog posts. Each post renders at /brainwaves/<slug>.
// TODO: These are sample essays wired end-to-end so the section is fully
// functional. Replace the body copy with Utham's final published essays.

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "code"; file: string; code: string };

export type Post = {
  slug: string;
  date: string; // YYYY-MM-DD
  title: string;
  tag: string;
  read: string; // e.g. "5 min"
  excerpt: string;
  body: PostBlock[];
};

export const blogPosts: Post[] = [
  {
    slug: "agentifying-the-sdlc",
    date: "2026-03-14",
    title: "Agentifying the SDLC",
    tag: "Agentic AI",
    read: "6 min",
    excerpt:
      "Moving quality from writing tests to orchestrating agents that write, run and heal them.",
    body: [
      {
        type: "p",
        text: "For two decades the unit of quality engineering was the test script — something a human wrote, maintained, and eventually deleted when it became too brittle to trust. That model doesn't scale to the release cadence modern platforms demand. The bottleneck was never execution; it was authorship. So we moved the authorship into agents.",
      },
      { type: "h", text: "From scripts to state machines" },
      {
        type: "p",
        text: "Instead of a linear script, each test flow is modelled as a stateful graph. Nodes generate candidate steps, execute them against the app, and decide whether to advance, retry, or heal. LangGraph gives us durable state between those nodes, so an agent can reason about what it just observed rather than replaying a fixed sequence.",
      },
      {
        type: "code",
        file: "agent_loop.py",
        code: `graph = StateGraph(TestState)
graph.add_node("generate", rag_generate)
graph.add_node("validate", execute_and_heal)
graph.add_edge("generate", "validate")
agent = graph.compile()`,
      },
      { type: "h", text: "The generate → validate → heal loop" },
      {
        type: "p",
        text: "The generate node drafts a step from grounded context — a PRD, a design doc, a code schema. The validate node runs it and inspects the result. When a selector drifts or a screen changes, the heal node proposes a fix and feeds it back into state rather than failing the run. Flakiness stops being a human triage problem and becomes a step the graph handles on its own.",
      },
      { type: "h", text: "What changed in practice" },
      {
        type: "p",
        text: "Across a 25+ engineer organisation this cut regression cycle time by roughly 40% and build-verification time by 75%. But the more durable win is cultural: engineers spend their time defining what \"correct\" means and reviewing agent behaviour, not hand-patching XPaths at 2am.",
      },
      {
        type: "p",
        text: "Agentifying the SDLC isn't about removing engineers from the loop. It's about moving them up a level — from authoring steps to orchestrating the systems that author them.",
      },
    ],
  },
  {
    slug: "rag-for-qa-prds-to-test-scripts",
    date: "2026-02-02",
    title: "RAG for QA: PRDs → Test Scripts",
    tag: "RAG",
    read: "5 min",
    excerpt:
      "Grounding test generation in the same documents humans read — PRDs, API schemas and design docs.",
    body: [
      {
        type: "p",
        text: "An LLM asked to \"write tests for the payments screen\" will happily invent plausible-looking steps that have nothing to do with your actual product. The fix is the same one that works everywhere else: don't ask the model to remember, give it the source of truth to read.",
      },
      { type: "h", text: "Grounding the agent" },
      {
        type: "p",
        text: "We index the artefacts engineers already write — product requirement docs, OpenAPI schemas, component contracts and past defects — into a vector store. Before generating a single step, the agent retrieves the passages relevant to the flow under test and conditions on them. The result is a script grounded in this release, not in the model's training data.",
      },
      {
        type: "code",
        file: "retriever.py",
        code: `context = retriever.search(
    query=f"acceptance criteria for {flow}",
    k=8,
)
steps = generate_test(flow, context=context)`,
      },
      { type: "h", text: "Self-healing selectors" },
      {
        type: "p",
        text: "Grounding also makes healing far more reliable. When a locator breaks, the agent re-retrieves the current DOM and the component contract, then reconciles the two. Because it reasons over the real structure instead of guessing, the proposed fix usually holds — and every heal is logged for a human to confirm or reject.",
      },
      {
        type: "p",
        text: "PRDs to test scripts isn't a party trick. It's the shortest path to coverage that tracks the product instead of lagging weeks behind it.",
      },
    ],
  },
  {
    slug: "scaling-ai-testing-across-25-engineers",
    date: "2026-01-09",
    title: "Scaling AI Testing Across 25+ Engineers",
    tag: "Leadership",
    read: "4 min",
    excerpt:
      "Tooling is the easy part. Standards, review culture and trust are what actually scale.",
    body: [
      {
        type: "p",
        text: "Handing a powerful agent to one engineer is a demo. Handing it to twenty-five and keeping quality consistent is an organisational problem. The tooling was the easy 20%.",
      },
      { type: "h", text: "Standards before speed" },
      {
        type: "p",
        text: "Before scaling adoption we agreed on the boring things: how agents are prompted, where grounding context lives, what a \"healed\" test must prove before it merges, and which flows agents are not allowed to touch. Shared patterns meant an agent-generated test from one team read like one from any other.",
      },
      { type: "h", text: "Review the agents, not just the code" },
      {
        type: "p",
        text: "We treat agent behaviour as a reviewable artefact. Every generation and heal is traceable, and code review covers the reasoning as much as the diff. That kept trust high — engineers adopt what they can inspect, and quietly route around what they can't.",
      },
      {
        type: "p",
        text: "Scaling AI testing is a leadership exercise dressed up as a tooling one. Get the standards and the review loop right, and the velocity takes care of itself.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
