# Handoff: Utham Kumar — Personal Career Site (Cyber-Constructivist)

## Overview
A high-contrast, terminal-inspired personal portfolio + résumé site for **Utham Kumar N S**, a Quality Engineering leader (GenAI / agentic test automation). It positions him for recruiters, consulting clients, and industry peers, and surfaces his affiliate/profile links (LinkedIn, GitHub, Topmate, Freelancer). Desktop-first. Eight sections reachable from a persistent left navigation matrix: **Home, About, Projects, Experience, Skills, Brainwaves (blog), Syndicate (network + links), Contact (terminal)**.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not** production code to ship as-is. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Next.js, etc.) using its established patterns, component library, and conventions. If no codebase exists yet, choose an appropriate stack — the original spec calls for **HTML + Tailwind CSS**, and React (Next.js) is a natural fit for the multi-screen SPA behavior.

> The prototype is authored as a "Design Component" (`.dc.html`) that depends on a runtime (`support.js`). This runtime is a prototyping harness — **do not port it**. Read the file for structure/content/logic and rebuild with normal components + state.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, borders, glows, and interactions are all specified below and in the HTML. Recreate the UI pixel-accurately using the target codebase's libraries.

## Design Direction
Cyber-constructivist. Deep void backgrounds structured by a rigid 1px grid, punctuated by electric cyan and toxic green. Geometric brutalism, sharp edges, **0px border-radius everywhere**. Monospace-driven UI with a display sans for headings. Terminal/console metaphors throughout (command-prompt breadcrumbs like `guest@portfolio:~$ …`).

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#050505` | Main void background |
| `--surface` | `#0C0C0E` | Cards, panels, code blocks |
| `--surface2` | `#121215` | Hover fills, active nav background |
| `--text` | `#E2E8F0` | Primary reading copy |
| `--muted` | `#475569` | Grid lines context, metadata, secondary copy |
| `--accent` | `#00E5FF` | Cyan — hyperlinks, hover, headings accent, tags |
| `--primary` | `#00FF41` | Green — CTAs, active terminal, status, metrics |
| `--border` | `#1E293B` | 1px grid borders everywhere |
| error | `#ff4d4d` | Terminal "command not found" |

### Typography
- **Display / headings:** `Space Grotesk`, 700 (some 500), uppercase, 19–52px, letter-spacing ~-0.01em to 0.02em.
- **Body / UI:** `JetBrains Mono`, 400 (italic 400 for endorsement quotes), 12–15px.
- **Labels / buttons / breadcrumbs / tags:** `Fira Code` or `JetBrains Mono`, 500–600, 10–14px, uppercase, letter-spacing 0.04–0.16em.
- Google Fonts: `Space Grotesk:400,500,700` · `JetBrains Mono:ital,400,500,700` · `Fira Code:500,600`.

### Structure / effects
- `border-radius: 0` on **every** element.
- Rigid `1px solid #1E293B` borders create a visible grid; 1px-gap grids drawn with `background:var(--border)` behind `gap:1px` cells.
- Global page background grid: two linear-gradients at `64px 64px`, position `-1px -1px`, color `#1E293B`.
- Primary CTA glow on hover: `box-shadow: 0 0 15px rgba(0,255,65,.4–.5)`.
- Spacing scale used: 8 / 24 / 64px (plus 40, 56 for section padding).

### Keyframes
- `pulse` (status dot): opacity 1→.5→1 + expanding green box-shadow, `2s infinite`.
- `blink`: cursor blink (available for typing effects).
- `fadeUp`: `opacity 0→1` + `translateY(20px→0)`, `.4s ease` — applied to each screen on mount.

## Layout (App Shell)
Two-column CSS grid: **`grid-template-columns: 40% 60%`**, `min-height:100vh`.

- **Left `<aside>` (40%):** `position:sticky; top:0; height:100vh; overflow-y:auto`, flex column, `border-right:1px solid --border`, background `--bg`.
  - **Header block** (padding 40/40/24, bottom border): pulsing 8px green status dot + uppercase `Status: Available for Q3 2026` (12px, --primary); H1 moniker `Utham Kumar.` (Space Grotesk 700, 38px, uppercase, `white-space:nowrap`, the `.` in cyan); role line `// LEAD_ARCHITECT.QUALITY_ENGINEERING` (Fira Code 13px cyan); 14px bio paragraph.
  - **Nav matrix** (`flex:1 0 auto`, column): each item is a full-width `<button>` (reset with `all:unset`), height **58px**, padding `0 40px`, bottom border, `border-left:4px solid transparent`, label (Space Grotesk 700, 19px, uppercase) + right-aligned 2-digit index (`00`–`07`, Fira Code 12px muted). **Active state:** left border `--accent`, background `--surface2`, label color `--accent`. **Hover:** background `--surface2`, left border color `--accent`.
  - **Footer** (`flex:0 0 auto`, top border, padding 20/40): `HYDERABAD · IN` and `UTHAMKUMAR.COM`, Fira Code 11px muted, space-between.
