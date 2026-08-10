# Implementation Plan — Portfolio Site Fixes

Based on the QA audit of https://vanshsuthar022.netlify.app/. Read `AGENT.md` first.
Each phase is self-contained — don't start the next until the current one is verified.

---

## Phase 0 — Repo Audit (no code changes)
**Goal:** Confirm assumptions before touching anything.

- Locate the component/page rendering the About page certificates list.
- Confirm whether certificate data (title, issuer, file path) is hardcoded inline in JSX or comes from a separate data file (JSON/TS array/CMS).
- Locate the Contact page component and its form submission logic (client-side handler, API route, third-party form service like Formspree/EmailJS, etc.).
- Locate `next.config`/metadata file(s) controlling `og:url` and other SEO tags.
- Check whether a custom `404.tsx` / `not-found.tsx` (Next.js App Router) or `404.js` (Pages Router) already exists.
- Locate the resume PDF source file to check if it's a real export or a scanned image.

**Output:** a short written summary of actual file paths for each item above, before any fix begins.

---

## Phase 1 — Critical Fix: Certificate Link/Label Mismatch
**Severity: High**

- Find the certificate entry currently labeled "Machine Learning with Python.pdf [Microsoft]" that links to `Back-End Development with .NET.pdf`.
- Fix: either
  - (a) correct the **label** to "Back-End Development with .NET" with issuer "Microsoft" (since the linked file is correct), or
  - (b) correct the **link** to point to the actual Machine Learning with Python (IBM) file if that was the intended entry.
- Decide based on which certificate is *not yet listed elsewhere* on the page (avoid ending up with a duplicate title in the list — currently "Machine Learning with Python" appears twice).
- Verify all 8 certificate entries have a 1:1 unique label-to-file mapping after the fix.

**Verification:** manually click through all 8 certificate links post-fix and confirm each opens a PDF matching its displayed title/issuer.

---

## Phase 2 — High: Contact Form Robustness
**Severity: High**

- Add/confirm client-side validation for required fields (Name, Email, Message) with inline error messages (not just the `*` marker).
- Add email format validation.
- Add a visible loading state on the submit button while the request is in flight.
- Add a clear success confirmation state (e.g. "Message sent" replacing the form or a toast) and a clear error state if submission fails (e.g. network/server error), so the user isn't left guessing.
- Do not change the form's visual styling beyond what's needed to show these states — reuse existing design tokens/components.
- If the form currently submits to a third-party service (Formspree, EmailJS, etc.), do not change providers — only add the missing UX states around the existing submission call.

**Verification:** submit with empty fields (expect inline errors, no network call), submit with invalid email (expect inline error), submit valid data (expect loading → success state).

---

## Phase 3 — Medium: Metadata Consistency
**Severity: Medium**

- Update `og:url` (and any other canonical/URL metadata referencing `vanshsuthar.dev`) to the actual deployed URL `https://vanshsuthar022.netlify.app/`, OR, if `vanshsuthar.dev` is a real custom domain intended for future use, leave a code comment noting that and confirm with the site owner — don't guess.
- Do not touch other metadata fields (title, description, keywords) — they're accurate as-is.

---

## Phase 4 — Medium: Custom 404 Page
**Severity: Medium**

- If no custom 404/not-found page exists, add one matching the site's existing design language (same header/nav, fonts, color palette).
- Include a link back to Home.
- Do not add unrelated content (no new sections, no illustrations/libraries not already in use).

---

## Phase 5 — Low: Resume PDF Accessibility Check
**Severity: Low**

- Open the source resume file used to generate `Vansh_Resume.pdf`.
- If it was exported from an image/scan rather than a text document, re-export as a native text-based PDF (e.g. from Word/Google Docs/LaTeX) so text is selectable and screen-reader/ATS-friendly.
- No content or design changes to the resume itself — formatting fidelity only.

---

## Phase 6 — Low/Investigate: Manual Responsiveness & Interaction Pass
**Severity: Low — investigation, not blind fixes**

- Manually test the site at mobile (375px), tablet (768px), and desktop (1440px) widths.
- Check the mobile nav menu (open/close, link taps, focus trap if applicable).
- Check for any layout shift, overlapping text, or overflow issues.
- Only file/fix genuine bugs found during this pass — do not preemptively change responsive breakpoints that already work.

---

## Phase 7 — Final Regression Pass
- Re-test all internal links, all 8 certificate links, contact form (empty/invalid/valid), resume download, and 404 page.
- Confirm no unrelated files were modified (`git diff --stat` should only show files relevant to Phases 1–6).
- Write a final changelog summary.