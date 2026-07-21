"use client";

import { useEffect, useRef, useState } from "react";
import { codeSnippet } from "@/lib/data";

/**
 * `agent_loop.py` panel with a copy button that swaps to "✓ copied"
 * (green fill) for 1.6s and writes the snippet to the clipboard.
 */
export function CopyCodeBlock() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = () => {
    try {
      void navigator.clipboard?.writeText(codeSnippet);
    } catch {
      /* clipboard unavailable — ignore */
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="code-panel">
      <div className="code-bar">
        <span className="code-name">agent_loop.py</span>
        <button
          type="button"
          className="code-copy"
          data-copied={copied}
          onClick={copy}
        >
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <pre className="code-pre">
        <span className="c-muted"># self-healing test agent</span>
        {"\n"}
        <span className="c-accent">graph</span> = StateGraph(TestState)
        {"\n"}
        graph.add_node(<span className="c-primary">&quot;generate&quot;</span>, rag_generate)
        {"\n"}
        graph.add_node(<span className="c-primary">&quot;validate&quot;</span>, execute_and_heal)
        {"\n"}
        graph.add_edge(<span className="c-primary">&quot;generate&quot;</span>,{" "}
        <span className="c-primary">&quot;validate&quot;</span>)
        {"\n"}
        agent = graph.compile()
      </pre>
    </div>
  );
}
