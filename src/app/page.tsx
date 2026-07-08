import Link from "next/link";
import { CATEGORIES, DIRECTORY_NOTE } from "@/lib/data";
import { CategoryTile } from "@/components/listing";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";

const SITUATIONS = [
  { label: "I just got out", href: "/just-got-out" },
  { label: "I need an ID", href: "/browse/id" },
  { label: "I have nowhere to sleep", href: "/browse/housing" },
  { label: "I need food today", href: "/browse/food" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <section>
        <h1 className="text-[34px] font-semibold text-ink sm:text-[42px]">
          Coming home to Philadelphia?
        </h1>
        <p className="mt-3 max-w-xl text-[19px] leading-relaxed text-ink-soft">
          Find real help near you — a bed tonight, food today, an ID, a job, healthcare.
          Free and private, made for people coming home.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/just-got-out" className="min-h-[56px] px-6 text-[18px]">
            Just got out? Start here <Icon name="arrowRight" size={20} />
          </Button>
          <span className="inline-flex items-center gap-2 text-[15px] text-ink-faint">
            <Icon name="check" size={16} className="text-success" /> No sign-in. We don&apos;t track you.
          </span>
        </div>
      </section>

      <section className="mt-8" aria-label="Common situations">
        <div className="flex flex-wrap gap-2">
          {SITUATIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-md border border-line-strong bg-paper-raised px-3.5 py-2.5 text-[15px] font-medium text-ink no-underline hover:border-primary"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-[24px] font-semibold text-ink">Find what you need</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.id} category={c} />
          ))}
        </div>
      </section>

      <p className="mt-8 flex items-start gap-2.5 rounded-md border border-line bg-paper-raised p-4 text-[15px] leading-relaxed text-ink-soft">
        <span className="mt-0.5 shrink-0 text-ink-faint"><Icon name="info" size={18} /></span>
        {DIRECTORY_NOTE}
      </p>
    </main>
  );
}
