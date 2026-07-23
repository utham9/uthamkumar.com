import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Screen } from "@/components/Screen";
import { blogPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — Brainwaves" };
  return {
    title: `${post.title} — Brainwaves`,
    description: post.excerpt,
    alternates: { canonical: `/brainwaves/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Utham Kumar N S"],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Utham Kumar N S",
      url: "https://uthamkumar.com",
    },
    mainEntityOfPage: `https://uthamkumar.com/brainwaves/${post.slug}`,
  };

  return (
    <Screen command={`cat brainwaves/${post.slug}.md`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/brainwaves" className="back-link">
        ← cd ../brainwaves
      </Link>

      <div className="article-meta">
        {post.date} · {post.tag} · {post.read} read
      </div>
      <h1 className="article-title">{post.title}</h1>

      <div className="article-body">
        {post.body.map((block, i) => {
          if (block.type === "h") {
            return <h3 key={i}>{block.text}</h3>;
          }
          if (block.type === "code") {
            return (
              <div className="code-panel" key={i}>
                <div className="code-bar">
                  <span className="code-name">{block.file}</span>
                </div>
                <pre className="code-pre">{block.code}</pre>
              </div>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>

      <Link href="/brainwaves" className="back-link back-link--foot">
        ← back to all posts
      </Link>
    </Screen>
  );
}
