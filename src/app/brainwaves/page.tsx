import type { Metadata } from "next";
import Link from "next/link";
import { Screen } from "@/components/Screen";
import { CopyCodeBlock } from "@/components/CopyCodeBlock";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Brainwaves",
  description:
    "Brainwaves — long-form notes on agentic quality by Utham Kumar: agentifying the SDLC, RAG for QA and scaling AI testing across engineering teams.",
  alternates: { canonical: "/brainwaves" },
};

export default function BrainwavesPage() {
  return (
    <Screen command="tail -f brainwaves.log">
      <h2 className="h-screen-title" style={{ marginBottom: "8px" }}>
        Brainwaves
      </h2>
      <p className="lede">Long-form notes on agentic quality.</p>

      <div className="post-list">
        {blogPosts.map((post) => (
          <Link className="post-row" href={`/brainwaves/${post.slug}`} key={post.slug}>
            <span className="post-date">{post.date}</span>
            <span className="post-title">{post.title}</span>
            <span className="post-tag">{post.tag} →</span>
          </Link>
        ))}
      </div>

      <CopyCodeBlock />
    </Screen>
  );
}
