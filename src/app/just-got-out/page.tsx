import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Just got out?",
  description: "First things first after coming home to Philadelphia — safety, a place to sleep, food, your ID, and a way to get around. Take it in order.",
};

const STEPS = [
  { title: "Are you safe right now?", body: "If you are in danger, thinking about ending your life, or at risk of overdose, get help first. Naloxone and treatment save lives.", href: "/help-now", cta: "Get help now", crisis: true },
  { title: "A place to sleep tonight", body: "Settling housing in the first days matters most — being unhoused makes everything else harder. Find a bed or an outreach team.", href: "/browse/housing", cta: "Find shelter" },
  { title: "Food today", body: "Free hot meals and groceries near you, treated with dignity and no questions asked.", href: "/browse/food", cta: "Find food" },
  { title: "Get your ID", body: "A state ID is the key that unlocks almost everything else — housing, benefits, and a job. Start this early.", href: "/browse/id", cta: "Get an ID" },
  { title: "A way to get around", body: "Reduced and free SEPTA fares so you can reach appointments, meetings, and work.", href: "/browse/transportation", cta: "Transit help" },
];

export default function JustGotOut() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">Just got out? Start here.</h1>
      <p className="mt-2 max-w-prose text-[18px] leading-relaxed text-ink-soft">
        First things first. Take these in order — you don&apos;t have to do it all today.
      </p>

      <ol className="mt-7 space-y-4">
        {STEPS.map((s, i) => (
          <li
            key={s.href}
            className={`flex gap-4 rounded-md border p-5 ${s.crisis ? "border-accent/40 bg-accent/[0.06]" : "border-line-strong bg-paper-raised"}`}
          >
            <span
              aria-hidden
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-[18px] font-semibold ${s.crisis ? "bg-accent text-white" : "bg-primary text-primary-fg"}`}
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h2 className="text-[21px] font-semibold text-ink">{s.title}</h2>
              <p className="mt-1 max-w-prose text-[16px] leading-relaxed text-ink-soft">{s.body}</p>
              <div className="mt-3">
                <Button href={s.href} variant={s.crisis ? "primary" : "secondary"}>
                  {s.cta} <Icon name="arrowRight" size={18} />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-7 text-[16px] text-ink-soft">
        When you&apos;re ready for the longer road — a job, healthcare, benefits, clearing your
        record — <Link href="/">browse all categories</Link>.
      </p>
    </main>
  );
}
