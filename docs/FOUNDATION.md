# Reentry Finder — Foundation (v1)

*Research + design foundation. Synthesized from 5 parallel research tracks (users, UX, design systems, accessibility, architecture). Data-source deep-dive: see DATA-SOURCES.md.*

**One-liner:** A free, private guide to real Philadelphia services for people coming home from incarceration — no login, no tracking, works on any phone.

## Vision

A calm, trustworthy public utility that helps the roughly 25,000 people who return to Philadelphia from incarceration each year — plus their families and the caseworkers who support them — find real, verified services fast: a bed tonight, food today, an ID, a job, healthcare, benefits, legal aid, mental-health and substance-use help, and a way to get there. It behaves like a durable civic institution, not a startup or a generated side project: it works instantly and anonymously on a cheap, data-capped phone or a library computer; it reads at a 6th-grade level in English and Spanish; it leads with what a person needs in the first 72 hours and keeps life-saving crisis and overdose help one tap away. Every listing shows when it was last verified, cites a real source, and never invents a fact. Dignity is the design constraint: the tool never asks who you are, never labels you, and never makes you disclose your record to get help.

## Name options

- Homecoming Philadelphia
- First Steps Philadelphia
- Philadelphia Reentry Guide
- Waypoint Philadelphia
- Common Ground Philadelphia

## Target users

- **Newly released person, first 72 hours** — needs: A bed tonight, food today, a way to reach a crisis or overdose line, and a path to an ID — the survival tier, findable in seconds without reading much.; constraints: Cheap or shared prepaid phone with a data cap, only gate money for transit, may read below a 4th-grade level, wary of anything that feels like surveillance, no fixed address.
- **Returning citizen stabilizing, first 30 days to a year** — needs: An ID and vital documents (the master key), then jobs that hire people with records, Medicaid/SNAP benefits, MAT and healthcare, legal aid for expungement, longer-term housing.; constraints: Same device and literacy limits; parole/probation obligations that conflict with library and office hours; internalized stigma that makes interrogation-style forms a deterrent.
- **Family member acting as informal navigator** — needs: To quickly find a specific verified service for a loved one and hand it off — an address, phone, hours, and what to bring — by print, text, or a shareable link.; constraints: May be searching on the person's behalf on their own phone; needs the info to survive leaving the site (offline, printed, or texted).
- **Caseworker, peer navigator, or reentry coordinator** — needs: To search and filter by need and neighborhood, trust that listings are current, and share a verified listing with a client in under a minute.; constraints: Chronic pain is stale, hard-to-find resource lists; needs visible freshness and a report-bad-info path; often works from a shared desktop.
- **Limited-English (Spanish-first) user** — needs: To complete every core task in Spanish, with a language toggle reachable before any interaction and human-reviewed legal/benefits terms.; constraints: About 1 in 10 Philadelphians is limited-English-proficient; machine-translated eligibility text can be dangerously wrong and erodes trust.

## v1 scope — included

- Fully anonymous directory (no account, no PII, usable with JavaScript off) across ten categories: housing, food, ID & documents, jobs, healthcare, public benefits, legal aid, mental health & substance use, transportation, and a distinct crisis/harm-reduction tier
- A 'Just got out?' first-72-hours guided path that foregrounds shelter tonight, food today, crisis help, ID, and transit ahead of longer-term needs
- A persistent one-tap 'Get help now' crisis fast-path: 988, naloxone/Narcan access, MAT providers, and tonight-open shelter with direct tel: links, reachable from every screen
- List-first results (never a landing map): single search on ZIP/neighborhood + plain-language need, big icon+label category tiles as the alternate entry, and first-person situation filters ('I just got out', 'no ID', 'no phone', 'I have kids')
- Action-first listing detail: 'What to do right now', honest eligibility (record-friendly? parole/probation OK? ID required?), hours with open-now, what to bring, text directions with an 'open in your maps app' deep link, languages spoken, cost, and a visible 'Last verified' date
- Per-listing Print / Text-this / Copy-link that generate a stripped high-contrast one-pager for cheap, shared, low-data phones
- A local-storage 'My list' (on-device, no server profile, easy to clear)
- Full English + Spanish translation with human-reviewed legal/benefits terms and a language toggle on the first screen
- Trauma-informed 'Leave this site' quick-exit that redirects to a neutral page and clears state
- Offline-capable PWA with a 'showing saved data from [date]' indicator
- 'Last verified' date and a 'report this is wrong / it's closed' control on every listing, plus a plain-language 'How we verify' and privacy page

## v1 scope — excluded / deferred

