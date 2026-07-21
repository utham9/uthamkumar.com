# uthamkumar.com

Personal portfolio + résumé site for **Utham Kumar N S** — a cyber-constructivist,
terminal-inspired single-page experience with eight sections reachable from a
persistent left navigation matrix.

Built to the spec in [`design_handoff_cyber_portfolio/README.md`](design_handoff_cyber_portfolio/README.md).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`) for the token pipeline + reset
- **next/font** self-hosting Space Grotesk · JetBrains Mono · Fira Code
- Zero runtime data fetching — all content is static and résumé-derived

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered as static)
npm run start    # serve the production build
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root shell: fonts, <LeftRail/> + <main> (40/60 grid), metadata
│   ├── globals.css         # Design tokens + all component classes + keyframes (single source of truth)
│   ├── page.tsx            # 00 Home        — /
│   ├── about/page.tsx      # 01 About       — /about
│   ├── projects/page.tsx   # 02 Projects    — /projects
│   ├── experience/page.tsx # 03 Experience  — /experience
│   ├── skills/page.tsx     # 04 Skills      — /skills
│   ├── brainwaves/page.tsx # 05 Brainwaves  — /brainwaves
│   ├── syndicate/page.tsx  # 06 Syndicate   — /syndicate
│   └── contact/page.tsx    # 07 Contact     — /contact
├── components/
│   ├── LeftRail.tsx        # Persistent nav matrix; active state via usePathname()  (client)
│   ├── Screen.tsx          # Per-screen wrapper: padding + fadeUp + command breadcrumb
│   ├── CopyCodeBlock.tsx   # Brainwaves code panel w/ "✓ copied" button (1.6s)      (client)
│   └── ContactTerminal.tsx # Working terminal: help/contact/social/book/clear       (client)
└── lib/
    ├── site.ts             # Profile/contact constants + link URLs (single source)
    └── data.ts             # All page content (stats, projects, experience, skills, …)

public/uthamkumar-resume.pdf   # Résumé download target (see TODO below)
```

### Design tokens

All colors, fonts, radii (0px), grid borders (`#1E293B`), glows and the global
64px page grid live in [`src/app/globals.css`](src/app/globals.css) as CSS custom
properties (`--bg`, `--accent`, `--primary`, …) mirrored into Tailwind's `@theme`.
No hex values are hardcoded in components.

### Interactions

- Pulsing green status dot (`@keyframes pulse`)
- Per-screen fade-up on mount (`@keyframes fadeUp`, replays on every route change)
- Project card border → green on hover
- Blog copy-code button → `✓ copied` (green) for 1.6s + clipboard write
- Contact terminal: auto-runs `contact` on load; commands `help`, `contact`,
  `social`, `book`, `clear`; unknown commands print a red `command not found`

### Responsive

Desktop 40/60 → tablet ~30/70 (`≤1024px`) → mobile stacked with the nav as a
sticky top horizontal scroll row (`≤768px`).

## Open TODOs (confirm with Utham before launch)

Search the codebase for `TODO:` to find each in context.

1. **Résumé PDF** — currently wired to `Utham_Kumar_NS_GenAI_AgenticSDLC.pdf`
   (copied to `public/uthamkumar-resume.pdf`). Swap for the final export when
   supplied. → `src/lib/site.ts`, `src/app/page.tsx`
2. **Topmate & Freelancer URLs** — placeholders (`topmate.io`, `freelancer.com`).
   Replace with exact profile URLs. → `src/lib/site.ts`
3. **Real testimonials** — Syndicate endorsements are placeholder quotes.
   → `src/lib/data.ts` (`testimonials`)
4. **Real blog essays** — Brainwaves posts are placeholders; row links point at
   `#`. Wire to published essays. → `src/lib/data.ts` (`posts`), `src/app/brainwaves/page.tsx`
5. **Current employer name is intentionally withheld** — shown as
   "A leading retail bank (current)". Keep it hidden unless Utham says otherwise.
   → `src/lib/data.ts` (`experience[0].org`)
```
