"use client";

/**
 * What: Editorial manuscript column — drop cap, pull quote fill, floating circular photos.
 * Why: A two-column mission block with icons would belong on any other church site.
 */

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ArchangelShield } from "@/components/svg/icons";

export function CovenantScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [filled, setFilled] = useState(false);
  const [arched, setArched] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const seen = window.innerHeight - rect.top;
      setProgress(Math.max(0, Math.min(1, seen / total)));
      if (rect.top < window.innerHeight * 0.55) {
        setFilled(true);
        setArched(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="parchment-grain relative overflow-hidden px-3 py-18">
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-verdigris opacity-[0.03] [animation:seal-orbit_120s_linear_infinite]">
        <ArchangelShield className="h-[420px] w-[336px]" />
      </div>

      <article className="relative mx-auto max-w-editorial">
        <p className="font-body text-base text-volcanic-obsidian">
          <span className="float-left mr-2 mt-1 font-display text-[80px] leading-none text-verdigris">
            {site.home.covenantLead[0]}
          </span>
          {site.home.covenantLead.slice(1)}
        </p>
        <p className="mt-4 font-body text-base text-volcanic-obsidian">{site.home.covenantBody}</p>

        <figure
          className={`my-5 ml-[-80px] hidden overflow-hidden md:block ${arched ? "gothic-arch" : "rounded-full"} h-[180px] w-[180px] transition-all duration-700`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.images.statueAltar.src}
            alt={site.images.statueAltar.alt}
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </figure>

        <blockquote className="relative my-10 px-2 text-center">
          <span className={`mx-auto mb-4 block w-0.5 bg-verdigris transition-all duration-700 ${filled ? "h-10" : "h-0"}`} />
          <p
            className={`font-display text-[clamp(24px,3vw,36px)] leading-tight tracking-liturgical ${
              filled ? "text-cocoa-bean" : "text-transparent"
            }`}
            style={
              filled
                ? undefined
                : { WebkitTextStroke: "1.5px #4A7C6F" }
            }
          >
            {site.home.pullQuote}
          </p>
          <span className={`mx-auto mt-4 block w-0.5 bg-verdigris transition-all duration-700 ${filled ? "h-10" : "h-0"}`} />
        </blockquote>

        <figure
          className={`my-5 mr-[-80px] ml-auto hidden overflow-hidden md:block ${arched ? "gothic-arch" : "rounded-full"} h-[180px] w-[180px] transition-all duration-700`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.images.ines.src}
            alt={site.images.ines.alt}
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </figure>

        <p className="font-body text-base text-volcanic-obsidian">{site.home.covenantClose}</p>
        <p className="mt-4 font-accent italic text-cocoa-bean">{site.calling}</p>
      </article>

      <div className="pointer-events-none fixed right-0 top-0 z-20 hidden h-full w-px bg-verdigris/20 md:block">
        <div className="w-full bg-verdigris" style={{ height: `${progress * 100}%` }} />
      </div>
    </section>
  );
}
