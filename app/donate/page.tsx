/**
 * What: Donate route — altar flame and the four-step offering.
 * Business rule: Payments are created server-side via KUNFU Pay. No card data is stored here.
 */
import type { Metadata } from "next";
import { AltarHero } from "@/components/donate/AltarHero";
import { OfferingWizard } from "@/components/donate/OfferingWizard";

export const metadata: Metadata = {
  title: "Make an Offering",
  description: "Every gesture is a seed of love that makes a difference.",
};

export default function DonatePage() {
  return (
    <main>
      <AltarHero />
      <OfferingWizard />
    </main>
  );
}
