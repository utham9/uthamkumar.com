import type { ReactNode } from "react";

/**
 * Wraps each screen's content in the padded, fade-up section and prints the
 * muted `guest@portfolio:~$ …` command breadcrumb that opens every view.
 * The fadeUp animation replays on mount, i.e. on every route change.
 */
export function Screen({
  command,
  promptClassName,
  children,
}: {
  command: string;
  promptClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className="screen">
      <div className={`prompt${promptClassName ? ` ${promptClassName}` : ""}`}>
        guest@portfolio:~$ {command}
      </div>
      {children}
    </section>
  );
}
