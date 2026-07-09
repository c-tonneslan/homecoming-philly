import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { SearchResults } from "@/components/search-results";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-3 inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <Suspense fallback={<div className="h-14 animate-pulse rounded-md bg-line/60" />}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
