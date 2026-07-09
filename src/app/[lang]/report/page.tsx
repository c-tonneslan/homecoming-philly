import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pages.report.title };
}

export default async function Report({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const p = dict.pages.report;
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.home}
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">{p.title}</h1>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>{p.body}</p>
        <p>
          <a
            href="mailto:hello@homecomingphilly.org?subject=Listing%20correction"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-fg no-underline hover:bg-primary-hover"
          >
            <Icon name="message" size={18} /> {p.button}
          </a>
        </p>
        <p className="text-[15px] text-ink-faint">{p.note}</p>
      </div>
    </main>
  );
}
