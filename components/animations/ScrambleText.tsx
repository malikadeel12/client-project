"use client";

import { useScrambleText } from "@/hooks/useScrambleText";

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const { display, scramble, reset } = useScrambleText(text);

  return (
    <span className={className} onMouseEnter={scramble} onMouseLeave={reset}>
      {display}
    </span>
  );
}
