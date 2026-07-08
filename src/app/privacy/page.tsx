import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = { title: "Your privacy" };

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> Home
      </Link>
      <h1 className="mt-3 text-[32px] font-semibold text-ink">Your privacy</h1>
      <p className="mt-2 flex items-center gap-2 text-[18px] font-semibold text-ink">
        <Icon name="check" size={20} className="text-success" /> We don&apos;t track you. We don&apos;t ask who you are.
      </p>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-soft">
        <p>You should be able to look for help without anyone watching. So this site is built to know as little about you as possible:</p>
        <ul className="ml-1 space-y-2">
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span>No account, no sign-in, no email or phone number ever asked.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span>No analytics, ad trackers, or session recording. No third-party fonts or scripts that could see your address.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span>Nothing you tap is sent to us. Searches happen on your own phone.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span>A list you save stays only on your device, and you can clear it any time.</span></li>
          <li className="flex gap-3"><span className="mt-1 shrink-0 text-success"><Icon name="check" size={18} /></span><span>The <strong className="text-ink">&ldquo;Leave this site&rdquo;</strong> button at the top exits fast and clears what&apos;s on the screen — useful on a shared or borrowed phone.</span></li>
        </ul>
        <p>Calling a phone number or opening a website listed here takes you to that organization, which has its own privacy practices.</p>
      </div>
    </main>
  );
}
