import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { CategoryTile } from "@/components/listing";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";
import { localizeCategory } from "@/lib/i18n/content";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const s = dict.home.situations;
  const situations = [
    { label: s.justOut, href: path(lang, "/just-got-out") },
    { label: s.needId, href: path(lang, "/browse/id") },
    { label: s.noSleep, href: path(lang, "/browse/housing") },
    { label: s.needFood, href: path(lang, "/browse/food") },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <section>
        <h1 className="text-[34px] font-semibold text-ink sm:text-[42px]">{dict.home.title}</h1>
        <p className="mt-3 max-w-xl text-[19px] leading-relaxed text-ink-soft">{dict.home.subtitle}</p>

        <div className="mt-6 max-w-xl">
          <SearchBar lang={lang} label={dict.search.label} placeholder={dict.search.placeholder} button={dict.search.button} />
          <div className="mt-3 flex flex-wrap gap-2">
            {situations.map((it) => (
              <Link key={it.href} href={it.href} className="rounded-md border border-line-strong bg-paper-raised px-3.5 py-2 text-[14px] font-medium text-ink no-underline hover:border-primary">
                {it.label}
              </Link>
            ))}
          </div>
          <p className="mt-3 inline-flex items-center gap-2 text-[15px] text-ink-faint">
            <Icon name="check" size={16} className="text-success" /> {dict.home.noTrack}
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-md border-l-4 border-accent bg-accent/[0.06] p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div>
          <h2 className="text-[19px] font-semibold text-ink">{dict.home.jgoTitle}</h2>
          <p className="mt-0.5 text-[15px] text-ink-soft">{dict.home.jgoBody}</p>
        </div>
        <div className="mt-3 sm:mt-0 sm:shrink-0">
          <Button href={path(lang, "/just-got-out")}>{dict.home.jgoCta} <Icon name="arrowRight" size={18} /></Button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-[24px] font-semibold text-ink">{dict.home.findTitle}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.id} category={localizeCategory(c, lang)} lang={lang} />
          ))}
        </div>
      </section>

      <p className="mt-8 flex items-start gap-2.5 rounded-md border border-line bg-paper-raised p-4 text-[15px] leading-relaxed text-ink-soft">
        <span className="mt-0.5 shrink-0 text-ink-faint"><Icon name="info" size={18} /></span>
        {dict.home.directoryNote}
      </p>
    </main>
  );
}
