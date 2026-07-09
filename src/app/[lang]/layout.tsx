import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { CrisisBar, SiteHeader, SiteFooter } from "@/components/site";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"], display: "swap" });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"], weight: ["600"], display: "swap" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: {
      default: `${dict.common.siteName} ${dict.common.siteCity} — ${dict.common.tagline}`,
      template: `%s · ${dict.common.siteName} ${dict.common.siteCity}`,
    },
    description: dict.home.subtitle,
  };
}

export default async function LangLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <html lang={lang} className={`${publicSans.variable} ${sourceSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">{dict.common.skipToContent}</a>
        <CrisisBar lang={lang} dict={dict} />
        <SiteHeader lang={lang} dict={dict} />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter lang={lang} dict={dict} />
      </body>
    </html>
  );
}
