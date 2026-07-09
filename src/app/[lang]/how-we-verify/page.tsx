import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale, path } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pages.verify.title };
}

export default async function HowWeVerify({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const p = dict.pages.verify;
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={path(lang, "/")} className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> {dict.common.home}
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">{p.title}</h1>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        {p.body.map((para) => <p key={para}>{para}</p>)}
        <ol className="ml-1 space-y-3">
          {p.steps.map((step) => {
            const dot = step.indexOf(". ");
            const lead = dot > 0 ? step.slice(0, dot + 1) : step;
            const rest = dot > 0 ? step.slice(dot + 2) : "";
            return (
              <li key={step} className="flex gap-3">
                <span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span>
                <span><strong className="text-ink">{lead}</strong> {rest}</span>
              </li>
            );
          })}
        </ol>
        <p>
          <Link href={path(lang, "/report")}>{dict.common.reportProblem}</Link>
        </p>
        <p className="rounded-md border border-line bg-paper-raised p-4 text-[16px]">{p.note}</p>
      </div>
    </main>
  );
}
