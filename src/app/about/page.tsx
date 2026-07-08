import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = { title: "About this project" };

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">About Homecoming Philadelphia</h1>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>
          About 25,000 people return to Philadelphia from incarceration every year. The help
          they need is real and it exists — but it&apos;s scattered across dozens of sites, PDFs,
          and phone trees, much of it out of date. Homecoming Philadelphia gathers it in one
          calm, plain-language place that works on any phone.
        </p>
        <p>
          It&apos;s an independent, non-commercial civic project. It is <strong className="text-ink">not</strong> run
          by or affiliated with the Department of Prisons, parole, or any correctional agency —
          it works for the person coming home, and no one else.
        </p>
        <p>
          The listings follow the open <a href="https://docs.openreferral.org/en/latest/hsds/overview.html" target="_blank" rel="noreferrer">Human Services Data Specification</a>,
          a shared standard for community-resource data. As it grows, the goal is to publish this
          as the region&apos;s first open, free reentry dataset — so other tools and caseworkers can
          build on it too.
        </p>
        <p>
          Want to help — verifying listings, adding a service, or translating? <Link href="/report">Get in touch</Link>.
        </p>
      </div>
    </main>
  );
}
