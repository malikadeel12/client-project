"use client";

/**
 * What: Human-like typing with 50–150ms variance between glyphs.
 * Why: A constant-speed typewriter reads as a machine. This one hesitates.
 */

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useTypewriter(text: string, active: boolean, startDelay = 0) {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!active) {
      setShown("");
      return;
    }
    if (reduced) {
      setShown(text);
      return;
    }

    let i = 0;
    let timer: number;
    const start = window.setTimeout(() => {
      const step = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          timer = window.setTimeout(step, 50 + Math.random() * 100);
        }
      };
      step();
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer);
    };
  }, [text, active, startDelay, reduced]);

  return shown;
}
