import { CATEGORIES, LISTINGS } from "./data";
import type { Category, CategoryId, Listing } from "./types";

// People don't search in category names — they type "a bed tonight", "narcan",
// "food stamps". This maps how they actually talk to the categories we hold.
// Runs entirely on-device; no query ever leaves the phone.
const SYNONYMS: Record<string, CategoryId[]> = {
  bed: ["housing"], sleep: ["housing"], shelter: ["housing"], homeless: ["housing"],
  house: ["housing"], housing: ["housing"], stay: ["housing"], room: ["housing"],
  narcan: ["crisis"], naloxone: ["crisis"], overdose: ["crisis"], od: ["crisis"],
  suicide: ["crisis"], crisis: ["crisis"], hurt: ["crisis"], safe: ["crisis"],
  high: ["crisis", "behavioral"], using: ["crisis", "behavioral"],
  food: ["food"], eat: ["food"], hungry: ["food"], meal: ["food"], meals: ["food"],
  groceries: ["food"], pantry: ["food"],
  snap: ["benefits", "food"], "food stamps": ["benefits", "food"], stamps: ["benefits"],
  medicaid: ["benefits", "healthcare"], cash: ["benefits"], welfare: ["benefits"],
  benefits: ["benefits"], assistance: ["benefits"], compass: ["benefits"],
  id: ["id"], identification: ["id"], license: ["id"], birth: ["id"],
  certificate: ["id"], social: ["id"], ssn: ["id"], documents: ["id"], papers: ["id"],
  job: ["jobs"], jobs: ["jobs"], work: ["jobs"], employment: ["jobs"], hire: ["jobs"],
  hiring: ["jobs"], career: ["jobs"], resume: ["jobs"], training: ["jobs"],
  doctor: ["healthcare"], clinic: ["healthcare"], health: ["healthcare"],
  medicine: ["healthcare"], medication: ["healthcare"], insurance: ["healthcare"],
  sick: ["healthcare"], hospital: ["healthcare"], dental: ["healthcare"],
  lawyer: ["legal"], legal: ["legal"], expunge: ["legal"], expungement: ["legal"],
  pardon: ["legal"], record: ["legal"], seal: ["legal"], court: ["legal"],
  counseling: ["behavioral"], therapy: ["behavioral"], mental: ["behavioral"],
  depression: ["behavioral"], rehab: ["behavioral"], treatment: ["behavioral"],
  recovery: ["behavioral"], sober: ["behavioral"], addiction: ["behavioral"],
  detox: ["behavioral"], mat: ["behavioral"], suboxone: ["behavioral"],
  bus: ["transportation"], transit: ["transportation"], septa: ["transportation"],
  ride: ["transportation"], fare: ["transportation"], token: ["transportation"],
  transportation: ["transportation"], pass: ["transportation"],
};

const STOP = new Set(["a", "an", "the", "i", "need", "get", "for", "to", "my", "me", "some", "any", "help", "want", "find", "near"]);

function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export interface SearchResult {
  listings: Listing[];
  categories: Category[];
}

export function search(query: string): SearchResult {
  const q = norm(query);
  if (!q) return { listings: [], categories: [] };
  const tokens = q.split(" ").filter((t) => t.length >= 2 && !STOP.has(t));
  if (tokens.length === 0) return { listings: [], categories: [] };

  // Which categories the query points at (via synonyms, phrases, and labels).
  const catScore = new Map<CategoryId, number>();
  const bump = (c: CategoryId, n: number) => catScore.set(c, (catScore.get(c) ?? 0) + n);
  for (const t of tokens) for (const c of SYNONYMS[t] ?? []) bump(c, 2);
  for (const [phrase, cats] of Object.entries(SYNONYMS)) {
    if (phrase.includes(" ") && q.includes(phrase)) for (const c of cats) bump(c, 3);
  }
  for (const c of CATEGORIES) {
    const text = norm(`${c.label} ${c.short} ${c.blurb}`);
    for (const t of tokens) if (text.includes(t)) bump(c.id, 2);
  }

  const scored = LISTINGS.map((l) => {
    const name = norm(l.name);
    const kw = norm((l.keywords ?? []).join(" "));
    const hay = norm(`${l.name} ${l.summary} ${(l.keywords ?? []).join(" ")}`);
    let s = 0;
    for (const t of tokens) {
      if (name.includes(t)) s += 4;
      else if (kw.includes(t)) s += 3;
      else if (hay.includes(t)) s += 1;
    }
    for (const c of l.categories) if (catScore.has(c)) s += (catScore.get(c) ?? 0) * 1.5;
    return { l, s };
  })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  const categories = CATEGORIES.filter((c) => catScore.has(c.id)).sort(
    (a, b) => (catScore.get(b.id) ?? 0) - (catScore.get(a.id) ?? 0),
  );

  return { listings: scored.map((x) => x.l), categories };
}
