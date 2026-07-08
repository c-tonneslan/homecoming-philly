import Link from "next/link";
import type { Category, Listing } from "@/lib/types";
import { Icon, type IconName } from "@/lib/icons";
import { Button, Tag, VerifiedStamp } from "./ui";

// Category → its one stable icon (used everywhere the category appears).
const CATEGORY_ICON: Record<string, IconName> = {
  crisis: "crisis", housing: "housing", food: "food", id: "id", jobs: "jobs",
  healthcare: "healthcare", benefits: "benefits", legal: "legal",
  behavioral: "behavioral", transportation: "transportation",
};

export function CategoryTile({ category }: { category: Category }) {
  const href = category.id === "crisis" ? "/help-now" : `/browse/${category.id}`;
  const crisis = category.tier === "crisis";
  return (
    <Link
      href={href}
      className={`group flex items-start gap-3 rounded-md border p-4 no-underline transition-colors ${
        crisis
          ? "border-accent/40 bg-accent/[0.06] hover:border-accent"
          : "border-line-strong bg-paper-raised hover:border-primary"
      }`}
    >
      <span className={`mt-0.5 shrink-0 ${crisis ? "text-accent" : "text-primary"}`}>
        <Icon name={CATEGORY_ICON[category.id]} size={28} />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-ink">{category.label}</span>
        <span className="mt-0.5 block text-[15px] leading-snug text-ink-soft">{category.blurb}</span>
      </span>
      <Icon name="chevronRight" size={20} className="ml-auto mt-1 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ListingCard({ listing, showWhatToDo = true }: { listing: Listing; showWhatToDo?: boolean }) {
  const e = listing.eligibility;
  return (
    <article className="rounded-md border border-line-strong bg-paper-raised p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-[20px] font-semibold text-ink">{listing.name}</h3>
        {listing.alwaysOpen && (
          <Tag tone="good"><Icon name="clock" size={14} /> Open 24/7</Tag>
        )}
      </div>

      <p className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">{listing.summary}</p>

      {showWhatToDo && listing.whatToDoNow && (
        <p className="mt-3 rounded-md border-l-4 border-accent bg-accent/[0.06] py-2 pl-3 pr-2 text-[16px] leading-relaxed text-ink">
          <span className="font-semibold">What to do now: </span>{listing.whatToDoNow}
        </p>
      )}

      {(e || listing.languages || listing.cost) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {listing.cost && <Tag>{listing.cost}</Tag>}
          {e?.recordFriendly && <Tag tone="good"><Icon name="check" size={14} /> Serves people with records</Tag>}
          {e?.idRequired === false && <Tag tone="good">No ID needed</Tag>}
          {e?.idRequired === true && <Tag>ID usually required</Tag>}
          {e?.paroleOk && <Tag tone="good">Parole/probation OK</Tag>}
          {listing.languages?.map((l) => <Tag key={l}><Icon name="globe" size={14} /> {l}</Tag>)}
        </div>
      )}

      <dl className="mt-3 space-y-1.5 text-[15px] text-ink-soft">
        {(listing.address || listing.neighborhood) && (
          <div className="flex gap-2">
            <dt className="mt-0.5 shrink-0 text-ink-faint"><Icon name="pin" size={17} /></dt>
            <dd>{listing.address ?? listing.neighborhood}{listing.address && listing.neighborhood ? ` · ${listing.neighborhood}` : ""}</dd>
          </div>
        )}
        <div className="flex gap-2">
          <dt className="mt-0.5 shrink-0 text-ink-faint"><Icon name="clock" size={17} /></dt>
          <dd>{listing.hours ?? "Call to confirm hours"}</dd>
        </div>
      </dl>

      {(listing.phone || listing.text || listing.website) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {listing.phone && (
            <Button href={`tel:${listing.phone.replace(/[^\d+]/g, "")}`}>
              <Icon name="phone" size={18} /> Call {listing.phone}
            </Button>
          )}
          {listing.text && (
            <Button href={`sms:${listing.text}`} variant="secondary">
              <Icon name="message" size={18} /> Text {listing.text}
            </Button>
          )}
          {listing.website && (
            <Button href={listing.website} variant="secondary">
              <Icon name="external" size={17} /> Website
            </Button>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
        <VerifiedStamp status={listing.status} date={listing.lastVerified} />
        <div className="flex items-center gap-4 text-[13px]">
          <a href={listing.source.url} target="_blank" rel="noreferrer" className="text-ink-faint hover:text-ink">
            Source: {listing.source.name}
          </a>
          <Link href={`/report?listing=${listing.id}`} className="inline-flex items-center gap-1 text-ink-faint hover:text-ink">
            <Icon name="flag" size={14} /> Report a problem
          </Link>
        </div>
      </div>
    </article>
  );
}
