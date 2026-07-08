import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = { title: "How we verify listings" };

export default function HowWeVerify() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">How we verify listings</h1>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>
          Wrong information isn&apos;t a small bug here — sending someone to a shelter that
          closed wastes scarce bus fare and, in a crisis, can cost a life. So accuracy is the
          whole point of this directory, not an afterthought.
        </p>
        <p>Every listing goes through the same steps before it is published:</p>
        <ol className="ml-1 space-y-3">
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span><strong className="text-ink">A real source.</strong> Each place comes from an authoritative source — a city office, the service&apos;s own site, or the Philadelphia Reentry Coalition — and we cite it on the card.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span><strong className="text-ink">A person confirms it.</strong> Someone checks the phone number, hours, and eligibility against that source before it goes live.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span><strong className="text-ink">We never invent details.</strong> If we can&apos;t confirm a fact, the card says <em>&ldquo;call to confirm&rdquo;</em> instead of guessing.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span><strong className="text-ink">We re-check regularly.</strong> Crisis and shelter listings are re-verified most often; everything shows a <strong>&ldquo;Last verified&rdquo;</strong> date so you know how fresh it is.</span></li>
        </ol>
        <p>
          See something wrong or closed? <Link href="/report">Tell us</Link> — it goes straight
          to the review queue.
        </p>
        <p className="rounded-md border border-line bg-paper-raised p-4 text-[16px]">
          This is an in-progress directory. We&apos;d rather show a small number of listings we
          trust than a big list we haven&apos;t checked.
        </p>
      </div>
    </main>
  );
}
