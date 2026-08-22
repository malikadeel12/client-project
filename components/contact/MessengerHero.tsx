/**
 * What: Contact hero — a short welcome over Inês at the statue.
 * Why: Seventy percent of a blank ivory page felt empty, as if the letter
 *      had no place to arrive. A quieter photo keeps the form close.
 * Related: ines-barabola.jpg (June 2025 expedition)
 */

import { site } from "@/content/site";

export function MessengerHero() {
  const photo = site.images.ines;

  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-cocoa-bean">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-volcanic-obsidian via-volcanic-obsidian/75 to-transparent" />

      <div className="relative z-[1] mx-auto w-full max-w-sanctuary px-3 pb-10 pt-28 md:pb-12">
        <p className="font-mono text-xs tracking-widest text-verdigris">A LETTER TO SÃO MIGUEL</p>
        <h1 className="mt-2 max-w-[16ch] font-display text-[clamp(30px,5vw,52px)] tracking-liturgical text-limestone-ivory">
          {site.contact.headline}
        </h1>
        <p className="mt-3 max-w-editorial font-accent text-[clamp(17px,2vw,21px)] italic text-limestone-ivory/85">
          {site.contact.subhead}
        </p>
      </div>
    </section>
  );
}
