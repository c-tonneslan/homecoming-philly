import type { Metadata } from "next";
import { CRISIS_LISTINGS } from "@/lib/data";
import { ListingCard } from "@/components/listing";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Get help now",
  description: "Crisis, overdose, and safety help in Philadelphia — call or text 988, get naloxone, and start substance-use treatment. Available 24/7.",
};

export default function HelpNow() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-md border-l-4 border-accent bg-accent/[0.07] p-5">
        <h1 className="flex items-center gap-2.5 text-[30px] font-semibold text-ink">
          <Icon name="crisis" size={30} className="shrink-0 text-accent" />
          Get help now
        </h1>
        <p className="mt-2 max-w-prose text-[18px] leading-relaxed text-ink-soft">
          If you are in danger or thinking about ending your life, call or text 988 right now.
          The first weeks home carry a high overdose risk — free naloxone (Narcan) and medication
          treatment save lives.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button href="tel:988" className="min-h-[56px] px-6 text-[18px]">
            <Icon name="phone" size={20} /> Call or text 988
          </Button>
          <Button href="tel:911" variant="secondary" className="min-h-[56px] px-6">
            Call 911 for an emergency
          </Button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {CRISIS_LISTINGS.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </main>
  );
}
