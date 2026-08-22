"use client";

/**
 * What: Canvas offering fire — verdigris cores, copper glow, mouse as wind.
 * Why: The donate hero must not be a stock gradient. This is the altar flame.
 */

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  r: number;
};

export function EternalFlame() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const embers: Ember[] = [];
    const mouse = { x: 0.5, y: 0.5 };
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.round(window.innerHeight * 0.8);
    };
    resize();

    const spawn = () => {
      embers.push({
        x: canvas.width * (0.35 + Math.random() * 0.3),
        y: canvas.height + 8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(1.1 + Math.random() * 1.6),
        life: 0,
        max: 90 + Math.random() * 70,
        r: 1.2 + Math.random() * 2.4,
      });
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };

    const loop = () => {
      ctx.fillStyle = "rgba(26, 22, 20, 0.28)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (!reduced) {
        for (let i = 0; i < 3; i += 1) spawn();
      }
      const wind = (mouse.x - 0.5) * 1.4;
      for (let i = embers.length - 1; i >= 0; i -= 1) {
        const e = embers[i];
        e.life += 1;
        e.x += e.vx + wind;
        e.y += e.vy;
        const t = e.life / e.max;
        if (t >= 1) {
          embers.splice(i, 1);
          continue;
        }
        const alpha = 1 - t;
        ctx.beginPath();
        ctx.fillStyle = `rgba(74, 124, 111, ${alpha})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(184, 115, 51, ${alpha * 0.55})`;
        ctx.arc(e.x, e.y, e.r * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    ctx.fillStyle = "#1A1614";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced]);

  return <canvas ref={ref} className="absolute inset-0 z-0 h-full w-full" aria-hidden="true" />;
}
