# Homecoming Philadelphia

A free, private guide to real Philadelphia services for people coming home from incarceration — housing, food, ID, jobs, healthcare, legal help, and crisis support. No login, no tracking, works on any phone.

**Not** affiliated with any correctional agency. It works for the person coming home, and no one else.

## Why it's built the way it is

Every decision traces to how this audience actually lives (see [`docs/FOUNDATION.md`](docs/FOUNDATION.md)):

- **Crisis is one tap from everywhere.** People are 13–40× more likely to die of overdose in the first two weeks home, so a persistent "Get help now" bar (988, naloxone, same-day treatment) is on every screen.
- **A guided first-72-hours path** leads with a bed tonight, food today, and an ID, instead of a flat list of ten categories.
- **Plain language, English + Spanish.** ~70% of incarcerated adults read below a 4th-grade level; 1 in 10 Philadelphians is limited-English.
- **No surveillance.** No account, no PII, no third-party trackers or fonts. A "Leave this site" quick-exit clears state for shared phones.
- **Accuracy is the product.** Wrong info sends someone to a closed door. Every listing cites a real source, shows a "Last verified" date, and says "call to confirm" rather than inventing details. Nothing auto-publishes.

## Data

There is no single machine-readable reentry dataset for Philadelphia, and the complete directories (findhelp, PA 211) legally can't be republished (see [`docs/DATA-SOURCES.md`](docs/DATA-SOURCES.md)). So this is a **hand-verified directory, machine-seeded from City open data**, modeled on the open [HSDS](https://docs.openreferral.org/en/latest/hsds/overview.html) standard — with the goal of publishing the region's first open reentry data feed.

## Stack

Next.js (static export) · TypeScript · Tailwind v4 · self-hosted Public Sans + Source Serif 4. Pure static HTML — fast on a cheap phone over 3G, offline-capable, host-agnostic, near-zero cost.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Status

Early build. Live: home, the "Just got out?" path, the crisis fast-path, category browse, and the trust/privacy pages, over a seed of real Philadelphia listings. Next: on-device search, full Spanish, PWA/offline, the verification pipeline, and expanding to 60–120 verified listings.
