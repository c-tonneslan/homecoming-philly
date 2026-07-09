"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/lib/icons";
import { type Locale, locales } from "@/lib/i18n";

// Quick-exit: leaves immediately for a neutral page and clears on-device state,
// so a shared or borrowed phone leaves no trail.
export function QuickExit({ label }: { label: string }) {
  function leave() {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      // storage may be blocked in private mode; leaving still works
    }
    window.location.replace("https://www.google.com/search?q=weather");
  }
  return (
    <button
      onClick={leave}
      className="inline-flex items-center gap-1.5 rounded-md border border-ink/25 bg-paper-raised px-3 py-2 text-[14px] font-semibold text-ink hover:border-ink/50"
    >
      <Icon name="exit" size={17} />
      {label}
    </button>
  );
}

// Swaps the leading /en or /es segment of the current path, keeping the page.
export function LanguageToggle({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || `/${lang}`;
  const other = (locales.find((l) => l !== lang) ?? "en") as Locale;
  const target = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${other}`);
  return (
    <Link
      href={target}
      hrefLang={other}
      className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-2 text-[14px] font-medium text-ink-soft no-underline hover:border-ink-faint"
    >
      <Icon name="globe" size={16} /> {label}
    </Link>
  );
}
