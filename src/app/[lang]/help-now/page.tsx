import type { Metadata } from "next";
import { CRISIS_LISTINGS } from "@/lib/data";
import { ListingCard } from "@/components/listing";
import { Button } from "@/components/ui";
import { Icon } from "@/lib/icons";
import { getDictionary, type Locale } from "@/lib/i18n";
import { localizeListing } from "@/lib/i18n/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).helpNow.title };
}

export default async function HelpNow({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-md border-l-4 border-accent bg-accent/[0.07] p-5">
        <h1 className="flex items-center gap-2.5 text-[30px] font-semibold text-ink">
          <Icon name="crisis" size={30} className="shrink-0 text-accent" />
          {dict.helpNow.title}
        </h1>
        <p className="mt-2 max-w-prose text-[18px] leading-relaxed text-ink-soft">{dict.helpNow.intro}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button href="tel:988" className="min-h-[56px] px-6 text-[18px]">
            <Icon name="phone" size={20} /> {dict.helpNow.call988}
          </Button>
          <Button href="tel:911" variant="secondary" className="min-h-[56px] px-6">{dict.helpNow.call911}</Button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {CRISIS_LISTINGS.map((l) => (
          <ListingCard key={l.id} listing={localizeListing(l, lang)} dict={dict} lang={lang} />
        ))}
      </div>
    </main>
  );
}
