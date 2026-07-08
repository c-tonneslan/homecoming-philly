# Philadelphia Reentry Resource Finder — Data Source Feasibility Assessment

Research date: 2026-07-08. Scope: assess concrete data sources only. Strategy (HSDS 3.1 model, human-verified build-time pipeline, "Last verified" dates) is assumed.

## TL;DR verdict

There is **no single machine-readable, redistributable, reentry-scoped dataset** for Philadelphia. The most complete directories (findhelp/PA 211, Network of Care) are the ones you legally **cannot** scrape or republish. The data that is legally clean and machine-readable (City of Philadelphia open data on ArcGIS/Carto) is **domain-fragmented** (food sites, health centers, HIV/PrEP, sharps boxes, PA treatment facilities) and not reentry-tailored.

**So: curate a hand-built directory, but seed and continuously cross-check it against City open-data point files.** A hybrid — machine-assisted, human-verified — matches the already-decided pipeline exactly. Realistic v1 target: **60–120 verified listings**, seeded primarily from (1) City of Philadelphia OpenDataPhilly point datasets, (2) the Philadelphia Reentry Coalition / Office of Reentry Partnerships authoritative pages, and (3) PDPH substance-use/harm-reduction pages. Use PA 211 / findhelp and Network of Care only as human reference for verification, never as an ingest source.

---

## Source-by-source findings

### 1. Philadelphia Reentry Coalition (phlreentrycoalition.org)

- **Covers:** Reentry-specific programs across housing, employment, legal, voting rights, discharge planning. Hub of guides plus a topic-organized "Philadelphia Reentry Services List."
- **Access:** HTML pages linking mostly to **PDFs**. The master **"Philadelphia Reentry Services List" spreadsheet is not published for download** — it is obtained by emailing a City staffer. A "Reentry Career Services Catalog" page exists on the live domain.
- **Format:** PDF + HTML. No API, no structured export.
- **Freshness:** Mixed and concerning — several flagship guides are dated **2016**. The Coalition/ORP contact info is current.
- **License/terms:** None stated; public-facing informational content. Reusing facts (org name/address/phone) is fine; copying PDF layout is not.
- **Note:** The domain `philadelphiareentrycoalition.org` is dead/parked (301-redirects elsewhere). Use **phlreentrycoalition.org** only.
- **Verdict:** **High authority, low machineability.** The best human-authoritative anchor for *which* orgs matter for reentry, and worth emailing for the services-list spreadsheet — but expect to hand-transcribe and re-verify, since much is stale PDF.

### 2. City of Philadelphia — Office of Reentry Partnerships / Division of Reentry & Neighborhood Resource Centers (phila.gov)

- **Covers:** ORP programs, microgrants, and the **Neighborhood Resource Centers** (NRCs) — physical hubs offering case management, workforce training, benefits navigation, and pardon/expungement help. Two NRCs open as of April 2026 (Kensington + North Philadelphia), more planned.
- **Access:** HTML pages on phila.gov; a "Get connected with reentry support" services page; some PDFs.
- **Format:** HTML/PDF. No API.
- **Freshness:** **Current and actively maintained** (2026 press releases). The authoritative source of truth for City-run reentry touchpoints.
- **License/terms:** Government informational content; facts freely usable.
- **Verdict:** **Authoritative and fresh, but small and unstructured.** Ideal for a handful of high-value, high-confidence anchor listings (the NRCs, ORP intake). Hand-curate.

### 3. PA 211 / 211 SEPA / Network of Care Philadelphia

