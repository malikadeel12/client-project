"use client";

/**
 * What: Memory Current — Gothic-arch photographs on a slow 3D cylinder.
 * Why: A carousel or marquee would look like every nonprofit kit.
 */

import { useEffect, useRef, useState } from "react";
import { riverImages, site } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { thumbSrc } from "@/lib/image";

export function PhotoRiver() {
  const reduced = usePrefersReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const speed = useRef(35);
  const offset = useRef(0);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      offset.current -= speed.current * dt;
      const el = track.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (Math.abs(offset.current) > half) offset.current = 0;
        el.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const frames = [...riverImages, ...riverImages];

  return (
    <section
      className="parchment-grain relative overflow-hidden py-18"
      onMouseMove={(e) => {
        const x = e.clientX / window.innerWidth;
        if (x < 0.22) speed.current = 60;
        else if (x > 0.78) speed.current = 15;
        else speed.current = 35;
      }}
    >
      <div className="[perspective:1200px]">
        <div ref={track} className="flex w-max items-end gap-4 will-change-transform">
          {frames.map((img, i) => {
            const tilt = ((i % 10) - 5) * 6;
            const open = hover === i;
            return (
              <figure
                key={`${img.src}-${i}`}
                className="relative h-[280px] w-[200px] shrink-0 overflow-hidden border-2 border-transparent transition-[border-color] duration-500"
                style={{
                  transform: `rotateY(${tilt}deg)`,
                  borderColor: open ? "#4A7C6F" : "transparent",
                }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbSrc(img.src)}
                  alt={img.alt}
                  width={400}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover transition-[clip-path,filter] duration-[600ms] ease-settle ${
                    open ? "gothic-rect grayscale-0" : "gothic-arch grayscale"
                  }`}
                />
              </figure>
            );
          })}
        </div>
      </div>
      <p className="pointer-events-none absolute inset-x-3 top-1/2 -translate-y-1/2 bg-parchment-warm/80 px-3 py-2 text-center font-accent text-lg italic text-cocoa-bean md:inset-x-1/4 md:text-[28px]">
        {site.home.riverQuote}
      </p>
    </section>
  );
}
