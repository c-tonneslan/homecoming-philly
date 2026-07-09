"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { search } from "@/lib/search";
import { CATEGORIES } from "@/lib/data";
import { SearchBar } from "./search-bar";
import { ListingCard } from "./listing";
import { Icon, type IconName } from "@/lib/icons";

const CAT_ICON: Record<string, IconName> = {
  crisis: "crisis", housing: "housing", food: "food", id: "id", jobs: "jobs",
  healthcare: "healthcare", benefits: "benefits", legal: "legal",
  behavioral: "behavioral", transportation: "transportation",
};

export function SearchResults() {
  const q = (useSearchParams().get("q") ?? "").trim();
  const { listings, categories } = q ? search(q) : { listings: [], categories: [] };

  return (
    <>
      <SearchBar initial={q} autoFocus={!q} />

      {q && (
        <>
          <h1 className="mt-6 text-[22px] font-semibold text-ink">
            {listings.length > 0 ? `${listings.length} ${listings.length === 1 ? "place" : "places"} for` : "No matches for"}{" "}
            <span className="text-ink-soft">&ldquo;{q}&rdquo;</span>
          </h1>

          {categories.length > 0 && (
            <div className="mt-4">
              <p className="text-[15px] text-ink-faint">Browse by category</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={c.id === "crisis" ? "/help-now" : `/browse/${c.id}`}
                    className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-paper-raised px-3 py-2 text-[15px] font-medium text-ink no-underline hover:border-primary"
                  >
                    <span className="text-primary"><Icon name={CAT_ICON[c.id]} size={18} /></span>
                    {c.short}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {listings.length > 0 ? (
            <div className="mt-6 space-y-4">
              {listings.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-md border border-line bg-paper-raised p-6">
              <p className="font-semibold text-ink">We couldn&apos;t find that yet.</p>
              <p className="mt-1 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                This directory is still small and growing. Try a category below, or dial{" "}
                <a href="tel:211" className="font-semibold">211</a> to reach a person who can help
                find any service in Philadelphia.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    href={c.id === "crisis" ? "/help-now" : `/browse/${c.id}`}
                    className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-paper px-3 py-2 text-[14px] font-medium text-ink no-underline hover:border-primary"
                  >
                    <span className="text-primary"><Icon name={CAT_ICON[c.id]} size={16} /></span>
                    {c.short}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
