/**
 * What: Contact route — messenger, unfurling scroll, hand-drawn map.
 */
import type { Metadata } from "next";
import { HandDrawnMap } from "@/components/contact/HandDrawnMap";
import { MessengerHero } from "@/components/contact/MessengerHero";
import { UnfurlingScroll } from "@/components/contact/UnfurlingScroll";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the independent call to restore the Chapel of the Archangel Michael.",
};

export default function ContactPage() {
  return (
    <main>
      <MessengerHero />
      <UnfurlingScroll />
      <HandDrawnMap />
    </main>
  );
}
