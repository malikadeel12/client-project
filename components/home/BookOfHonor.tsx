"use client";

/**
 * What: CSS-only 3D Book of Honor that opens on scroll; names type themselves.
 * Why: A static book image would be a brochure. This is a living ledger.
 * Business rule: Names come from the real expedition — not invented donors.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { useTypewriter } from "@/hooks/useTypewriter";

export function BookOfHonor() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOpen(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-volcanic-obsidian px-3 py-18">
      <div className="mx-auto grid max-w-sanctuary items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center [perspective:1000px]">
          <div className="relative h-[280px] w-[210px]" style={{ transformStyle: "preserve-3d" }}>
            {[0, 1, 2, 3, 4].map((layer) => (
              <div
                key={layer}
                className="absolute inset-0 bg-parchment-warm shadow-[2px_0_8px_rgba(0,0,0,0.25)]"
                style={{
                  transform: `translateZ(${2 + layer * 2}px)`,
                }}
              />
            ))}
            <div
              className="absolute inset-0 origin-left bg-cocoa-bean p-4 text-center shadow-[-8px_0_20px_rgba(0,0,0,0.45)]"
              style={{
                transform: open ? "rotateY(-25deg)" : "rotateY(-160deg)",
                transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(184,115,51,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.35), transparent 45%)",
              }}
            >
              <p
                className="mt-8 font-display text-lg tracking-liturgical text-[#D4AF37]"
                style={{ textShadow: "0 1px 0 #8a6b1f, 0 2px 0 #5c4712, 0 0 12px rgba(212,175,55,0.35)" }}
              >
                LIVRO DE HONRA
              </p>
              <p className="mt-2 font-accent text-sm italic text-limestone-ivory/70">São Miguel</p>
            </div>
            <div className="absolute inset-y-3 right-3 left-[46%] overflow-hidden p-2">
              <LedgerNames active={open} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-liturgical text-verdigris md:text-[40px]">
            {site.home.bookHeadline}
          </h2>
          <p className="mt-3 max-w-editorial font-body text-limestone-ivory/85">{site.home.bookBody}</p>
          <p className="mt-4 font-accent italic text-limestone-ivory/75">{site.home.bookQuote}</p>
          <Link
            href="/donate"
            className="mt-6 inline-block rounded-button bg-verdigris px-4 py-2 font-body text-limestone-ivory transition hover:-translate-y-px hover:bg-copper-raw"
          >
            Inscribe My Name
          </Link>
        </div>
      </div>
    </section>
  );
}

function LedgerNames({ active }: { active: boolean }) {
  return (
    <ol className="space-y-1.5">
      {site.home.bookNames.map((name, i) => (
        <NameLine key={name} name={name} active={active} delay={400 + i * 700} />
      ))}
    </ol>
  );
}

function NameLine({ name, active, delay }: { name: string; active: boolean; delay: number }) {
  const typed = useTypewriter(name, active, delay);
  return <li className="font-mono text-sm text-verdigris">{typed || "\u00A0"}</li>;
}
