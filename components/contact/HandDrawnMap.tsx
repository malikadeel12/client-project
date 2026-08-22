"use client";

/**
 * What: Illustrated São Tomé map — not Google. Chapel sonar, roça houses, rainforest wash.
 */

import { useState } from "react";
import { site } from "@/content/site";
export function HandDrawnMap() {
  const [tip, setTip] = useState(false);

  return (
    <section className="bg-limestone-ivory px-3 pb-18">
      <div className="relative mx-auto max-w-offering">
        <svg viewBox="0 0 640 420" className="w-full" role="img" aria-label={site.contact.location}>
          <path
            d="M80,40 C200,10 280,90 250,180 C230,250 280,310 240,370 C180,410 90,360 70,280 C50,190 20,80 80,40 Z"
            fill="#2D4A3E"
            opacity="0.35"
          />
          <path
            d="M110,70 C210,50 250,120 230,190 C215,250 250,310 210,360 C160,390 100,340 90,270 C80,190 60,95 110,70 Z"
            fill="none"
            stroke="#1A1614"
            strokeWidth="1.6"
          />
          <path
            d="M430,50 C500,40 540,90 520,140 C505,180 530,220 500,250 C460,280 410,250 400,200 C390,150 400,65 430,50 Z"
            fill="#2D4A3E"
            opacity="0.28"
          />
          <path
            d="M450,70 C500,60 525,105 510,145 C498,178 518,215 490,235 C460,255 430,230 425,190 C420,150 425,85 450,70 Z"
            fill="none"
            stroke="#1A1614"
            strokeWidth="1.4"
          />
          <g transform="translate(182 192)" stroke="#3D2817" fill="none" strokeWidth="1.2">
            <path d="M4 12 L12 5 L20 12 V20 H4 Z" />
            <path d="M10 20 V14 H14 V20" />
          </g>
          <g
            transform="translate(220 340)"
            onMouseEnter={() => setTip(true)}
            onMouseLeave={() => setTip(false)}
            className="cursor-pointer"
          >
            <circle r="14" fill="none" stroke="#4A7C6F" className="animate-ping" />
            <circle r="8" fill="none" stroke="#4A7C6F" opacity="0.5" />
            <circle r="4" fill="#4A7C6F" />
          </g>
        </svg>
        {tip && (
          <div className="absolute bottom-16 left-1/3 w-48 bg-volcanic-obsidian p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.images.chapelPortal.src}
              alt={site.images.chapelPortal.alt}
              className="h-20 w-full object-cover opacity-70"
            />
            <p className="mt-1 font-mono text-[11px] text-limestone-ivory">{site.contact.mapTooltip}</p>
          </div>
        )}
      </div>
      <div className="mx-auto mt-6 max-w-editorial text-center font-mono text-sm text-moss-stone">
        <p>Location: {site.contact.location}</p>
        <p className="mt-1">
          Instagram {site.social.instagram.handle} ·{" "}
          <a className="text-verdigris" href={site.social.facebook.href} target="_blank" rel="noreferrer">
            Facebook sanctuary
          </a>
        </p>
        <p className="mt-2">{site.contact.note}</p>
      </div>
    </section>
  );
}
