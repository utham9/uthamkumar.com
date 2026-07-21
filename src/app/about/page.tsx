import { Screen } from "@/components/Screen";
import {
  aboutParagraphs,
  competencies,
  achievements,
  education,
} from "@/lib/data";

export default function AboutPage() {
  return (
    <Screen command="cat about.md">
      <h2 className="h-screen-title" style={{ marginBottom: "24px" }}>
        About
      </h2>
      <p className="para">{aboutParagraphs[0]}</p>
      <p className="para para--muted">{aboutParagraphs[1]}</p>

      <h3 className="h-sub">// core_competencies</h3>
      <div className="grid-hair" style={{ marginBottom: "40px" }}>
        {competencies.map((c) => (
          <div className="comp-cell" key={c}>
            <span className="bullet">▸</span>
            {c}
          </div>
        ))}
      </div>

      <div className="about-cols">
        <div>
          <h3 className="h-sub">// key_achievements</h3>
          <div className="ach-list">
            {achievements.map((a) => (
              <div className="ach" key={a}>
                {a}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="h-sub">// education &amp; certs</h3>
          <div className="edu-list">
            {education.map((e) => (
              <div className="edu-row" key={e.title}>
                <div>
                  <div className="edu-title">{e.title}</div>
                  <div className="edu-org">{e.org}</div>
                </div>
                <span className="edu-year">{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}
