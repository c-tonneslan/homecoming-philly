import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LISTINGS, CATEGORIES, getListing } from "@/lib/data";
import { ListingCard } from "@/components/listing";
import { Icon, type IconName } from "@/lib/icons";
import { getDictionary, locales, type Locale, path } from "@/lib/i18n";
import { localizeCategory, localizeListing } from "@/lib/i18n/content";

type Params = { params: Promise<{ lang: Locale; id: string }> };

const CAT_ICON: Record<string, IconName> = {
  crisis: "crisis", housing: "housing", food: "food", id: "id", jobs: "jobs",
  healthcare: "healthcare", benefits: "benefits", legal: "legal",
  behavioral: "behavioral", transportation: "transportation",
};

export function generateStaticParams() {
  return locales.flatMap((lang) => LISTINGS.map((l) => ({ lang, id: l.id })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const l = getListing(id);
  return { title: l ? l.name : "Not found" };
}

export default async function Place({ params }: Params) {
  const { lang, id } = await params;
  const dict = getDictionary(lang);
  const base = getListing(id);
  if (!base) notFound();
  const listing = localizeListing(base, lang);
  const p = dict.pages.place;

  const cats = base.categories
    .map((cid) => CATEGORIES.find((c) => c.id === cid))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => localizeCategory(c, lang));

  const mailto = `mailto:hello@homecomingphilly.org?subject=${encodeURIComponent(`Correct/remove: ${base.name}`)}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {p.back}
      </Link>

      <div className="mt-3">
        <ListingCard listing={listing} dict={dict} lang={lang} linkTitle={false} />
      </div>

      {cats.length > 0 && (
        <div className="mt-5">
          <p className="text-[14px] font-medium text-ink-faint">{p.categoriesLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {cats.map((c) => (
              <Link
                key={c.id}
                href={path(lang, c.id === "crisis" ? "/help-now" : `/browse/${c.id}`)}
                className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-paper-raised px-3 py-2 text-[14px] font-medium text-ink no-underline hover:border-primary"
              >
                <span className="text-primary"><Icon name={CAT_ICON[c.id]} size={16} /></span>
                {c.short}
              </Link>
            ))}
          </div>
        </div>
      )}

      <section className="mt-6 rounded-md border border-line bg-paper-raised p-5">
        <h2 className="text-[17px] font-semibold text-ink">{p.forOrgsTitle}</h2>
        <p className="mt-1 max-w-prose text-[15px] leading-relaxed text-ink-soft">{p.forOrgsBody}</p>
        <a
          href={mailto}
          className="mt-3 inline-flex items-center gap-2 rounded-md border border-line-strong px-3 py-2 text-[15px] font-medium text-ink no-underline hover:border-primary"
        >
          <Icon name="message" size={17} /> {p.forOrgsButton}
        </a>
      </section>
    </main>
  );
}
