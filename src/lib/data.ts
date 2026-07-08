import type { Category, Listing } from "./types";

// Shown site-wide. This is an in-progress, being-verified directory — say so
// plainly rather than implying finality for a safety-critical tool.
export const DIRECTORY_NOTE =
  "This directory is being built and verified. Always call ahead to confirm before you go.";

export const CATEGORIES: Category[] = [
  { id: "crisis", label: "Crisis & harm reduction", short: "Crisis help", tier: "crisis", blurb: "Overdose, suicide, and safety help — right now." },
  { id: "housing", label: "Housing & shelter", short: "Housing", blurb: "A bed tonight and longer-term housing." },
  { id: "food", label: "Food", short: "Food", blurb: "Free meals and groceries today." },
  { id: "id", label: "ID & documents", short: "ID & documents", blurb: "State ID, birth certificate, Social Security card." },
  { id: "jobs", label: "Jobs & training", short: "Jobs", blurb: "Work and training that hire people with records." },
  { id: "healthcare", label: "Healthcare", short: "Healthcare", blurb: "Clinics, medicine, and insurance." },
  { id: "benefits", label: "Public benefits", short: "Benefits", blurb: "SNAP, Medicaid, and cash assistance." },
  { id: "legal", label: "Legal help", short: "Legal help", blurb: "Clearing your record, pardons, and legal aid." },
  { id: "behavioral", label: "Mental health & recovery", short: "Mental health", blurb: "Counseling and substance-use treatment." },
  { id: "transportation", label: "Getting around", short: "Transit", blurb: "Transit passes and reduced fares." },
];

