"use client";

/**
 * What: The Floating Reliquary — glass pill, morphing hamburger, diptych overlay.
 * Why: A sticky logo-left navbar would fail the anti-template test immediately.
 * Business rule: "Make an Offering" is the only primary CTA and always leads to /donate.
 */

import { animated, useSpring } from "@react-spring/web";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ScrambleText } from "@/components/animations/ScrambleText";
import { ArchangelShield } from "@/components/svg/icons";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(0.3);

  const top = useSpring({
    rotate: open ? 45 : 0,
    y: open ? 6 : 0,
    config: { tension: 280, friction: 14, mass: 0.7 },
  });
  const mid = useSpring({
    opacity: open ? 0 : 1,
    scaleX: open ? 0 : 1,
    config: { tension: 260, friction: 16 },
  });
  const bot = useSpring({
    rotate: open ? -45 : 0,
    y: open ? -6 : 0,
    config: { tension: 280, friction: 14, mass: 0.7 },
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const delta = Math.abs(window.scrollY - last);
      last = window.scrollY;
      setSpin(0.3 + Math.min(delta, 24) * 0.08);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed left-1/2 top-2.5 z-50 w-[90%] max-w-reliquary -translate-x-1/2">
        <div className="pointer-events-auto relative flex items-center justify-between rounded-full border border-verdigris/15 bg-[rgba(243,239,230,0.75)] px-3 py-1.5 backdrop-blur-[20px] saturate-150">
          <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/40" />

          <Link href="/" className="flex items-center gap-1.5 text-cocoa-bean" aria-label="São Miguel home">
            <span
              className="inline-flex h-5 w-4 text-verdigris"
              style={{ animation: `shield-spin ${360 / Math.max(spin, 0.2)}s linear infinite` }}
            >
              <ArchangelShield className="h-full w-full" />
            </span>
            <span className="font-display text-sm tracking-liturgical">{site.wordmark}</span>
          </Link>

          <nav className="hidden items-center gap-3 md:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-sm tracking-liturgical transition ${
                  pathname === item.href ? "text-verdigris" : "text-cocoa-bean hover:text-verdigris"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/donate"
              className="rounded-button bg-verdigris px-3 py-1 font-body text-sm text-limestone-ivory transition duration-200 ease-settle hover:-translate-y-px hover:bg-copper-raw"
            >
              Make an Offering
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden"
            >
              <animated.span
                className="absolute block h-px w-4 bg-volcanic-obsidian"
                style={{
                  transform: top.rotate.to((r) => `translateY(${open ? 0 : -6}px) rotate(${r}deg)`),
                }}
              />
              <animated.span
                className="absolute block h-px w-4 bg-volcanic-obsidian"
                style={{ opacity: mid.opacity, transform: mid.scaleX.to((s) => `scaleX(${s})`) }}
              />
              <animated.span
                className="absolute block h-px w-4 bg-volcanic-obsidian"
                style={{
                  transform: bot.rotate.to((r) => `translateY(${open ? 0 : 6}px) rotate(${r}deg)`),
                }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex w-full flex-col justify-center bg-volcanic-obsidian px-5 md:w-[55%]" aria-label="Primary">
              <ul className="flex flex-col gap-8">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-display text-[clamp(32px,6vw,56px)] tracking-liturgical text-limestone-ivory"
                    >
                      <ScrambleText text={item.label} />
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => router.push("/donate")}
                className="mt-8 w-fit rounded-button bg-verdigris px-4 py-2 font-body text-limestone-ivory hover:bg-copper-raw"
              >
                Make an Offering
              </button>
            </nav>
            <DiptychPhoto />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DiptychPhoto() {
  const [shift, setShift] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative hidden overflow-hidden md:block md:w-[45%]"
      onMouseMove={(e) => {
        const box = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - box.left) / box.width - 0.5) * -30;
        const y = ((e.clientY - box.top) / box.height - 0.5) * -30;
        setShift({ x: Math.max(-15, Math.min(15, x)), y: Math.max(-15, Math.min(15, y)) });
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.images.chapelPortal.src}
        alt={site.images.chapelPortal.alt}
        width={site.images.chapelPortal.w}
        height={site.images.chapelPortal.h}
        className="h-full w-full object-cover"
        style={{ transform: `translate(${shift.x}px, ${shift.y}px) scale(1.08)` }}
      />
    </div>
  );
}
