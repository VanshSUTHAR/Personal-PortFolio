# AGENT.md — Read Before Making Any Changes

## Project
Personal portfolio site for Vansh Suthar — MERN Stack Developer.
Live: https://vanshsuthar022.netlify.app/
Stack (inferred from live site, verify against actual repo): Next.js (uses `/_next/image`), Tailwind CSS, deployed on Netlify.
Pages: Home (`/`), About (`/about`), Projects (`/projects`), Contact (`/contact`).
Static assets: resume PDF, 8 certificate PDFs under `/certificates/`.

## Ground Rules (non-negotiable)

1. **Minimal, targeted diffs only.** Fix exactly what's described in the implementation plan. Do not refactor unrelated code, rename files/variables, change formatting of untouched code, upgrade dependencies, or "improve" things that weren't flagged.
2. **Do not change visual design, copy/content tone, layout, or branding** unless a task explicitly says to. If a fix requires a visual change (e.g. adding an error message), match the existing design system (same font, spacing, color tokens, component patterns already used elsewhere in the codebase).
3. **Verify before editing.** Before any phase, actually open and read the relevant files. Do not assume file structure — confirm paths, component names, and data sources (e.g. is the certificates list hardcoded in a component, or pulled from a JSON/CMS file?) before writing changes.
4. **No new dependencies** unless a task explicitly requires one (e.g. a form library). If one seems genuinely necessary, stop and ask before installing.
5. **Preserve all working functionality.** After every change, re-check that the page(s) touched still render and that unrelated features aren't broken.
6. **One phase at a time.** Complete and report on a phase before starting the next. Don't batch all fixes into one giant commit.
7. **Explain every change.** For each file touched, give a one-line summary: what was wrong, what changed, why.
8. **If something described in the plan doesn't match what you find in the code** (e.g. the certificate list isn't structured the way assumed), stop and describe the actual structure instead of forcing a fix that doesn't fit.
9. **No secrets, no hardcoded credentials, no analytics/tracking additions** unless explicitly requested.
10. **Accessibility and semantics matter but scope stays bounded** — fix what's listed, don't do a full a11y audit unless asked.

## Known Issues (source: QA audit, see IMPLEMENTATION_PLAN.md for details)

| # | Issue | Severity |
|---|-------|----------|
| 1 | Certificate link mismatch on `/about` — "Machine Learning with Python.pdf [Microsoft]" entry links to and duplicates the wrong certificate (should point to the .NET/Microsoft cert, correctly labeled) | High |
| 2 | Contact form has no verified client-side validation feedback or submit/loading/error states | High |
| 3 | `og:url` meta tag points to `https://vanshsuthar.dev` while the site is actually deployed at `vanshsuthar022.netlify.app` — inconsistent canonical/social metadata | Medium |
| 4 | No confirmed custom 404 page for unmatched routes | Medium |
| 5 | Resume PDF may be image-based / non-text-selectable, hurting ATS parsing and accessibility | Low |
| 6 | General responsiveness/mobile-menu/animation behavior unverified — needs manual pass, not blind fixes | Low (investigate only) |

## Definition of Done (per phase)
- Change builds and runs locally without errors.
- Only the files relevant to that phase are modified.
- A short changelog entry is added (see PROMPTS.md phase instructions) describing what changed.
- No console errors introduced.
- Existing tests (if any) still pass.