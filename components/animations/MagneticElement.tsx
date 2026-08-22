"use client";

/**
 * What: Element follows the cursor inside a radius, then springs home.
 * Why: React Spring tension 150 / friction 15 — the magnetic seal, not a CSS hover.
 */

import { animated, useSpring } from "@react-spring/web";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MagneticElement({
  children,
  radius = 60,
  className,
}: {
  children: ReactNode;
  radius?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 150, friction: 15 },
  }));

  return (
    <animated.div
      ref={ref}
      className={className}
      style={spring}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const box = ref.current.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + box.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) api.start({ x: dx * 0.35, y: dy * 0.35 });
        else api.start({ x: 0, y: 0 });
      }}
      onMouseLeave={() => api.start({ x: 0, y: 0 })}
    >
      {children}
    </animated.div>
  );
}