// Seeded from the data-source research. Real Philadelphia organizations, with
// only fields we can source; unknown specifics are left out and shown as "call
// to confirm" in the UI. Verification is honest: only nationally stable
// infrastructure (988) is marked verified here — the rest await human review.
export const LISTINGS: Listing[] = [
  {
    id: "988-lifeline",
    name: "988 Suicide & Crisis Lifeline",
    categories: ["crisis", "behavioral"],
    summary: "Free, confidential support for suicide, mental-health, or substance-use crisis — any time, day or night.",
    whatToDoNow: "Call or text 988. You do not have to be suicidal to reach out. It is free and you can stay anonymous.",
    phone: "988",
    text: "988",
    alwaysOpen: true,
    hours: "24 hours a day, 7 days a week",
    languages: ["English", "Spanish"],
    cost: "Free",
    website: "https://988lifeline.org",
    source: { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org" },
    status: "verified",
    lastVerified: "2026-07-08",
  },
  {
    id: "net-access-point",
    name: "NET Access Point",
    categories: ["crisis", "behavioral", "healthcare"],
    summary: "Walk-in, 24/7 starting point for substance-use treatment, including same-day medication for opioid use (buprenorphine/methadone).",
    whatToDoNow: "Call any time, or walk in. Medication treatment lowers overdose death risk by about 75%.",
    phone: "844-533-8200",
    phoneLabel: "24/7 access line",
    alwaysOpen: true,
    hours: "24 hours a day, 7 days a week",
    cost: "Free / accepts Medicaid",
    eligibility: { recordFriendly: true, idRequired: false, notes: "No ID or insurance required to start." },
    source: { name: "City of Philadelphia — Substance Use Prevention & Harm Reduction", url: "https://www.phila.gov/programs/substance-use-prevention-and-harm-reduction/resources/" },
    status: "pending",
  },
  {
    id: "careconnect-warmline",
    name: "CareConnect Warmline",
    categories: ["crisis", "behavioral"],
    summary: "A peer-staffed phone line for emotional support and connection to behavioral-health care — for when it's not an emergency but you need to talk.",
    whatToDoNow: "Call to talk with someone who has been there. Free and confidential.",
    phone: "484-278-1679",
    cost: "Free",
    source: { name: "City of Philadelphia — Substance Use Prevention & Harm Reduction", url: "https://www.phila.gov/programs/substance-use-prevention-and-harm-reduction/resources/" },
    status: "pending",
  },
  {
    id: "prevention-point",
    name: "Prevention Point Philadelphia",
    categories: ["crisis", "healthcare"],
    summary: "Harm-reduction services including free naloxone (Narcan), syringe services, wound care, and case management.",
    whatToDoNow: "Free naloxone can reverse an overdose. Call or visit to get some and learn how to use it.",
    neighborhood: "Kensington",
    hours: "Call to confirm hours",
    cost: "Free",
    eligibility: { recordFriendly: true },
    website: "https://ppponline.org",
    source: { name: "Prevention Point Philadelphia", url: "https://ppponline.org" },
    status: "pending",
  },
  {
    id: "reentry-nrc",
    name: "Neighborhood Resource Centers (Office of Reentry Partnerships)",
    categories: ["id", "jobs", "housing", "benefits"],
    summary: "City reentry hubs offering case management, help getting an ID, workforce training, benefits navigation, and record-clearing help in one place.",
    whatToDoNow: "Call the Office of Reentry Partnerships to find your nearest center and what to bring.",
    phone: "215-683-3370",
    phoneLabel: "Office of Reentry Partnerships",
    neighborhood: "Kensington and North Philadelphia",
    eligibility: { recordFriendly: true, paroleOk: true },
    website: "https://www.phila.gov/departments/office-of-reentry-partnerships/",
    source: { name: "City of Philadelphia — Office of Reentry Partnerships", url: "https://www.phila.gov/departments/office-of-reentry-partnerships/" },
    status: "pending",
  },
  {
    id: "homeless-outreach",
    name: "Philadelphia Homeless Outreach Hotline",
    categories: ["housing", "crisis"],
    summary: "If you have nowhere to sleep tonight, the outreach hotline can connect you to emergency shelter and outreach teams.",
    whatToDoNow: "Call to ask for a shelter placement or an outreach team to meet you.",
    phone: "215-232-1984",
    phoneLabel: "Outreach Coordination Center",
    alwaysOpen: true,
    hours: "24 hours a day",
    cost: "Free",
    source: { name: "City of Philadelphia — Office of Homeless Services", url: "https://www.phila.gov/departments/office-of-homeless-services/" },
    status: "pending",
  },
  {
    id: "broad-street-ministry",
    name: "Broad Street Ministry",
    categories: ["food", "id"],
    summary: "Hot meals, a mailing address for people without a home, clothing, and social services — treating guests with dignity.",
    whatToDoNow: "Come for a meal, or set up a free mailing address you can use for job and benefit applications.",
    address: "315 S Broad St, Philadelphia",
    neighborhood: "Center City",
    hours: "Call to confirm meal times",
    cost: "Free",
    website: "https://www.broadstreetministry.org",
    source: { name: "Broad Street Ministry", url: "https://www.broadstreetministry.org" },
    status: "pending",
  },
  {
    id: "plse",
    name: "Philadelphia Lawyers for Social Equity (PLSE)",
    categories: ["legal", "jobs"],
    summary: "Free legal help to clear or seal your criminal record (expungement) and apply for a pardon — the record barriers that block jobs and housing.",
    whatToDoNow: "Reach out about an expungement or pardon. A cleaner record opens up work and housing.",
    cost: "Free",
    eligibility: { recordFriendly: true },
    website: "https://plsephilly.org",
    source: { name: "Philadelphia Lawyers for Social Equity", url: "https://plsephilly.org" },
    status: "pending",
  },
  {
    id: "clsphila",
    name: "Community Legal Services of Philadelphia",
    categories: ["legal", "benefits", "housing"],
    summary: "Free civil legal aid for low-income Philadelphians — benefits denials, housing, employment, and record issues.",
    cost: "Free",
    website: "https://clsphila.org",
    source: { name: "Community Legal Services", url: "https://clsphila.org" },
    status: "pending",
  },
  {
    id: "careerlink",
    name: "PA CareerLink Philadelphia",
    categories: ["jobs"],
    summary: "Public workforce centers with job listings, résumé help, training, and staff who work with people returning from incarceration.",
    whatToDoNow: "Visit a center or start online to get help finding work and training.",
    website: "https://www.philaworks.org/for-job-seekers/",
    source: { name: "Philadelphia Works", url: "https://www.philaworks.org/for-job-seekers/" },
    status: "pending",
  },
  {
    id: "compass-benefits",
    name: "Apply for benefits — PA COMPASS",
    categories: ["benefits", "healthcare", "food"],
    summary: "Pennsylvania's site to apply for SNAP (food stamps), Medicaid (health coverage), and cash assistance in one application.",
    whatToDoNow: "You can apply online, by phone, or in person. Medicaid and SNAP have no cost.",
    cost: "Free to apply",
    eligibility: { idRequired: true, notes: "You will usually need an ID and Social Security number — the reentry centers can help you get these." },
    website: "https://www.compass.state.pa.us",
    source: { name: "Commonwealth of Pennsylvania — COMPASS", url: "https://www.compass.state.pa.us" },
    status: "pending",
  },
  {
    id: "septa-fares",
    name: "SEPTA reduced & free transit fares",
    categories: ["transportation"],
    summary: "How to ride SEPTA affordably — reduced fares, and free-transit programs for people with low income.",
    whatToDoNow: "Ask a reentry center about a transit pass; a low-income (Zero Fare) program may cover your rides.",
    website: "https://www.septa.org/fares/",
    source: { name: "SEPTA", url: "https://www.septa.org/fares/" },
    status: "pending",
  },
];

export function listingsByCategory(id: string): Listing[] {
  return LISTINGS.filter((l) => l.categories.includes(id as never));
}

export function getListing(id: string): Listing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export const CRISIS_LISTINGS = LISTINGS.filter((l) => l.categories.includes("crisis"));
