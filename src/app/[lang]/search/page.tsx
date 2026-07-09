import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { SearchResults } from "@/components/search-results";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).search.button };
}

export default async function SearchPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="mb-3 inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.home}
      </Link>
      <Suspense fallback={<div className="h-14 animate-pulse rounded-md bg-line/60" />}>
        <SearchResults lang={lang} dict={dict} />
      </Suspense>
    </main>
  );
}
