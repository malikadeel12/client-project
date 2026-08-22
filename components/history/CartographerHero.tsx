/**
 * What: History hero — the southern shore, then the three true dates.
 * Why: A lone SVG map on empty teal felt like a diagram, not a pilgrimage.
 *      The first thing you see should be the coast you can only reach by boat.
 * Related: mountain-coast.jpg, History.docx (1470 / 1519 / 1883 / 2025)
 */

import { site } from "@/content/site";

export function CartographerHero() {
  const photo = site.images.mountainCoast;

  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-atlantic-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-volcanic-obsidian/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-volcanic-obsidian via-volcanic-obsidian/80 to-transparent" />

      <div className="relative z-[1] mx-auto w-full max-w-sanctuary px-3 pb-10 pt-28 md:pb-14">
        <p className="font-mono text-xs tracking-widest text-verdigris">
          1519 · 1883 · 24 JUNE 2025
        </p>
        <h1 className="mt-2 max-w-[16ch] font-display text-[clamp(32px,6vw,64px)] leading-[1.08] tracking-liturgical text-limestone-ivory">
          {site.history.headline}
        </h1>
        <p className="mt-3 max-w-editorial font-accent text-[clamp(17px,2vw,22px)] italic text-limestone-ivory/85">
          {site.history.subhead}
        </p>
        <ol className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-limestone-ivory/80">
          <li className="border border-verdigris/50 px-2 py-1">1519 · Rio de S. Michaelis</li>
          <li className="border border-copper-raw/50 px-2 py-1">1883 · Roça founded</li>
          <li className="border border-verdigris px-2 py-1 text-verdigris">2025 · Chapel found again</li>
        </ol>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-verdigris">
          Scroll to unfold the chronicle
        </p>
      </div>
    </section>
  );
}
