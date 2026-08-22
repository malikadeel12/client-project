"use client";

/**
 * What: 200 rain droplets with splash — Canvas 2D, no library.
 * Why: The present-day chapter must feel like standing in the roofless chapel.
 */

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Drop = { x: number; y: number; vy: number; len: number };

export function RainOverlay() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const drops: Drop[] = [];

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();

    for (let i = 0; i < 200; i += 1) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: 4 + Math.random() * 7,
        len: 8 + Math.random() * 10,
      });
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(243,239,230,0.35)";
      ctx.lineWidth = 1;
      for (const d of drops) {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();
        d.y += d.vy;
        if (d.y > canvas.height) {
          ctx.beginPath();
          ctx.ellipse(d.x, canvas.height - 2, 3, 1.2, 0, 0, Math.PI * 2);
          ctx.stroke();
          d.y = -10;
          d.x = Math.random() * canvas.width;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
