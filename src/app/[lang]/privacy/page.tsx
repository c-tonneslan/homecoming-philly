import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pages.privacy.title };
}

export default async function Privacy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const p = dict.pages.privacy;
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.home}
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">{p.title}</h1>
      <p className="mt-2 flex items-center gap-2 text-[18px] font-semibold text-ink">
        <Icon name="check" size={20} className="text-success" /> {p.headline}
      </p>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>{p.intro}</p>
        <ul className="ml-1 space-y-2">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p>{p.closer}</p>
      </div>
    </main>
  );
}
