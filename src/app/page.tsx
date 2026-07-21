import { Screen } from "@/components/Screen";
import { stats, coreStack } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <Screen command="cat profile.md" promptClassName="prompt--home">
      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-cell" key={s.l}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      <h2 className="h-corestack">
        Core_Stack<span className="bracket">[]</span>
      </h2>
      <div className="tag-row" style={{ marginBottom: "48px" }}>
        {coreStack.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="resume-panel">
        <div>
          <div className="resume-title">Résumé.pdf</div>
          <div className="resume-note">
            Full career history — 14 years, five global clients.
          </div>
        </div>
        {/* Wired to the résumé committed in /public. TODO: swap for the final export. */}
        <a className="btn-cta" href={site.resumePdf} download>
          DOWNLOAD ↓
        </a>
      </div>
    </Screen>
  );
}
