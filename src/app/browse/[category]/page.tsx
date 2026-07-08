import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, listingsByCategory } from "@/lib/data";
import { ListingCard } from "@/components/listing";
import { Icon } from "@/lib/icons";

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  return { title: cat ? cat.label : "Browse" };
}

export default async function BrowseCategory({ params }: Params) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();
  const listings = listingsByCategory(category);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-[15px] text-ink-faint no-underline hover:text-ink">
        <Icon name="chevronRight" size={16} className="rotate-180" /> All categories
      </Link>
      <h1 className="mt-3 text-[30px] font-semibold text-ink">{cat.label}</h1>
      <p className="mt-1.5 max-w-prose text-[17px] text-ink-soft">{cat.blurb}</p>

      {listings.length === 0 ? (
        <div className="mt-6 rounded-md border border-line bg-paper-raised p-6">
          <p className="font-semibold text-ink">We&apos;re still verifying listings here.</p>
          <p className="mt-1 max-w-prose text-[15px] leading-relaxed text-ink-soft">
            We only publish services someone has confirmed are real and current, so this
            category is coming soon. In the meantime, a reentry center can point you the right
            way — <Link href="/browse/id">start there</Link>.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <p className="text-[15px] text-ink-faint">
            {listings.length} {listings.length === 1 ? "place" : "places"}
          </p>
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </main>
  );
}
