/**
 * What: Donate hero — the real altar and the original statue.
 * Why: A tall black screen of fire particles hid the reason to give.
 *      People should see São Miguel before they are asked for an offering.
 * Related: statue-altar.jpg
 */

import { site } from "@/content/site";

export function AltarHero() {
  const photo = site.images.statueAltar;

  return (
    <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-volcanic-obsidian">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-volcanic-obsidian via-volcanic-obsidian/80 to-transparent" />

      <div className="relative z-[1] mx-auto w-full max-w-sanctuary px-3 pb-10 pt-28 text-center md:pb-12">
        <p className="font-mono text-xs tracking-widest text-verdigris">THE OFFERING</p>
        <h1 className="mt-2 font-display text-[clamp(30px,5vw,52px)] tracking-liturgical text-limestone-ivory">
          {site.donate.headline}
        </h1>
        <p className="mx-auto mt-3 max-w-editorial font-accent text-[clamp(17px,2vw,21px)] italic text-limestone-ivory/80">
          {site.donate.subhead}
        </p>
      </div>
    </section>
  );
}
