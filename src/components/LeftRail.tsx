"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";

/**
 * Persistent left navigation matrix (40% of the shell on desktop).
 * Active state is derived from the current route via usePathname().
 */
export function LeftRail() {
  const pathname = usePathname();

  return (
    <aside className="rail">
      <div className="rail-header">
        <div className="status">
          <span className="status-dot" aria-hidden />
          <span className="status-text">{site.status}</span>
        </div>
        <h1 className="moniker">
          {site.moniker}
          <span className="dot">.</span>
        </h1>
        <div className="role-line">{site.role}</div>
        <p className="bio">{site.bio}</p>
      </div>

      <nav className="nav-matrix" aria-label="Primary">
        {nav.map((n) => {
          const active =
            n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
          return (
            <Link
              key={n.id}
              href={n.href}
              className="nav-item"
              data-active={active}
              aria-current={active ? "page" : undefined}
            >
              <span className="nav-label">{n.label}</span>
              <span className="nav-idx">{n.idx}</span>
            </Link>
          );
        })}
      </nav>

      <div className="rail-footer">
        <span>{site.location}</span>
        <span>{site.domainLabel}</span>
      </div>
    </aside>
  );
}
