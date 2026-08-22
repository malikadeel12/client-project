"use client";

/**
 * What: Characters randomize for 250ms, then resolve — React Bits style, written here.
 * Why: The menu must not use a purchased scramble widget.
 */

import { useCallback, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÃÕÇ";

export function useScrambleText(original: string) {
  const [display, setDisplay] = useState(original);
  const frame = useRef(0);

  const scramble = useCallback(() => {
    cancelAnimationFrame(frame.current);
    const started = performance.now();
    const duration = 250;

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const resolved = Math.floor(t * original.length);
      const next = original
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < resolved) return original[i];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(next);
      if (t < 1) frame.current = requestAnimationFrame(tick);
      else setDisplay(original);
    };

    frame.current = requestAnimationFrame(tick);
  }, [original]);

  const reset = useCallback(() => setDisplay(original), [original]);

  return { display, scramble, reset };
}
