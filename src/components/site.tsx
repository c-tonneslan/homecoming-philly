"use client";

import Link from "next/link";
import { Icon } from "@/lib/icons";

// Quick-exit: leaves immediately for a neutral page and clears on-device state,
// so a shared or borrowed phone leaves no trail. A trauma-informed safety
// affordance, reachable on every screen.
export function QuickExit() {
  function leave() {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      // storage may be unavailable in private mode; leaving still works
    }
    window.location.replace("https://www.google.com/search?q=weather");
  }
  return (
    <button
      onClick={leave}
      className="inline-flex items-center gap-1.5 rounded-md border border-ink/25 bg-paper-raised px-3 py-2 text-[14px] font-semibold text-ink hover:border-ink/50"
    >
      <Icon name="exit" size={17} />
      Leave this site
    </button>
  );
}

// Persistent crisis bar — one tap to life-saving help from every screen.
export function CrisisBar() {
  return (
    <div className="bg-ink text-[#f7f5f1]">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 text-[15px]">
        <span className="inline-flex items-center gap-2 font-semibold">
          <Icon name="crisis" size={18} className="text-accent" />
          Need help now?
        </span>
        <a href="tel:988" className="inline-flex items-center gap-1.5 font-semibold text-[#f7f5f1] underline underline-offset-2 decoration-accent/70">
          <Icon name="phone" size={16} /> Call or text 988
        </a>
        <Link href="/help-now" className="ml-auto inline-flex items-center gap-1 font-semibold text-[#f7f5f1] underline underline-offset-2 decoration-accent/70">
          Get help now <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3.5">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-serif text-[22px] font-semibold text-ink">Homecoming</span>
          <span className="text-[14px] font-medium text-ink-faint">Philadelphia</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          {/* Language toggle — Spanish lands in the next milestone. */}
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-2 text-[14px] font-medium text-ink-soft">
            <Icon name="globe" size={16} /> EN
          </span>
          <QuickExit />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-3xl px-4 py-8 text-[15px] text-ink-soft">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <Icon name="check" size={18} className="text-success" />
          We don&apos;t track you. We don&apos;t ask who you are.
        </p>
        <p className="mt-2 max-w-prose leading-relaxed">
          No account, no sign-in, no cookies that follow you. Nothing you tap here is
          sent to us or stored on our servers. Your saved list stays on your phone.
        </p>
        <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/how-we-verify">How we verify listings</Link>
          <Link href="/privacy">Your privacy</Link>
          <Link href="/about">About this project</Link>
        </nav>
        <p className="mt-6 text-[13px] text-ink-faint">
          An independent, non-commercial civic project — not affiliated with the
          Department of Prisons or any correctional agency. Information is provided
          in good faith; always confirm details before you travel.
        </p>
      </div>
    </footer>
  );
}
