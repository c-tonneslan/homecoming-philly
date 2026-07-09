import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).jgo.title };
}

const HREFS = ["/help-now", "/browse/housing", "/browse/food", "/browse/id", "/browse/transportation"];

export default async function JustGotOut({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.home}
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">{dict.jgo.title}</h1>
      <p className="mt-2 max-w-prose text-[18px] leading-relaxed text-ink-soft">{dict.jgo.intro}</p>

      <ol className="mt-7 space-y-4">
        {dict.jgo.steps.map((s, i) => {
          const crisis = i === 0;
          return (
            <li key={i} className={`flex gap-4 rounded-md border p-5 ${crisis ? "border-accent/40 bg-accent/[0.06]" : "border-line-strong bg-paper-raised"}`}>
              <span aria-hidden className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-[18px] font-semibold ${crisis ? "bg-accent text-white" : "bg-primary text-primary-fg"}`}>
                {i + 1}
              </span>
              <div className="min-w-0">
                <h2 className="text-[21px] font-semibold text-ink">{s.title}</h2>
                <p className="mt-1 max-w-prose text-[16px] leading-relaxed text-ink-soft">{s.body}</p>
                <div className="mt-3">
                  <Button href={path(lang, HREFS[i])} variant={crisis ? "primary" : "secondary"}>
                    {s.cta} <Icon name="arrowRight" size={18} />
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-7 max-w-prose text-[16px] text-ink-soft">{dict.jgo.later}</p>
      <div className="mt-2">
        <Link href={path(lang, "/")} className="inline-flex items-center gap-1 font-medium">
          {dict.home.findTitle} <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </main>
  );
}
