import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/lib/icons";

type Variant = "primary" | "secondary" | "ghost";
const VARIANTS: Record<Variant, string> = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover border border-transparent",
  secondary: "bg-paper-raised text-ink border border-line-strong hover:border-ink-faint",
  ghost: "bg-transparent text-primary hover:bg-primary/5 border border-transparent",
};

// A single button/link primitive: 44px min tap target, one radius, consistent
// padding. `href` renders a Link, otherwise a <button>.
export function Button({
  children, href, variant = "primary", full, className = "", ...rest
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  full?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-4 min-h-[48px] text-[17px] font-semibold transition-colors ${VARIANTS[variant]} ${full ? "w-full" : ""} ${className}`;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link href={href} className={cls} {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}>
        {children}
      </Link>
    );
  }
  return <button className={cls} {...rest}>{children}</button>;
}

// Small factual chip (eligibility, language, cost). Not a button.
export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "good" }) {
  const tones = {
    neutral: "bg-paper border-line-strong text-ink-soft",
    good: "bg-success/10 border-success/30 text-success",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[13px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

// The product's core trust signal.
export function VerifiedStamp({
  status, date, verifiedLabel, beingLabel, locale,
}: {
  status: "verified" | "pending";
  date?: string;
  verifiedLabel: string;
  beingLabel: string;
  locale: string;
}) {
  if (status === "verified" && date) {
    const d = new Date(date + "T00:00:00").toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
      month: "short", day: "numeric", year: "numeric",
    });
    return (
      <span className="inline-flex items-center gap-1.5 text-[13px] text-success">
        <Icon name="check" size={15} /> {verifiedLabel} {d}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-faint">
      <Icon name="info" size={15} /> {beingLabel}
    </span>
  );
}
