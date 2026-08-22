/**
 * What: Root chapel shell — fonts, skip link, floating reliquary, stone footer.
 * Why: Every route must feel like the same sanctuary, not four different templates.
 */

import type { Metadata } from "next";
import { Cinzel, Crimson_Text, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { PageTransition } from "@/components/layout/PageTransition";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/content/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"],
});

const source = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
  weight: ["400", "600"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.place}`,
    template: `%s — ${site.wordmark}`,
  },
  description: site.home.subhead,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${source.variable} ${crimson.variable} ${plex.variable}`}>
      <body className="bg-limestone-ivory font-body antialiased">
        <SkipLink />
        <Navigation />
        <PageTransition>
          <div id="main">{children}</div>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
