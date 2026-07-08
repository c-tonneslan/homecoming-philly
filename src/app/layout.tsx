import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { CrisisBar, SiteHeader, SiteFooter } from "@/components/site";

// Self-hosted by next/font at build time — no third-party font host, no IP leak.
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Homecoming Philadelphia — find help after coming home",
    template: "%s · Homecoming Philadelphia",
  },
  description:
    "A free, private guide to real Philadelphia services for people coming home from incarceration — housing, food, ID, jobs, healthcare, and crisis help. No login, no tracking, works on any phone.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${sourceSerif.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <CrisisBar />
        <SiteHeader />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
