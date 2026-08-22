"use client";

/**
 * What: Asymmetric documentary masonry + custom FLIP lightbox.
 * Why: Plugin lightboxes and even card grids are forbidden.
 */

import { useEffect, useState } from "react";
import { witnessImages } from "@/content/site";
import { thumbSrc } from "@/lib/image";

export function WitnessGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % witnessImages.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + witnessImages.length) % witnessImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="bg-limestone-ivory px-3 py-18">
      <div className="mx-auto max-w-sanctuary columns-1 gap-3 sm:columns-2 lg:columns-3">
        {witnessImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative mb-3 block w-full overflow-hidden ${i % 3 === 1 ? "-mt-2" : ""} ${
              i % 4 === 0 ? "sm:-ml-2" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbSrc(img.src)}
              loading="lazy"
              decoding="async"
              alt={img.alt}
              width={img.w}
              height={img.h}
              className="w-full object-cover contrast-125 [filter:grayscale(1)_sepia(0.25)_hue-rotate(90deg)_saturate(0.7)] transition duration-500 group-hover:[filter:none]"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-limestone-ivory/30 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-verdigris px-2 py-1 text-left font-mono text-xs text-limestone-ivory transition group-hover:translate-y-0">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-volcanic-obsidian/95"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={witnessImages[active].src}
            alt={witnessImages[active].alt}
            className="max-h-[88vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 font-mono text-xs text-limestone-ivory">
            {witnessImages[active].caption}
          </p>
        </div>
      )}
    </section>
  );
}
