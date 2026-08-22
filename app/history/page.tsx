/**
 * What: History route — cartographer hero, pinned chronicle, witness gallery.
 */
import type { Metadata } from "next";
import { CartographerHero } from "@/components/history/CartographerHero";
import { ChronicleScroll } from "@/components/history/ChronicleScroll";
import { WitnessGallery } from "@/components/history/WitnessGallery";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "History",
  description:
    "From Rio de S. Michaelis on the 1519 charts to the 24 June 2025 expedition that found the original statue still standing.",
};

export default function HistoryPage() {
  return (
    <main>
      <CartographerHero />
      <ChronicleScroll />
      <p className="bg-volcanic-obsidian px-3 py-8 text-center font-accent italic text-limestone-ivory/75">
        {site.history.afterword}
      </p>
      <WitnessGallery />
    </main>
  );
}