- Any interactive map on first load — deferred to v1.1 as a lazy-loaded progressive enhancement (MapLibre + self-hosted Protomaps PMTiles); v1 uses text directions and a device-maps deep link
- User accounts, server-side profiles, phone/email capture, or precise-location requests
- Third-party analytics, ad trackers, session recording, or any non-self-hosted CDN/font
- Languages beyond English and Spanish (Simplified Chinese, Portuguese, Vietnamese, Russian, Arabic on the roadmap, matching the City's vital-document set)
- Live scraped feeds or auto-published data — all listings pass mandatory human verification before going live
- AI chatbot, appointment booking, referrals, or messaging

## Key screens

### Home
Orient in under five seconds with dignity and no friction: choose language, jump to the right-now path, or browse.
- Language toggle (Español shown in its own name) before any interaction
- Prominent 'Just got out?' entry to the first-72-hours path
- Ten icon+label category tiles (icon always paired with a plain word)
- Single search accepting ZIP/neighborhood + plain-language need
- Persistent high-contrast 'Get help now' bar
- One-sentence trust note: 'We don't track you. We don't ask who you are.'
- Calm 'Leave this site' quick-exit control

### Get help now (crisis fast-path)
Put life-safety resources one tap from anywhere, given the 13–40x overdose risk in the first two weeks.
- 988 and 24/7 crisis lines with direct tel: links
- Naloxone/Narcan access points and MAT providers
- Tonight-open shelter and food-available-today, filtered to open-now
- No forms, no filters to wade through, no login

### Results list
Let people scan real options fast on a slow phone; the primary results surface, never a map.
- Scannable cards: name, distance, open-now, key eligibility flags, one-line 'what you get'
- First-person situation filters mapped onto the taxonomy behind the scenes
- Synonym-aware search ('food stamps' finds SNAP, 'halfway house' finds transitional housing)
- 'Last verified' date on each card
- Optional 'View on map' deferred to v1.1

### Listing detail
Answer 'what do I do, am I eligible, is it open' honestly before any description.
- 'What to do right now' plain steps
- Honest reentry eligibility (record-friendly, parole/probation, ID required)
- Hours + open-now, what to bring, cost, languages spoken
- Text directions + 'open in your maps app' deep link (no embedded map)
- Print / Text-this / Copy-link one-pager
- 'Last verified [date]' + 'Report this is wrong'
- Source citation to the authoritative page

### Just got out? — first 72 hours
Sequence survival needs so an overwhelmed person is not handed a flat list of ten categories.
- Ordered path: safe place tonight, food today, crisis/overdose help, ID & documents, transit
- Plain task-first headings ('Find a place to stay tonight')
- One idea per screen, icons alongside text
- Hand-off to a peer navigator or Neighborhood Resource Center rather than pure self-service

### My list
Let anyone assemble and carry a shortlist without an account or data trail.
- On-device (local storage) saved listings
- Print / Text / Copy the whole list
- Prominent, easy 'Clear my list' for shared or borrowed phones
- Clear note that nothing is sent to a server

### About / How we verify / Privacy
Earn institutional trust by being explicit about who runs this, how listings stay current, and what is (not) collected.
- Who operates the site and how it's funded
- Verification method and re-verification cadence
- Plain-language 'we don't track you, require no login, and never share searches' statement
- Report-bad-info path and update contact

## Design language

**Principles**
- Legibility over style — type and contrast chosen for the hardest-to-read moment on a cheap screen, the way road-sign typefaces are
- Plain language, one idea per screen, ~6th-grade reading level, task-first headings phrased as the user's goal
- Dignity and no labeling — address the user as 'you' or 'returning citizen', never 'offender/felon/inmate', and never require disclosing a record to browse
- Calm, not urgent — no countdowns, dark patterns, or interrogation-style forms; safety, predictability, and user control are requirements
- Ruthless restraint — every element and every byte must justify itself against the slow-connection, low-literacy user
- Institutional trust over startup polish — visible freshness and honesty matter more than visual flourish

**Visual direction:** Borrow the discipline of government design systems (USWDS grade-based accessible color, GOV.UK legibility-first type, an 8px rhythm) but escape both the 'gov-generic' and 'AI-slop' looks through warm neutrals, one editorial heading voice, a single consistent radius, and extreme motion restraint. Warm off-white paper background (not pure white, to cut glare and read as human/civic) with near-black ink (not pure black, to avoid halation). One calm, deep institutional blue for primary actions and links; one muted gold/amber accent reserved for emphasis and a solid focus ring — never a glow. Hairline borders and a single subtle shadow token instead of heavy elevation; one small radius (4–6px) on every button, card, input, and tag, no exceptions. Default to no decorative imagery; use real consented Philadelphia photography that shows people with agency, or nothing — never stock diverse-office scenes or 3D blobs. Icons are literacy aids: one coherent outline family, single stroke weight, always paired with a text label, one stable icon per category used everywhere.

**Color & type:** Type: self-hosted Public Sans (USWDS, optically system-like, free) for UI/body at a fixed modular scale (16/18/20/24/32/40px, rem-based, min 18px body on mobile), body line-height 1.5, measure capped ~60–72 chars, always left-aligned. One sober editorial heading face (Source Serif 4) for page and section titles only; two families maximum. Color: build every pair with the USWDS grade method so contrast is provable by arithmetic — paper ~#F7F5F1, ink ~#1B1B1B, primary blue ~#1B4B73 (grade ~60), one warm gold accent and focus ring, semantic success/error/warning each ≥50 grades from their background. Body text targets AAA 7:1; no gradients anywhere, especially purple→blue.

**Trust signals**
- A visible 'Last verified [date]' on every listing — the strongest trust signal a directory has
- An easy 'report this is wrong / it's closed' control on every listing
- A named, human 'How we verify' page and real footer (who runs it, how it's funded)
- A plain-language 'We don't track you. We don't ask who you are.' note on the home screen
- Every listing cites its authoritative source; blank fields say 'call to confirm' rather than inventing hours/eligibility
- All fonts and assets self-hosted; zero third-party trackers; usable over HTTPS with no login

**Anti-patterns (avoid)**
- A map as the landing or primary results view — the single clearest generic-startup tell and an accessibility/data liability
- Purple-to-blue gradients, glows, and plastic 3D blobs
- Inter-plus-system-fallback with no typographic contrast
- Uniform 16px pill radius and identical padding on everything
- An oversized marketing hero with a vague headline
- Stock photos of diverse teams in sunny offices; pity imagery
- Login walls, email capture, 'create an account to continue'
- Icon-only navigation; spinners with no skeletons; autoplay, parallax, scroll-jacking
- Pure #000 on #FFF (halation) and any third-party CDN/font that leaks IPs

## Accessibility requirements

- WCAG 2.2 Level AA is the floor; adopt four AAA criteria as hard requirements for this audience: 7:1 body-text contrast (1.4.6), 44×44px tap targets with ≥8px spacing (2.5.5), ~6th-grade reading level measured by Flesch-Kincaid (3.1.5), and a mechanism to explain unusual words like parole, SNAP, expungement (3.1.3)
- Non-text contrast ≥3:1 on buttons, field borders, icons, and focus rings (1.4.11); never convey category or state by color alone — pair with label and icon shape (1.4.1)
- Full keyboard operability with no traps and a clearly visible focus indicator (≥2px, ≥3:1); ensure focus is never obscured by sticky headers or the crisis bar (2.1.1, 2.4.7, 2.4.11)
- Native HTML landmarks, a single logical H1 with nested headings, accessible names on all controls including icon buttons, and aria-live regions for async result counts (1.3.1, 4.1.2, 4.1.3)
- Forms with persistent visible labels (not placeholder-only), text-plus-icon error identification with a described fix, no redundant re-entry of ZIP/language within a session (3.3.1, 3.3.3, 3.3.7)
- Content reflows to a single column at 320px width / 400% zoom with no horizontal scroll, tolerates user text-spacing overrides, and supports both orientations (1.4.10, 1.4.4, 1.4.12, 1.3.4)
- Honor prefers-reduced-motion (disable non-essential animation); transitions only 150–200ms for state feedback; no flashing >3×/sec (2.3.3, 2.3.1)
- html lang set per active language and lang marked on inline foreign phrases; Spanish shipped at launch with human-reviewed legal/benefits strings and the toggle labeled in its own language (3.1.1, 3.1.2)
- No account required for the core flow; if any caseworker login is ever added, no CAPTCHA or cognitive-function test, and password-manager paste allowed (3.3.8)
- Tested with VoiceOver (iOS) and TalkBack (Android) on real low-end devices, plus automated axe/Lighthouse checks in CI — not just a fast laptop
- Layouts built to tolerate +40% text expansion for translation without truncation or broken buttons

## Data plan

**Approach:** Model every listing on Open Referral HSDS 3.1 (organization / service / location / service_at_location core objects, each with a UUID), overlaying Open Eligibility as the base taxonomy with a reentry-specific top level (housing, food, ID & documents, jobs, healthcare, public benefits, legal aid, mental health & substance use, transportation, crisis/harm-reduction). Populate and prominently display the reentry-critical HSDS supporting fields: eligibility (record-friendly, time-since-release, parole/probation OK), required_document (ID needed first), language, cost_option (free/sliding-scale), schedule (hours), and accessibility. A standalone build-time ingest pipeline (GitHub Actions cron) pulls source directories, normalizes to HSDS, validates against the JSON Schema, and geocodes addresses — then opens a diff as a pull request for MANDATORY human verification before anything publishes. Verified HSDS JSON is committed to the repo and baked into the static build; nothing is auto-published and nothing is fetched at request time.

**Primary sources**
- Philadelphia Reentry Coalition Reentry Services List / Quick References (phlreentrycoalition.org/reentry-resources-list) — coalition-curated, topic-organized
- City of Philadelphia Office of Reentry Partnerships / Division of Reentry and its Neighborhood Resource Centers (phila.gov/departments/division-of-reentry)
- PA 211 and 211 SEPA Network of Care Philadelphia Reentry directory (pa211.org; reentry.networkofcare.org/philadelphia-pa)
- OpenDataPhilly (opendataphilly.org), including SEPTA GTFS/stops for transportation
- Philadelphia Language Access Philly / Office of Immigrant Affairs for translated-service and language priorities (phila.gov/programs/language-access-philly)
- Philadelphia Department of Public Health harm-reduction / naloxone and MAT resources for the crisis tier (each entry human-verified against the authoritative page before publishing)

**Freshness strategy:** Every record carries HSDS metadata for source and last_verified, shown as 'Last verified [date]' on each card and detail page. Re-verification cadence is tiered: crisis/harm-reduction and tonight-open shelter monthly, everything else quarterly, with the cron pipeline flagging drift for human review. A 'report this is wrong / it's closed' control on every listing feeds the same review queue. Stale civic data is treated as a defect, not a cosmetic issue.

**Safety notes:** No accounts, no PII, no phone/email/precise-location capture, and zero third-party analytics or trackers — stated plainly on the home screen. 'My list' lives only in on-device storage with an easy clear, so a shared or borrowed phone leaves no trail. The quick-exit clears state and redirects to a neutral page. Harm-reduction and crisis resources are reachable in one tap from every screen. Listings are never fabricated: unknown fields display 'call to confirm', and no hours, eligibility, or 'what to bring' are invented — human verification against a real source is mandatory before publishing, because sending someone in crisis to a closed door wastes scarce transit money and can cost a life.

## Architecture

**Stack**
- Next.js App Router with static export (output: 'export'), TypeScript — one pre-rendered HTML file per route, no runtime SSR or serverless functions
- Client-side FlexSearch index prebuilt at build time over the HSDS fields (dataset is only hundreds–thousands of records; no hosted search service, no query leaving the device)
- Committed HSDS 3.1 JSON as the sole data source, resolved entirely at build time
- Self-hosted Public Sans + Source Serif 4 and one outline icon set (no third-party CDN or font host)
- Installable offline-first PWA via a service worker (app shell cache-first, data network-first-with-fallback, images stale-while-revalidate) with a 'saved data from [date]' banner
- Standalone build-time ingest/normalize/verify pipeline (Node or Python) on a GitHub Actions cron that opens a data-diff PR for human review
- Interactive map deferred to v1.1 as a lazy-loaded MapLibre GL + self-hosted Protomaps PMTiles enhancement; v1 ships text directions and a device-maps deep link

**Hosting:** Cloudflare Pages as primary — unlimited free-tier bandwidth and no non-commercial clause, a proper fit for a public civic service — with Vercel as an interchangeable fallback. Because the build is a pure static artifact (output: 'export'), it is host-agnostic with no lock-in.

**Rationale:** A reentry directory is read-mostly and changes on the order of days to weeks, so nothing needs request-time rendering. Pure CDN-cached static HTML is the fastest possible experience on a cheap Android over 3G/4G — no cold starts, no per-request compute — and is trivially service-worker-cacheable for offline use, the exact resilience this audience needs. Client-side search keeps queries private and free. Decoupling volatile data-gathering into a human-reviewed build-time pipeline guarantees listings are real and current without ever risking auto-published bad data. Explicitly refusing a map on first load keeps the JS bundle tiny and dodges the clearest 'generic startup / AI side-project' tell.

**Key decisions**
- Static-first (SSG) over SSR/serverless — speed, cost, offline, portability, and no cold starts on cheap phones
- No interactive map in v1 — text directions + device-maps deep link now; MapLibre/PMTiles lazy-loaded later, never required to reach a listing
- Human-in-the-loop verification pipeline that opens a PR rather than auto-publishing — accuracy is the product's whole value
- Core directory works with JavaScript disabled and on a strict performance budget enforced in CI (LCP ≤2.5s on throttled mid-tier Android, INP <200ms, CLS <0.1)
- Self-host everything and ship zero third-party trackers so the tool can never read as surveillance

## Milestones

- **Foundation: data model + design system + seed data** — HSDS 3.1 schema vendored and validating in CI, USWDS-grade design tokens (color/type/spacing/radius), and a human-verified seed dataset for the survival tier (crisis/harm-reduction, tonight-open shelter, food, ID & documents).
- **Core anonymous directory (EN + ES)** — Home, ZIP/need search, first-person filters, list-first results, action-first listing detail, and category browse — fully usable with no login and with JavaScript off, in English and Spanish, passing WCAG 2.2 AA in automated checks.
- **Crisis fast-path + trust layer** — Persistent one-tap 'Get help now' (988, naloxone, MAT, open-now shelter/food), trauma-informed 'Leave this site' quick-exit, per-listing 'Last verified' + report-bad-info, and the plain-language How-we-verify/Privacy page.
- **Portability + offline** — Per-listing Print / Text-this / Copy-link one-pager, on-device 'My list' with easy clear, installable PWA with offline data and a 'saved from [date]' indicator, and the performance budget enforced in CI.
- **Verification pipeline + co-design + launch** — GitHub Actions ingest→normalize→PR human-review workflow with a tiered re-verification cadence, card-sort and prototype testing with returning citizens, family, and caseworkers, VoiceOver/TalkBack testing on real low-end devices, and deploy to Cloudflare Pages.

## Top risks

- Stale or invented listings are the top real-world harm — a person with no data or bus fare travels to a closed door; mitigated by mandatory human verification, visible 'last verified' dates, a report path, and never fabricating fields.
- Any perceived surveillance (a login wall, phone/email capture, precise-location prompt, or third-party tracker) silently drives away exactly the users the tool is for; mitigated by no accounts, no PII, self-hosted assets, and a plain no-tracking statement.
- Burying harm-reduction and crisis resources is a life-safety risk given the 13–40x overdose mortality in the first two weeks; mitigated by a persistent one-tap 'Get help now' reachable from every screen.
- Map-first or heavy-JS design blows the performance budget on cheap phones and reads as a generic AI side-project; mitigated by static-first, list-first, JS-optional, and deferring the map.
- Machine-translated legal, benefits, or eligibility content can be dangerously wrong; mitigated by human-reviewed Spanish strings and 'call to confirm' over guessing.
- Looking like a startup rather than a public institution undermines the whole premise; mitigated by restrained institutional visual language, real freshness signals, and a transparent human footer.
- Skipping co-design with returning citizens, family, and caseworkers risks tone-deaf copy and wrong eligibility assumptions; mitigated by card-sort and prototype testing before launch.
- Offline 'My list' on a shared or borrowed device could expose sensitive searches; mitigated by on-device-only storage, an easy clear, and a state-clearing quick-exit.

---

# Appendix — research summaries

## Users & domain

Research on the real needs and constraints of people reentering after incarceration in Philadelphia (plus the family and caseworkers who help them) points to one dominant design conclusion: this tool must behave like a trustworthy public utility that works instantly, anonymously, and on a cheap phone with almost no data — not like a login-gated startup app. Reentry needs follow a hard time-sequence (survival in the first 72 hours, stabilization in the first 30 days, longer-term rebuilding after) and are gated by a single master document — a state ID — that unlocks nearly everything else. The user base skews low-literacy (roughly 70% of incarcerated adults read below a 4th-grade level), often limited-English (about 1 in 10 Philadelphians is limited-English-proficient, and 25,000 people return to Philadelphia from incarceration annually), deeply distrustful of data collection and surveillance after years inside a monitored system, and dependent on shared or prepaid phones with data caps and public-library computers. Stigma and internalized shame are among the strongest deterrents to seeking help, and the first two weeks post-release carry a 13-40x elevated overdose death risk, so surfacing life-saving harm-reduction and crisis resources is a safety imperative, not a nice-to-have. Every one of these realities converts into a concrete, testable UX requirement below. Sources are current (2023-2026) and cited per finding.

**Recommendations**
- No account, no login, no PII: the entire finder must be fully usable anonymously. Collect no name, email, phone, or location beyond an optional, on-device neighborhood/ZIP. Testable: a first-time user can find shelter, food, and a crisis line and view full listing details without ever entering data or being prompted to sign up.
- No third-party trackers or analytics that fingerprint users; if any usage counting exists, make it privacy-preserving and disclosed. Testable: a network inspection shows zero calls to ad/analytics/marketing domains, and a one-sentence plain-language privacy note ('We don't track you. We don't ask who you are.') is visible on the home screen.
- Plain language at a 4th-6th grade reading level everywhere. Testable: every screen scores at or below a 6th-grade Flesch-Kincaid level, sentences average under 15-20 words, and no unexplained jargon or acronyms appear.
- Icons + words together for every category and action, never icon-only. Testable: each of the 9-10 need categories has a recognizable icon paired with a plain label, and the interface is navigable by someone who reads slowly.
- Lead with the time-sequenced survival needs. Testable: the default home view foregrounds 'right now' needs (shelter tonight, food today, crisis/overdose help, ID/documents, transportation) above longer-term ones (jobs, education), and there is an explicit 'Just got out?' / first-72-hours entry path.
- Treat ID/vital documents as a first-class category and surface dependencies. Testable: 'ID & documents' is a top-level category, and housing/benefits/jobs listings note when a valid ID is typically required first.
- Make harm-reduction and crisis resources reachable in one tap from anywhere. Testable: a persistent 'Get help now' affordance leads to 24/7 crisis lines, naloxone/Narcan access, and MAT providers from every screen, and these are never more than one interaction deep.
- Full Spanish translation at launch, with Chinese and other top Philadelphia languages on the roadmap; a language toggle visible before any interaction. Testable: a Spanish-only reader can complete every core task, and switching language is possible from the first screen without English-only steps.
- Low-bandwidth, mobile-first, works on old devices and library desktops. Testable: initial page weight is small (target well under ~500KB, ideally far less), core content renders on throttled 3G in a few seconds on a low-end Android, no feature requires a modern browser, autoplay, or app install, and it works on a shared/public library computer.
- Offline resilience and share/print/text output for each listing. Testable: a caseworker or family member can produce a clean printable or copy-paste/text-able version of any listing (name, address, phone, hours, what to bring, eligibility), and previously viewed content remains legible with a dropped connection.
- Adopt a trauma-informed 'quick exit' pattern and calm, non-alarming visuals. Testable: a clearly labeled 'Exit / Leave this site' control redirects to a neutral page (e.g., a weather or search page) and can be triggered fast; the UI avoids flashing, urgency dark-patterns, countdowns, and interrogation-style forms.
- Dignified, non-labeling language and tone throughout. Testable: no use of 'offender,' 'felon,' 'ex-con,' or 'inmate' in UI copy; addresses the user as 'you' or 'returning citizen,' and no screen requires disclosing one's record to browse.

## UX patterns

Best-in-class civic resource directories (findhelp/Aunt Bertha, 211, Code for America's GetCalFresh, ACCESS NYC/HRA, Streetlives-YourPeer, Open Referral/Ohana) converge on a small set of UX patterns that a Philadelphia reentry finder should adopt: a single low-friction search anchored on location + need, filtering that mirrors how users describe their situation (not provider jargon), a list-first (not map-first) results view, dignity-forward plain-language service detail pages that lead with concrete "what to do next / who is eligible / is it open," and account-free save/share/print/SMS. The most trust-defining insight across all of them is that vulnerable and justice-involved users distrust "the system" and stale data, so verified/community-validated listings, visible last-updated dates, honest eligibility, and a no-surveillance posture matter more than visual polish. The fastest way to look like a generic AI side-project is to lead with a map, use a startup marketing tone, gate anything behind login, and show unverified/undated listings. Sources are cited per finding; note I could not extract deep detail on findhelp's exact share/print widgets or reach YourPeer's statement page (403), so those patterns are drawn from adjacent verified sources.

**Recommendations**
- Ship a list-first results experience: ZIP/neighborhood + plain-language need as the single entry point, big category tiles as the alternate path, and a scannable card list (name, distance, open-now, key eligibility flags, one-line 'what you get'). Make map an explicit secondary 'View on map' toggle, never the landing view.
- Build the data model on Open Referral HSDS with Open Eligibility as the base taxonomy, overlaid with a reentry-specific top level (housing, jobs, food, healthcare, ID/documents, public benefits, legal aid, mental health & SUD, transportation). This buys interoperability with 211/city data and avoids a bespoke, amateur-looking category tree.
- Make every service detail page action-first and honest: 'What to do right now' steps, reentry-relevant eligibility (record-friendly? parole/probation OK? ID needed?), hours + open-now, directions/street-entrance photo, what to bring, and a visible 'last verified' date with an easy 'this is wrong / it's closed' report control.
- Add a persistent one-tap 'I need help now' fast-path that filters to tonight-open shelter, food-today, and 988/crisis lines with direct tel: links, separated from the long-term planning flow.
- Keep everything account-free: local-storage 'my list', shareable no-PII links, and per-listing Print / Text-this / Copy-link that generate a stripped high-contrast one-pager with tel: phone numbers — engineered for cheap, shared, low-data Android phones.
- Adopt the GetCalFresh/ACCESS NYC craft baseline: ~6th-grade plain language in a caseworker's helping voice, mobile-first, English + Spanish + common Philly languages, WCAG AA, and a trauma-informed, non-judgmental tone ('returning citizens', never 'offender'). State your no-tracking/no-surveillance data posture plainly.
- Before build-out, run a card sort and prototype tests with returning citizens, family members, and caseworkers to validate the taxonomy, first-person eligibility phrasing, and the crisis flow — co-design is both the ethics and the quality differentiator here.

## Design systems

An opinionated, research-grounded visual direction for a Philadelphia reentry resource finder that reads as a trustworthy public institution rather than an AI-generated startup. The core strategy: borrow the discipline of government design systems (USWDS, GOV.UK) — legibility-first typography, a grade-based accessible color method, an 8px rhythm — but escape the "gov-generic" and "AI-slop" monocultures through warm neutrals, one editorial heading voice, real dignified Philadelphia photography (or nothing), extreme motion restraint, and craft "tells" (one consistent radius, real empty/error/offline states, visible data-freshness). Layer trauma-informed and low-bandwidth constraints on top: quick-exit, plain language, save-and-resume, no surveillance, works on a cheap phone on a slow connection. Concrete tokens below are ready to seed a design system.

**Recommendations**
- TYPOGRAPHY — Adopt Public Sans (USWDS, open-source, government provenance, optically system-like) as the UI/body face; it is legible on cheap Android screens and free to self-host. To escape the Inter/Public-Sans 'gov-generic' monoculture, pair it with ONE sober editorial heading face with real character but not trendiness — a humanist serif like Source Serif 4, or the condensed Public Sans variant — used only for page titles and section headers. Two families maximum. Lock a fixed modular scale (e.g. 16 / 18 / 20 / 24 / 32 / 40px, rem-based, min body 18px on mobile), body line-height 1.5, headings 1.2, measure capped at 60–72 characters. Never justify text; left-align for low-literacy scanning.
- COLOR — Build the palette with the USWDS grade method so every pair is provably accessible. Anchor on a calm, deep institutional blue (grade ~60, e.g. near #1b4b73) for primary actions/links, on a WARM off-white paper background (#F7F5F1-ish, NOT pure #FFFFFF — reduces glare/halation and reads as human/civic) with near-black ink (#1B1B1B, NOT #000). One restrained warm accent — a muted gold/amber echoing institutional signage — reserved for emphasis and the focus ring (a solid 2–3px ring, GOV.UK-style, never a soft glow). Semantic set tuned by grade: success green, error red, warning amber, each ≥50 grades from its background. Ban gradients entirely, especially purple→blue. Every foreground/background pair must clear WCAG AA (4.5:1 text / 3:1 UI); target AAA for body text.
- SPACING & RHYTHM — Commit to an 8px base grid (4px half-step allowed) for all padding, margins, and gaps, expressed in rem. Derive a small fixed spacing scale (4/8/12/16/24/32/48/64) and use ONLY those values — inconsistent padding is the single clearest generated-design tell. Establish a baseline vertical rhythm so stacked cards, form fields, and headings align optically. Generous whitespace, but purposeful: a dense, scannable directory beats an airy marketing hero.
- RADII & SHAPE — Pick ONE small radius (4px or 6px) and apply it to every button, card, input, and tag — no exceptions, no mixed radii. Avoid the uniform-16px-pill look that screams template. Use 1px hairline borders and very subtle elevation (a single soft shadow token) instead of heavy drop shadows; flatter reads as more institutional and renders faster.
- ICONOGRAPHY — Use one coherent open-source line-icon family (e.g. USWDS icons / Material Symbols outlined) at a single consistent stroke weight on a 24px grid. Never mix filled and outline styles arbitrarily. Icons are literacy aids: ALWAYS pair an icon with a text label (never icon-only navigation), and map each service category (housing, jobs, food, healthcare, ID/documents, benefits, legal, mental health/SUD, transportation) to one stable, concrete icon used everywhere for that category.
- IMAGERY & ILLUSTRATION — Default to NO decorative imagery. Where a human touch helps, use real, consented, dignified Philadelphia photography that depicts people with agency (not pity, not stock diverse-office scenes, not AI 3D blobs). If photography isn't available, use a single restrained, human-centered illustration style with flat non-plastic rendering, applied sparingly for empty states and category headers only. Category tiles should lead with the labeled icon, not imagery. Never use decorative imagery that costs data on a slow connection.
- MOTION — Extreme restraint. Transitions 150–200ms with a standard ease, used ONLY to communicate state change or feedback (button press, disclosure open, toast appearing). No parallax, no scroll-jacking, no decorative auto-playing animation, no identical fade-in on every element. Fully honor prefers-reduced-motion (disable non-essential motion). Motion should never be the reason a cheap phone stutters.
- REAL STATES — Design and build genuine empty, loading, error, offline, and no-results states as first-class screens, not afterthoughts (their absence is a top craft tell). Prefer content skeletons over spinners on slow connections; show partial results as they load. Error messages must be plain-language, specific, and actionable ('We couldn't load listings. Check your connection and try again' + retry), never a raw code. Include a genuine offline state given limited-data users, and consider caching last-seen results.
- CONTENT DESIGN — Write to roughly a 6th-grade reading level: short sentences, common words, task-first headings phrased as the user's goal ('Find a place to stay tonight'), no bureaucratic jargon or acronyms without expansion. Use respectful, non-stigmatizing framing ('returning citizen', 'people leaving incarceration'). For every listing, make the load-bearing facts explicit and scannable: address, hours, phone, eligibility, cost/free, walk-in vs referral, languages spoken, transit access. Build layouts that tolerate +40% text expansion for translation, and structure for straightforward multilingual support.
- TRUST & ANTI-SURVEILLANCE TELLS — Self-host all fonts and assets (no third-party CDNs that leak user data); ship zero third-party trackers and only privacy-preserving, minimal analytics, stated plainly. Add a persistent, calm quick-exit ('Exit this Page') and avoid any dark patterns, forced accounts, or data collection that isn't essential. Put a real, human footer: who runs this, how listings are verified, a privacy statement in plain language, and a way to report bad info. Surface a 'Last verified' date on every listing — visible data freshness is the strongest trust signal a directory has. Aim for the page to be usable even with JavaScript disabled and under a strict performance budget (fast on 3G, small payloads).

## Accessibility

Concrete, checkable accessibility and data-standards requirements for a Philadelphia reentry resource finder. Baseline is WCAG 2.2 Level AA (W3C Recommendation, Oct 2023), with specific AAA targets called out where this audience justifies them (low literacy, cheap phones, cognitive load, distrust). Because the average person entering incarceration reads at roughly a 6th-grade level and ~70% of incarcerated adults read below a 4th-grade level, several WCAG AAA criteria (7:1 contrast, 44px targets, plain-language reading level, mechanism to identify unusual words) should be treated as effective requirements, not stretch goals. Data should be modeled on OpenReferral HSDS 3.0 (four core objects: organization, service, location, service_at_location, plus supporting objects) so listings are interoperable, machine-verifiable, and exportable to 211/city systems. Spanish is mandatory for Philadelphia; the city's own vital-document set also covers Simplified Chinese, Portuguese, Vietnamese, Russian, and Arabic, which is a sensible i18n roadmap. Offline/PWA and a hard performance budget are core requirements, not enhancements, given data-constrained low-end phones.

**Recommendations**
- Adopt WCAG 2.2 AA as the compliance floor but write the acceptance criteria at AAA for the four things this audience most needs: 7:1 text contrast (1.4.6), 44px targets (2.5.5), 6th-grade reading level (3.1.5), and a define-unusual-words mechanism (3.1.3). Put these in the Definition of Done.
- Make the primary find-a-resource flow require NO login and work with JavaScript disabled/slow: server-render a text list of results filterable by ZIP/neighborhood + category, with the interactive map as a progressive enhancement and always a single-pointer/list alternative (satisfies 2.5.7 and low-bandwidth needs at once).
- Model the data layer on HSDS 3.0 from day one (organization / service / location / service_at_location + supporting objects), with UUID ids and metadata for source + last_verified. This buys interoperability with 211/city open data and makes 'is this listing real and current' checkable.
- Prioritize populating and prominently displaying the reentry-critical HSDS fields on every card: cost (free/sliding scale), eligibility (felony-friendly, time-since-release), required_document, languages offered, accessibility, and verified date. Never fabricate hours or eligibility - leave blank and label 'call to confirm'.
- Externalize all UI strings for i18n on day one; ship English + Spanish at launch with human-reviewed translation of legal/benefits terms, and sequence additional languages per the city's vital-document set (Simplified Chinese, Portuguese, Vietnamese, Russian, Arabic - include RTL support for Arabic).
- Build as an installable offline-first PWA with a documented caching strategy (app-shell cache-first, data network-first-with-fallback, images stale-while-revalidate), a 'saved data from [date]' indicator, and per-resource save-for-offline.
- Set an enforced performance budget in CI (LCP <=2.5s on throttled mid-tier Android, INP <200ms, CLS <0.1; JS payload cap) and run automated axe/Lighthouse accessibility + performance checks on every build, backed by manual VoiceOver/TalkBack testing on real low-end devices.
- Add a per-listing 'report a problem / this info is wrong' path and a re-verification cadence so data stays trustworthy; treat stale civic data as a defect.

## Architecture

Recommendation: build the reentry finder as a static-first Next.js App Router site using static export (output: 'export') with no runtime SSR or serverless functions. Bake the directory in at build time from a normalized HSDS 3.1 JSON dataset, do search entirely client-side over a prebuilt FlexSearch index, and render maps with MapLibre GL plus a self-hosted Protomaps PMTiles basemap (zero proprietary keys). Keep the ingest/normalize/verify pipeline as a separate build-time job (GitHub Actions cron) that commits human-verified HSDS JSON to the repo, so volatile data-gathering never touches the fast, cacheable runtime. Ship as an offline-capable PWA with progressive enhancement so the core directory works without JS. This is the fastest option on a cheap phone (pure CDN static HTML, no cold starts), the cheapest to run, the most host-portable, and the most trustworthy/durable. Caveat on the Vercel default: static export runs fine on Vercel Hobby, but Hobby is contractually non-commercial and bandwidth-capped, so keep the build host-agnostic and deploy to Cloudflare Pages (unlimited bandwidth, no commercial clause) as primary, with Vercel as an equivalent fallback.

**Recommendations**
- Scaffold a Next.js App Router app with output: 'export' (static export), TypeScript, and no runtime data fetching; resolve all data at build time from committed HSDS JSON.
- Adopt Open Referral HSDS 3.1 as the canonical data model; vendor the published JSON Schema and validate every record in CI.
- Build a standalone ingest/normalize/verify pipeline (Node or Python) on a GitHub Actions cron that opens a PR of data diffs for MANDATORY human review rather than auto-publishing, guaranteeing listings are real and current.
- Generate a FlexSearch prebuilt index at build time and load it client-side; support filtering by HSDS category (housing, jobs, food, healthcare, ID/docs, benefits, legal, mental health/SUD, transportation), eligibility, and location.
- Implement maps with MapLibre GL + a Philadelphia-region Protomaps PMTiles file on static storage; dynamic-import the map only on the map view and provide a fully functional non-map list/detail experience.
- Add a service worker to precache the app shell, HSDS data, and search index for offline use; ensure core pages render and navigate with JavaScript disabled.
- Deploy the static build to Cloudflare Pages as primary (unlimited bandwidth, no commercial-use clause), with Vercel as an interchangeable fallback; keep the build host-agnostic.
- Budget explicit accessibility and low-end-device testing: WCAG/ARIA, keyboard nav, high contrast, large tap targets, translation-ready strings, and Lighthouse audits on a throttled low-end mobile profile.
- Design for low literacy / limited English and privacy from the start: plain-language labels, icons, i18n hooks, a visible 'last verified' date per listing, and no third-party analytics/trackers that would undermine trust.