- **Right `<main>` (60%):** background `--bg`, the active screen renders here with `padding:56px` and `animation:fadeUp .4s`. Each screen opens with a muted `guest@portfolio:~$ …` command breadcrumb.

### Responsive (from spec — implement in target codebase)
- Desktop 40/60. Tablet ~30/70. Mobile: stack; sticky left nav becomes a top horizontal scrollable row.

## Screens / Views

### 00 — Home
`guest@portfolio:~$ cat profile.md`. 2×2 stat grid (1px gaps over --border): `14+` Years engineering, `25+` Engineers led, `40%` Faster cycles, `70%` Fewer deps (numbers Space Grotesk 44px --primary; labels 12px uppercase muted). "Core_Stack[]" heading + wrap of bordered cyan uppercase tags (LangGraph, RAG, OpenAI API, Gemini, Claude Code, Python, Java, Playwright, Selenium, Appium, Jenkins, Docker, AWS, Grafana). Résumé download panel: title `Résumé.pdf` + green CTA button `DOWNLOAD ↓` (`href="/uthamkumar-resume.pdf"`, glow on hover).

### 01 — About
`cat about.md`. Two summary paragraphs. **Core_Competencies** — 2-col 1px-gap grid, each cell `▸` + text (12 items: Agentic systems & orchestration (LangGraph), LLM integrations, RAG architectures, Prompt engineering, AI-driven test automation, Validation of AI-generated code, CI/CD & DevOps automation, Scalable platform & framework design, Observability & metrics, Service virtualization & API mocking, Cloud (AWS, Docker), Technical mentorship & leadership). Bottom 2-col: **Key_Achievements** (4 items, each with a green left border) and **Education & certs** (list with title/org + right-aligned year/type: B.E. Sathyabama 2009; AWS Cloud Practitioner; CRISC/ISACA; CA LISA/DevTest; UC Berkeley Exec Ed).

### 02 — Projects
`ls ./archive` (heading text is **Projects**). 2-col card grid. Each card: 1px border (hover → border `--primary`), 120px hatched header strip with a 22px cyan `↗`, then green metric label, Space Grotesk 19px uppercase title, muted 13px body, cyan bordered tech tags. Four cards: LangGraph Multi-Agent Test Platform (−40% cycle time), Context-Aware RAG Test Generation (self-healing), Java API Mocking & Data Virtualization (−70% dependencies), Automated Quality Gates & Observability (−75% verify time).

### 03 — Experience
`git log --career`. Vertical stack of role cards (1px border, surface bg, padding 26). Header row: role (Space Grotesk 700 21px uppercase) + org (cyan 13px) + place (muted 11px), with dates right-aligned green 12px. Bullets in a **2-column** list (13px, `break-inside:avoid`). Five roles: VP Quality Engineering — *A leading retail bank (current)* (Aug 2018–Present); Specialist — DXC/HPE (American Airlines) 2016–18; Senior Analyst — Accenture (JP Morgan) 2014–16; Associate Consultant — Capgemini (ANZ) 2012–14; Project Engineer — Wipro (Wal-Mart) 2010–12.

> **PRIVACY:** The current employer's real name is intentionally withheld — shown as "A leading retail bank (current)". Keep it withheld unless Utham says otherwise. (In the prototype this is a `hideCurrentEmployer` toggle; ship it hidden.)

### 04 — Skills
`cat stack.json`. 2-col 1px-gap grid of 8 groups, each with a Fira Code cyan group title and bordered uppercase item tags: GenAI/Agentic AI, Languages, Test Automation, DevOps/Cloud/SDLC, APIs & Messaging, Service Virtualization, Observability & Reporting, Certifications. (Full item lists are in the HTML `renderVals()`.)

### 05 — Brainwaves (blog)
`tail -f brainwaves.log`. List of posts: `120px date` (YYYY-MM-DD) / title (Space Grotesk 500 20px) / cyan `TAG →`, row hover → surface bg, connected by 1px bottom borders. Below: a code block panel (`agent_loop.py`) with a title bar + **copy button** that swaps to `✓ copied` (green fill) for 1.6s and writes the snippet to clipboard. Posts are **placeholder** — mark for replacement with real essays.