- **Covers:** The broadest human-services directories touching Philadelphia, plus a dedicated **Network of Care "Post-Incarceration Reentry" directory for Philadelphia**.
- **Access / platform:** 211 SEPA runs on the **findhelp** platform (see #5) — no open export, scraping prohibited. Network of Care is a proprietary vendor directory — no documented public API or bulk export.
- **Format:** Web search UIs only. No structured feed offered publicly.
- **Freshness:** Actively operated; generally the most current *coverage*, but you can't legally ingest it.
- **License/terms:** **Prohibitive.** findhelp terms ban screen-scraping/duplication; Network of Care disclaims and does not grant reuse rights.
- **Verdict:** **Best coverage, worst usability for our purpose.** Use as a **human verification reference** (as a case manager would) to discover orgs and sanity-check hours/phones — never as an ingest source. The Network of Care reentry taxonomy is useful as a *category checklist*.

### 4. OpenDataPhilly (opendataphilly.org) — the workhorse

- **Covers:** 112 datasets in Health/Human Services. Directly relevant **point/location** datasets: **Community Services**, **Free Food and Meal Sites**, **Health Centers**, **Housing Counseling Agencies**, **HIV Testing Sites**, **PrEP Providers**, **Ryan White HIV Treatment Centers**, **Condom Distribution Sites**, **Sharps Drop Boxes**, **WIC Offices**, **Healthy Start Community Resource Centers**, and **Pennsylvania Healthcare Facilities** files (incl. **drug/alcohol treatment** and **mental health**). Plus **SEPTA GTFS** for transportation.
- **Access / format:** Most City datasets are on **ArcGIS Hub** and **phl.carto.com**, downloadable as **CSV / GeoJSON / KML / Shapefile** with **live API endpoints** (Carto SQL API, ArcGIS GeoServices/WFS). Exactly the machine-readable substrate we want. **SEPTA GTFS:** standard zip at `https://www3.septa.org/developer/gtfs_public.zip`, versioned on GitHub, plus GTFS-RT.
- **Freshness:** **Varies sharply by dataset — verify each.** City PDPH-maintained sets are periodically refreshed. But the flagship-sounding **"Community Services" dataset is a Code for Philly volunteer file last committed April 2016 — stale.** Mine it for candidate leads only.
- **License/terms:** Per-dataset; most City datasets are effectively open, but some read "License Not Specified." **Low but nonzero licensing risk — record the per-dataset license in the pipeline.**
- **Verdict:** **The primary machine-readable seed.** Legally cleanest, structured, geocoded, API-accessible. Fragmented and uneven freshness, so it seeds candidates that human verification must confirm. SEPTA GTFS is a clean transportation layer.

### 5. findhelp / Aunt Bertha — Philadelphia coverage & API

- **Covers:** Large national network; deep Philadelphia coverage (it powers 211 SEPA).
- **API reality:** APIs exist but are **commercial, sales-gated, partner/customer-only.** No public/free/nonprofit self-serve tier; access requires a contract.
- **License/terms:** **Explicitly hostile to our use.** CBO terms prohibit copying/duplicating "by any technique (screen-scraping, downloading, printing…)" and reserve all IP; the model is real-time viewing, not storage or republishing.
- **Verdict:** **Not realistically available**, and even with access the terms forbid the redistribution a public listing requires. **Exclude as a data source.** Fine as a personal lookup tool during verification.

### 6. Philadelphia Dept. of Public Health — harm reduction / naloxone / MAT

- **Covers:** Naloxone + fentanyl test strip access, harm-reduction team, low-barrier MAT/buprenorphine entry points. Key named resources: **NET Access Point** (24/7 MAT), **CareConnect Warmline**. Provider depth lives in DBHIDS Treatment Availability / CBH Provider Directory and substanceusephilly.com.
- **Access:** phila.gov + substanceusephilly.com HTML pages; CBH provider directory is a search UI, not an open dataset. Machine-readable adjuncts on OpenDataPhilly: Sharps Drop Boxes, Condom Distribution Sites, PA drug/alcohol treatment facilities (statewide, coarse).
- **Freshness:** Program pages current; the crisis lines are the most safety-critical listings and change — **must be human-verified on a tight cadence.**
- **Verdict:** **Hand-curate a small, high-trust harm-reduction/crisis set from authoritative pages.** This is the category where staleness is most dangerous — keep it small, verified, and frequently re-checked; supplement with the geocoded Sharps/Condom point files.

### 7. Published Open Referral / HSDS datasets for PA / Philadelphia

- **Finding:** HSDS 3.x is the right spec and is 211/findhelp-compatible in principle, **but no open, published HSDS-formatted dataset for Philadelphia or Pennsylvania exists.** PA 211's data sits inside findhelp (closed).
- **Verdict:** **We are the producer, not a consumer, of HSDS here.** Model curated data as HSDS 3.1 (organization / service / location / service_at_location, plus accessibility, phones, schedules) so we're portable and could later publish *our* directory as the region's first open HSDS feed — a genuine civic contribution.

---

## Decisive verdict & v1 data-sourcing plan

**No normalizable single source exists.** The complete directories are closed/prohibited; the open data is fragmented and unevenly maintained. **Curate a smaller, high-trust directory by hand, machine-seeded from City open data.** For a safety-critical reentry tool, a tightly human-verified 80-listing directory beats an auto-ingested 2,000-listing one that no one has confirmed.

**Start from these three sources:**

1. **OpenDataPhilly City point datasets** (ArcGIS/Carto CSV+GeoJSON+API) — the structured seed. Pull Health Centers, Free Food & Meal Sites, Housing Counseling Agencies, HIV/PrEP/Ryan White, Sharps Drop Boxes, WIC, and the PA drug/alcohol treatment file. Record per-dataset license. **Skip the 2016 "Community Services" CSV as authoritative — leads only.** Add **SEPTA GTFS** as the transportation layer.
2. **Philadelphia Reentry Coalition + City Office of Reentry Partnerships / NRCs** — authoritative reentry anchors (NRCs, ORP intake, legal/expungement, discharge planning). Email ORP for the "Philadelphia Reentry Services List" spreadsheet; hand-transcribe and re-verify.
3. **PDPH Substance Use / Harm Reduction pages** — small, safety-critical crisis/naloxone/MAT set, human-verified on a short cadence.

**Reference-only (do NOT ingest):** PA 211 / 211 SEPA / findhelp and Network of Care — a human's cross-check to discover orgs and confirm hours/phones. Never scrape or republish.

**Realistic v1 scope:** **60–120 verified listings**, ~8–12 per category across the ten domains, each modeled in HSDS 3.1 with a "Last verified" date and provenance field. Weight extra verification toward crisis/harm-reduction, healthcare, and housing (highest harm-on-error).

**Honest gaps & risks:**
- **Freshness is the core risk, not volume** — City point files drift; reentry-program listings are the least machine-maintained. The PR-gated human pipeline is the right mitigation; budget for it as ongoing, not one-time.
- **Licensing:** OpenDataPhilly is mostly open but per-dataset and sometimes "License Not Specified" — log the license for every field ingested. **findhelp/Network of Care republication is legally off-limits** — enforce the ingest ban in the pipeline, not just by convention.
- **Coverage gap:** ID/documents, benefits navigation, and reentry-specific legal aid have **no clean open dataset** and will be almost entirely hand-curated from authoritative org pages.
- **Opportunity:** publishing the verified directory as an **open HSDS 3.1 feed** would fill a real regional void and strengthen the civic case for the project.

## Key source links

- Philadelphia Reentry Coalition: phlreentrycoalition.org/reentry-resources-directories
- Office of Reentry Partnerships: phila.gov/departments/office-of-reentry-partnerships
- Network of Care Reentry Philadelphia: reentry.networkofcare.org/philadelphia-pa (reference only)
- findhelp CBO terms (why it's off-limits): company.findhelp.com/cbo-terms
- OpenDataPhilly Health/Human Services: opendataphilly.org/categories/health-human-services
- City ArcGIS open data portal: data-phl.opendata.arcgis.com
- SEPTA GTFS: opendataphilly.org/datasets/septa-gtfs
- PDPH Substance Use & Harm Reduction: phila.gov/programs/substance-use-prevention-and-harm-reduction/resources
- Open Referral HSDS 3.x: docs.openreferral.org/en/latest/hsds/overview.html
