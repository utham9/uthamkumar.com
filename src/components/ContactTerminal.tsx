"use client";

import { useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Line = { text: string; color: string; href?: string };

// Auto-run `contact` output, seeded on load.
const initialLines: Line[] = [
  { text: "Contact terminal v2.6 — connection established.", color: "var(--muted)" },
  { text: "guest@portfolio:~$ contact", color: "var(--text)" },
  { text: `  email : ${site.email}`, color: "var(--primary)", href: `mailto:${site.email}` },
  { text: `  github : ${site.githubHandle}`, color: "var(--primary)", href: site.github },
  { text: `  linkedin : ${site.linkedinHandle}`, color: "var(--primary)", href: site.linkedin },
  { text: `  phone : ${site.phone}`, color: "var(--muted)" },
  { text: "Type 'help' for more commands.", color: "var(--muted)" },
];

function resolve(raw: string): Line[] | "clear" {
  switch (raw) {
    case "help":
      return [
        { text: "  contact   → email + PGP fingerprint", color: "var(--accent)" },
        { text: "  social    → GitHub / LinkedIn", color: "var(--accent)" },
        { text: "  book      → open a discovery call", color: "var(--accent)" },
        { text: "  clear     → wipe terminal", color: "var(--accent)" },
      ];
    case "contact":
      return [
        { text: `  email : ${site.email}`, color: "var(--primary)", href: `mailto:${site.email}` },
        { text: `  phone : ${site.phone}`, color: "var(--primary)" },
        { text: `  pgp   : ${site.pgp}`, color: "var(--muted)" },
      ];
    case "social":
      return [
        { text: `  github   : ${site.githubHandle}`, color: "var(--primary)", href: site.github },
        { text: `  linkedin : ${site.linkedinHandle}`, color: "var(--primary)", href: site.linkedin },
      ];
    case "book":
      return [
        { text: "  Opening scheduling terminal...", color: "var(--muted)" },
        { text: "  → topmate.io  ·  freelancer.com", color: "var(--accent)", href: site.topmate },
      ];
    case "clear":
      return "clear";
    default:
      return [
        { text: `  command not found: ${raw} (try 'help')`, color: "var(--error)" },
      ];
  }
}

export function ContactTerminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [cmd, setCmd] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => inputRef.current?.focus();

  const runCmd = (e: FormEvent) => {
    e.preventDefault();
    const raw = cmd.trim().toLowerCase();

    if (raw === "") {
      setCmd("");
      return;
    }
    const out = resolve(raw);
    if (out === "clear") {
      setLines([]);
      setCmd("");
      return;
    }
    const echo: Line = { text: "guest@portfolio:~$ " + cmd, color: "var(--text)" };
    setLines((prev) => [...prev, echo, ...out]);
    setCmd("");
  };

  return (
    <section className="screen">
      <div className="terminal">
        <div className="term-bar">
          <span className="term-btn" aria-hidden />
          <span className="term-btn" aria-hidden />
          <span className="term-btn" aria-hidden />
          <span className="term-bar-title">contact — guest@portfolio</span>
        </div>
        <div className="term-body" onClick={focusInput}>
          {lines.map((ln, i) =>
            ln.href ? (
              <a
                key={i}
                href={ln.href}
                target="_blank"
                rel="noopener noreferrer"
                className="term-link"
                style={{ color: ln.color }}
              >
                {ln.text}
              </a>
            ) : (
              <div key={i} className="term-line" style={{ color: ln.color }}>
                {ln.text}
              </div>
            )
          )}
          <form className="term-form" onSubmit={runCmd}>
            <span className="term-caret">guest@portfolio:~$</span>
            <input
              ref={inputRef}
              className="term-input"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              placeholder="type 'help'"
              aria-label="terminal command input"
            />
          </form>
        </div>
      </div>
      <div className="term-hint">TRY: help · contact · social · book · clear</div>
    </section>
  );
}
