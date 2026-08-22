"use client";

/**
 * What: Horizontally pinned chronicle — three full panels scrubbed by vertical scroll.
 * Why: Vertical dotted timelines are the most templated history pattern on earth.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { useTypewriter } from "@/hooks/useTypewriter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { RainOverlay } from "@/components/canvas/RainOverlay";

gsap.registerPlugin(ScrollTrigger);

export function ChronicleScroll() {
  const reduced = usePrefersReducedMotion();
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pin.current || !track.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.to(track.current, {
        xPercent: -66.666,
        ease: "none",
        scrollTrigger: {
          trigger: pin.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2400",
        },
      });
    }, pin);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={pin} className="relative overflow-hidden">
      <div ref={track} className="flex h-screen w-[300%]">
        <AtlasPanel />
        <FoundationPanel />
        <CallPanel />
      </div>
    </section>
  );
}

function AtlasPanel() {
  const chapter = site.history.chapters[0];
  const parts = chapter.text.split(/(Miller Atlas|Rio de S\. Michaelis|1470)/);

  return (
    <article className="parchment-grain relative flex h-full w-1/3 items-center justify-center px-5">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <filter id="ink-bleed">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="n">
            <animate attributeName="baseFrequency" values="0.02;0.035;0.02" dur="8s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="8" />
        </filter>
        <rect width="100%" height="100%" fill="#E8E0D4" filter="url(#ink-bleed)" />
      </svg>
      <div className="relative max-w-editorial">
        <p className="font-mono text-sm text-verdigris">
          {chapter.year} — {chapter.title}
        </p>
        <p className="mt-4 font-display text-[clamp(20px,2.4vw,28px)] leading-snug text-cocoa-bean">
          {parts.map((part, i) =>
            (chapter.highlightWords as readonly string[]).includes(part) ? (
              <span key={i} className="text-verdigris">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      </div>
    </article>
  );
}

function FoundationPanel() {
  const chapter = site.history.chapters[1];
  return (
    <article className="relative flex h-full w-1/3 items-end bg-volcanic-obsidian px-5 pb-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.images.chapelExterior.src}
        alt={site.images.chapelExterior.alt}
        className="develop-photo absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#1A1614_85%)]" />
      <div className="relative max-w-editorial">
        <p className="font-mono text-sm text-verdigris">
          {chapter.year} — {chapter.title}
        </p>
        <TypedBlock text={chapter.text} />
      </div>
    </article>
  );
}

function TypedBlock({ text }: { text: string }) {
  const typed = useTypewriter(text, true, 400);
  return <p className="mt-3 font-mono text-sm leading-relaxed text-limestone-ivory">{typed}</p>;
}

function CallPanel() {
  const chapter = site.history.chapters[2];
  return (
    <article className="relative flex h-full w-1/3 items-center justify-center overflow-hidden bg-atlantic-deep px-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.images.chapelPortal.src}
        alt={site.images.chapelPortal.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <RainOverlay />
      <div className="relative max-w-editorial mist-in">
        <p className="font-mono text-sm text-verdigris">
          {chapter.year} — {chapter.title}
        </p>
        <p className="mt-4 font-display text-xl text-limestone-ivory md:text-2xl">{chapter.text}</p>
      </div>
    </article>
  );
}
