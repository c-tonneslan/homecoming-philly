import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = { title: "Report a problem" };

export default function Report() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">Report a problem</h1>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>
          Is a listing wrong, closed, or moved? Thank you for telling us — it helps keep this
          accurate for the next person. Include the <strong className="text-ink">name of the place</strong> and
          what&apos;s wrong (closed, wrong number, wrong hours).
        </p>
        <p>
          <a
            href="mailto:hello@homecomingphilly.org?subject=Listing%20correction"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-fg no-underline hover:bg-primary-hover"
          >
            <Icon name="message" size={18} /> Email a correction
          </a>
        </p>
        <p className="text-[15px] text-ink-faint">
          Reports go to a person, not a database. We don&apos;t need to know who you are.
        </p>
      </div>
    </main>
  );
}
