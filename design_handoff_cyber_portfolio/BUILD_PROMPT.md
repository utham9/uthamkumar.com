# BUILD PROMPT — for Claude Code

Paste the prompt below into Claude Code (run it from the root of the target repo, with this `design_handoff_cyber_portfolio/` folder available).

---

You are implementing a personal portfolio + résumé website from a high-fidelity design handoff.

**Read first:** `design_handoff_cyber_portfolio/README.md` (complete spec — tokens, all 8 screens, interactions, state, data) and the reference prototype `design_handoff_cyber_portfolio/Site-Cyber.dc.html`. Visual references for every screen are in `design_handoff_cyber_portfolio/screenshots/` (`00-home.png` … `07-contact.png`).

**Important:** the `.dc.html` file and `support.js` are a prototyping harness — **do not port them**. Read them only for structure, content, and logic, then rebuild in a real stack.

**Stack:** Build with **Next.js (App Router) + React + TypeScript + Tailwind CSS**. If the repo already has an established stack/design system, use that instead and match its conventions.

**Requirements:**
1. Pixel-accurate to the handoff: exact colors, fonts (Space Grotesk / JetBrains Mono / Fira Code), 0px radius, 1px `#1E293B` grid borders, neon glows, and the global page grid background. Put the tokens in `tailwind.config` (or CSS variables) — do not hardcode hex repeatedly.
2. Recreate all 8 sections: Home, About, Projects, Experience, Skills, Brainwaves, Syndicate, Contact. Use real routes (`/`, `/about`, `/projects`, …) with the persistent left nav matrix (40/60 split), active/hover states as specified.
3. Implement the interactions: pulsing status dot, per-screen fade-up on mount, project-card border-glow on hover, blog copy-code button (`✓ copied`, 1.6s), and the **working Contact terminal** (commands `help`/`contact`/`social`/`book`/`clear`, auto-run `contact` on load, clickable email/social links).
4. Responsive: desktop 40/60 → tablet ~30/70 → mobile stacked with the nav as a top horizontal scroll row.
5. Content is static and résumé-derived — pull all copy/data from the README and the prototype's `renderVals()`. **Keep the current employer name hidden** ("A leading retail bank (current)").
6. Leave clear TODOs for the open items: résumé PDF at `/uthamkumar-resume.pdf`, real testimonials (Syndicate), real blog essays (Brainwaves), and exact Topmate/Freelancer URLs.

Set up the project, install deps, build it, and run the dev server. Then walk me through the structure and anything you left as a TODO.

---
