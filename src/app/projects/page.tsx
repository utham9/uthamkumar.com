import { Screen } from "@/components/Screen";
import { projects } from "@/lib/data";

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
    </Screen>
  );
}