### 06 — Syndicate (network + links)
`netstat --syndicate`. Top stats line `NODES CONNECTED: 12` / `NETWORK UPTIME: 99.9%`. **// endorsements** — 2 testimonial cards (italic quote, uppercase name, muted role) — **placeholder quotes**, replace with real ones. **// work_with_me** — 2×2 link grid: LinkedIn (Connect), GitHub (Follow), Topmate (Book), Freelancer (Hire); each card has name + cyan CTA chip + green handle + description. Topmate/Freelancer URLs are generic placeholders — replace with exact profile URLs.

### 07 — Contact (terminal)
Simulated terminal panel (min-height 520): title bar with three 11px square "buttons" + `contact — guest@portfolio`. Body is clickable to focus the input. **On load it auto-prints the `contact` output** (email, GitHub, LinkedIn). A form with prompt `guest@portfolio:~$` and a bare input (caret green) accepts commands. Hint line: `TRY: help · contact · social · book · clear`.

## Interactions & Behavior
- **Nav:** clicking a nav button sets the active screen (SPA, no route change in prototype — use real routes/`/about` etc. in production). Active + hover states as described.
- **Screen mount:** `fadeUp` animation each time a screen becomes active.
- **Status dot:** infinite `pulse`.
- **Project card hover:** border → green.
- **Blog row hover:** background → surface. **Copy code:** button → `✓ copied` green for 1600ms + `navigator.clipboard.writeText`.
- **Contact terminal commands** (case-insensitive, trimmed):
  - `help` → lists contact/social/book/clear.
  - `contact` → email (mailto link), phone, PGP/domain line. **Auto-run on load.**
  - `social` → GitHub + LinkedIn (external links, `target=_blank`).
  - `book` → "Opening scheduling terminal…" + topmate/freelancer.
  - `clear` → wipes history.
  - empty → no-op; anything else → red `command not found: <cmd> (try 'help')`.
  - Lines with a URL render as underlined links (email = `mailto:`, socials = new tab, hover → cyan); others render as plain text.

## State Management
- `screen`: one of `home|about|archive|experience|skills|brainwaves|syndicate|transmission` (labels differ: archive→"Projects", transmission→"Contact").
- `copied`: boolean, auto-resets after 1.6s (timeout).
- `cmd`: current terminal input string.
- `lines`: array of `{text, color, href?}` terminal output; seeded with the auto-run `contact` output on init.
- No data fetching — all content is static (résumé-derived). Résumé PDF is a static asset at `/uthamkumar-resume.pdf` (to be provided).

## Contact / Profile Data
- Email: `uthamkmr@gmail.com` · Phone: `+91 99729 74000` · Domain: `uthamkumar.com`
- LinkedIn: `https://www.linkedin.com/in/uthamkmr`
- GitHub: `https://github.com/utham9`
- Topmate: `https://topmate.io/` *(placeholder — get exact URL)*
- Freelancer: `https://www.freelancer.com/` *(placeholder — get exact URL)*

## Assets
- **Fonts:** Space Grotesk, JetBrains Mono, Fira Code (Google Fonts) — self-host in production if preferred.
- **Résumé PDF:** `/uthamkumar-resume.pdf` — **not yet provided**; wire the Home + résumé button to it once supplied.
- **No image assets** — all visuals are CSS (hatch patterns, grid, glows). No portrait is used in this direction.
- Icons: only text/ASCII glyphs (`↗`, `▸`, `↓`, `✓`) — no icon library required.

## Open Items (confirm with Utham before launch)
1. Real testimonials for Syndicate (currently placeholder).
2. Real blog essays for Brainwaves (currently placeholder).
3. Exact Topmate & Freelancer profile URLs.
4. The résumé PDF file.
5. Keep current employer name hidden (default) or reveal.

## Files
- `BUILD_PROMPT.md` — ready-to-paste prompt for Claude Code to implement this design.
- `Site-Cyber.dc.html` — the full prototype (template markup + logic class with all content/data in `renderVals()`). Primary reference.
- `support.js` — prototyping runtime only; **do not port**.
- `screenshots/` — hifi reference image per screen: `00-home.png`, `01-about.png`, `02-projects.png`, `03-experience.png`, `04-skills.png`, `05-brainwaves.png`, `06-syndicate.png`, `07-contact.png`.
