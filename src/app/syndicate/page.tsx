import { Screen } from "@/components/Screen";
import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";

// // work_with_me — 2×2 link grid. Topmate/Freelancer are placeholder URLs (see site.ts).
const links = [
  {
    name: "LinkedIn",
    handle: "in/uthamkmr",
    cta: "Connect",
    desc: "Career history, recommendations and posts on agentic quality engineering.",
    url: site.linkedin,
  },
  {
    name: "GitHub",
    handle: "@utham9",
    cta: "Follow",
    desc: "Automation frameworks, agent experiments and open-source tinkering.",
    url: site.github,
  },
  {
    name: "Topmate",
    handle: "1:1 sessions",
    cta: "Book",
    desc: "Mentoring calls — test architecture, GenAI in QA, or career guidance.",
    url: site.topmate,
  },
  {
    name: "Freelancer",
    handle: "Hire me",
    cta: "Hire",
    desc: "Consulting on test-automation platforms and AI-augmented quality.",
    url: site.freelancer,
  },
];

export default function SyndicatePage() {
  return (
    <Screen command="netstat --syndicate">
      <h2 className="h-screen-title" style={{ marginBottom: "8px" }}>
        Syndicate
      </h2>
      <div className="synd-stats">
        <span>
          NODES CONNECTED: <span className="num">12</span>
        </span>
        <span>
          NETWORK UPTIME: <span className="num">99.9%</span>
        </span>
      </div>

      <h3 className="h-sub">// endorsements</h3>
      {/* TODO: replace placeholder testimonials with real, attributed endorsements. */}
      <div className="tcard-grid">
        {testimonials.map((q) => (
          <div className="tcard" key={q.name}>
            <p className="tquote">&ldquo;{q.quote}&rdquo;</p>
            <div className="tname">{q.name}</div>
            <div className="trole">{q.role}</div>
          </div>
        ))}
      </div>

      <h3 className="h-sub">// work_with_me</h3>
      <div className="grid-hair">
        {links.map((l) => (
          <a
            className="linkcard"
            key={l.name}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="linkcard-head">
              <span className="link-name">{l.name}</span>
              <span className="link-cta">{l.cta}</span>
            </div>
            <div className="link-handle">{l.handle}</div>
            <p className="link-desc">{l.desc}</p>
          </a>
        ))}
      </div>
    </Screen>
  );
}
