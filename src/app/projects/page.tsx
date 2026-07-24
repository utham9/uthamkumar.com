import type { Metadata } from "next";
import { Screen } from "@/components/Screen";
import { projects, repos } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Utham Kumar — LangGraph multi-agent test platform, context-aware RAG test generation, Java API mocking, automated quality gates, plus open-source repositories on GitHub.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Screen command="ls ./archive">
      <h2 className="h-screen-title" style={{ marginBottom: "8px" }}>
        Projects
      </h2>
      <p className="lede">Shipped platforms &amp; consulting case studies.</p>

      <div className="card-grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="card-hatch">
              <span className="card-arrow">↗</span>
            </div>
            <div className="card-body">
              <div className="card-metric">{p.metric}</div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.body}</p>
              <div className="tag-row tag-row--sm">
                {p.stack.map((t) => (
                  <span className="tag tag--xs" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Public repositories — every card links straight to GitHub. */}
      <h3 className="h-sub">// open_source</h3>
      <p className="lede lede--sub">
        Public repositories on{" "}
        <a
          className="inline-link"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.githubHandle}
        </a>
        .
      </p>

      <div className="repo-grid">
        {repos.map((r) => (
          <a
            className="repo-card"
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="repo-head">
              <span className="repo-lang">{r.lang}</span>
              <span className="repo-arrow">↗</span>
            </div>
            <h4 className="repo-name">{r.name}</h4>
            <p className="repo-desc">{r.body}</p>
            <div className="tag-row tag-row--sm">
              {r.stack.map((t) => (
                <span className="tag tag--xs" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Screen>
  );
}
