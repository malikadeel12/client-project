"use client";

/**
 * What: Home hero — "The Threshold." The real chapel doorway is the first image.
 * Why: The old hero hid São Miguel behind a landscape blob and a dark veil.
 *      Visitors should feel they have arrived at the ruin, not a graphic effect.
 * Related: public/images/expedition-3481.jpg (24 June 2025 portal)
 */

import Link from "next/link";
import { site } from "@/content/site";

export function HeroCalling() {
  const photo = site.images.chapelPortal;

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-volcanic-obsidian">
      {/* The chapel itself — not a clip-path, not a stock coast */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_62%] hero-still"
      />

      {/* Solid dusk under the words — pale plaster was swallowing the ivory type */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[72%] bg-gradient-to-t from-[#14110F] from-35% via-[#14110F]/92 to-transparent" />

      <div className="relative z-[2] mx-auto w-full max-w-sanctuary px-3 pb-10 pt-28 md:pb-14">
        <p className="font-mono text-xs tracking-widest text-verdigris">
          ROÇA DE SÃO MIGUEL · 24 JUNE 2025
        </p>
        <h1 className="mt-2 max-w-[18ch] font-display text-[clamp(32px,6vw,68px)] leading-[1.08] tracking-liturgical text-limestone-ivory [text-shadow:0_2px_18px_rgba(20,17,15,0.9)]">
          {site.home.headline}
        </h1>
        <p className="mt-3 max-w-editorial font-accent text-[clamp(17px,2vw,22px)] italic text-limestone-ivory [text-shadow:0_1px_12px_rgba(20,17,15,0.85)]">
          {site.home.subhead}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/donate"
            className="rounded-button bg-verdigris px-5 py-2.5 font-body text-limestone-ivory transition hover:-translate-y-px hover:bg-copper-raw"
          >
            Make an Offering
          </Link>
          <Link
            href="/history"
            className="rounded-button border border-limestone-ivory/45 px-5 py-2.5 font-body text-limestone-ivory transition hover:border-verdigris hover:text-verdigris"
          >
            Read the story
          </Link>
        </div>
      </div>
    </section>
  );
}
