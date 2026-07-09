import Link from "next/link";
import { Icon } from "@/lib/icons";
import type { Dict } from "@/lib/i18n";
import { type Locale, path } from "@/lib/i18n";
import { QuickExit, LanguageToggle } from "./site-client";

export { QuickExit, LanguageToggle };

// Persistent crisis bar — one tap to life-saving help from every screen.
export function CrisisBar({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <div className="bg-ink text-[#f7f5f1]">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 text-[15px]">
        <span className="inline-flex items-center gap-2 font-semibold">
          <Icon name="crisis" size={18} className="text-accent" />
          {dict.common.needHelpNow}
        </span>
        <a href="tel:988" className="inline-flex items-center gap-1.5 font-semibold text-[#f7f5f1] underline underline-offset-2 decoration-accent/70">
          <Icon name="phone" size={16} /> {dict.common.callText988}
        </a>
        <Link href={path(lang, "/help-now")} className="ml-auto inline-flex items-center gap-1 font-semibold text-[#f7f5f1] underline underline-offset-2 decoration-accent/70">
          {dict.common.getHelpNow} <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3.5">
        <Link href={path(lang, "/")} className="flex items-baseline gap-2 no-underline">
          <span className="font-serif text-[22px] font-semibold text-ink">{dict.common.siteName}</span>
          <span className="text-[14px] font-medium text-ink-faint">{dict.common.siteCity}</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle lang={lang} label={dict.common.switchTo} />
          <QuickExit label={dict.common.quickExit} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <footer className="mt-16 border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-3xl px-4 py-8 text-[15px] text-ink-soft">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <Icon name="check" size={18} className="text-success" />
          {dict.footer.privacyHeadline}
        </p>
        <p className="mt-2 max-w-prose leading-relaxed">{dict.footer.privacyBody}</p>
        <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <Link href={path(lang, "/how-we-verify")}>{dict.footer.howWeVerify}</Link>
          <Link href={path(lang, "/privacy")}>{dict.footer.yourPrivacy}</Link>
          <Link href={path(lang, "/about")}>{dict.footer.about}</Link>
        </nav>
        <p className="mt-6 text-[13px] text-ink-faint">{dict.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
