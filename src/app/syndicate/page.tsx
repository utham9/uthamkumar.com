import type { Metadata } from "next";
import { Screen } from "@/components/Screen";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Syndicate",
  description:
    "Work with Utham Kumar — connect on LinkedIn, follow on GitHub, email directly or download the résumé.",
  alternates: { canonical: "/syndicate" },
};

// // work_with_me — 2×2 link grid. Every destination is a real, verified link.
const links = [
  {
    name: "LinkedIn",
    handle: site.linkedinHandle,
    cta: "Connect",
    desc: "Career history, recommendations and posts on agentic quality engineering.",
    url: site.linkedin,
  },
  {
    name: "GitHub",
    handle: site.githubHandle,
    cta: "Follow",
    desc: "Automation frameworks, agent experiments and open-source tinkering.",
    url: site.github,
  },
  {
    name: "Email",
    handle: site.email,
    cta: "Write",
    desc: "Consulting, speaking or mentoring — the most direct line to me.",
    url: `mailto:${site.email}`,
  },
  {
    name: "Résumé",
    handle: "PDF · download",
    cta: "Get",
    desc: "Full history, achievements and certifications in a printable one-pager.",
    url: site.resumePdf,
  },
];

export default function SyndicatePage() {
  return (
    <Screen command="netstat --syndicate">
      <h2 className="h-screen-title" style={{ marginBottom: "8px" }}>
        Syndicate
      </h2>
      <p className="lede">Where to find me, and how to start a conversation.</p>

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
