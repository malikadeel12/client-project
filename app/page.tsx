/**
 * What: Home — Calling, Memory Current, Covenant, Book of Honor.
 * Why: All copy and photographs come from Client-data, not generic nonprofit filler.
 */
import { BookOfHonor } from "@/components/home/BookOfHonor";
import { CovenantScroll } from "@/components/home/CovenantScroll";
import { HeroCalling } from "@/components/home/HeroCalling";
import { PhotoRiver } from "@/components/home/PhotoRiver";
import { WitnessFilm } from "@/components/home/WitnessFilm";

export default function HomePage() {
  return (
    <main>
      <HeroCalling />
      <PhotoRiver />
      <WitnessFilm />
      <CovenantScroll />
      <BookOfHonor />
    </main>
  );
}
