// Listings are modeled on the Open Referral HSDS spirit (organization / service /
// location) but flattened to what a person actually reads on a card. Every
// service-critical field is optional and, when unknown, shown as "call to
// confirm" — we never invent hours, eligibility, or what to bring.

export type CategoryId =
  | "crisis"
  | "housing"
  | "food"
  | "id"
  | "jobs"
  | "healthcare"
  | "benefits"
  | "legal"
  | "behavioral"
  | "transportation";

export interface Category {
  id: CategoryId;
  label: string;
  short: string;
  blurb: string;
  tier?: "crisis";
}

export interface Eligibility {
  recordFriendly?: boolean; // explicitly serves people with records
  paroleOk?: boolean;
  idRequired?: boolean;
  notes?: string;
}

export interface Listing {
  id: string;
  name: string;
  categories: CategoryId[];
  summary: string;
  whatToDoNow?: string;
  phone?: string;
  phoneLabel?: string;
  text?: string; // SMS short code or number
  address?: string;
  neighborhood?: string;
  hours?: string;
  alwaysOpen?: boolean;
  eligibility?: Eligibility;
  languages?: string[];
  cost?: string;
  whatToBring?: string;
  website?: string;
  keywords?: string[]; // plain-language terms people actually search
  source: { name: string; url: string };
  // Honest verification state. `verified` means a human confirmed it against the
  // source on `lastVerified`; `pending` means it is seeded and awaiting review.
  status: "verified" | "pending";
  lastVerified?: string; // ISO date, only when status === "verified"
}
