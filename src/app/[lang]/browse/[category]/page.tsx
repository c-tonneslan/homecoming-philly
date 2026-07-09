import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, listingsByCategory } from "@/lib/data";
import { ListingCard } from "@/components/listing";
import { Icon } from "@/lib/icons";
import { getDictionary, locales, type Locale, path } from "@/lib/i18n";
import { localizeCategory, localizeListing } from "@/lib/i18n/content";

type Params = { params: Promise<{ lang: Locale; category: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => CATEGORIES.map((c) => ({ lang, category: c.id })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  return { title: cat ? localizeCategory(cat, lang).label : "Browse" };
}

export default async function BrowseCategory({ params }: Params) {
  const { lang, category } = await params;
  const dict = getDictionary(lang);
  const base = CATEGORIES.find((c) => c.id === category);
  if (!base) notFound();
  const cat = localizeCategory(base, lang);
  const listings = listingsByCategory(category).map((l) => localizeListing(l, lang));

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.allCategories}
      </Link>
      <h1 className="mt-3 text-[30px] font-semibold text-ink">{cat.label}</h1>
      <p className="mt-1.5 max-w-prose text-[17px] text-ink-soft">{cat.blurb}</p>

      {listings.length === 0 ? (
        <div className="mt-6 rounded-md border border-line bg-paper-raised p-6">
          <p className="font-semibold text-ink">{dict.browse.emptyTitle}</p>
          <p className="mt-1 max-w-prose text-[15px] leading-relaxed text-ink-soft">{dict.browse.emptyBody}</p>
          <div className="mt-3">
            <Link href={path(lang, "/browse/id")} className="font-medium">{localizeCategory(CATEGORIES.find((c) => c.id === "id")!, lang).label}</Link>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <p className="text-[15px] text-ink-faint">
            {listings.length} {listings.length === 1 ? dict.common.place : dict.common.places}
          </p>
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} dict={dict} lang={lang} />
          ))}
        </div>
      )}
    </main>
  );
}
