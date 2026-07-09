import { en, type Dict } from "./dictionaries/en";
import { es } from "./dictionaries/es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

const DICTS: Record<Locale, Dict> = { en, es };

export function getDictionary(lang: Locale): Dict {
  return DICTS[lang] ?? en;
}

// Prefix an internal path with the active locale.
export function path(lang: Locale, p: string): string {
  return `/${lang}${p === "/" ? "" : p}`;
}

export type { Dict };
