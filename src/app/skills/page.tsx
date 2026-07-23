import type { Metadata } from "next";
import { Screen } from "@/components/Screen";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Utham Kumar's stack — GenAI/agentic AI (LangGraph, RAG, OpenAI, Gemini, Claude), test automation (Playwright, Selenium, Appium), DevOps, service virtualization and observability.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <Screen command="cat stack.json">
      <h2 className="h-screen-title">Skills</h2>

      <div className="grid-hair">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.name}>
            <h4 className="skill-title">{g.name}</h4>
            <div className="tag-row tag-row--sm">
              {g.items.map((it) => (
                <span className="tag-neutral" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Screen>
  );
}
