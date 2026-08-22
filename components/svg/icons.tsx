/**
 * What: Every mark on this site — no Lucide, no Font Awesome, no Heroicons.
 * Why: Generic icon packs make every nonprofit look the same.
 * Related: Navigation, Footer, Donate, Contact
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArchangelShield({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true" {...props}>
      <path
        d="M32 2 L58 14 V38 C58 58 44 72 32 78 C20 72 6 58 6 38 V14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M32 16 L40 34 H24 Z M32 30 V58 M24 46 L32 54 L40 46"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuillIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <path
        d="M8 40 C16 28 28 10 42 8 C38 16 26 26 18 34 L8 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M18 34 L14 38" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CameraObscuraIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect x="8" y="14" width="32" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="25" r="2" fill="currentColor" />
      <path d="M16 14 L20 8 H28 L32 14" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function DoveIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <path
        d="M8 28 C16 20 22 16 28 14 C26 10 30 8 34 10 C40 12 42 20 36 24 C42 26 40 34 32 34 H18 C12 34 8 32 8 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M20 34 C20 38 16 40 12 40" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SealedEnvelopeIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect x="6" y="12" width="36" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 12 L24 26 L42 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="26" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function WaxSealMark({
  label = "SÃO MIGUEL",
  size = 120,
}: {
  label?: string;
  size?: number;
}) {
  const id = `seal-${label.replace(/\s/g, "")}-${size}`;
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="#B87333" />
      <circle cx="60" cy="60" r="48" fill="#4A7C6F" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="#F3EFE6" strokeWidth="1.2" opacity="0.55" />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#F3EFE6"
        fontFamily="Cinzel, serif"
        fontSize="11"
        letterSpacing="1.6"
      >
        {label}
      </text>
      <defs>
        <path id={id} d="M60,18 A42,42 0 1,1 59.9,18" />
      </defs>
    </svg>
  );
}

export function StoneChip({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M4 16 L8 6 L16 5 L21 12 L17 20 L7 19 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PaperAirplane({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path d="M6 32 L58 8 L28 36 L24 54 L34 38 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function LoadingRing({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="18" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.25" />
      <path d="M42 24 A18 18 0 0 0 24 6" fill="none" stroke="#4A7C6F" strokeWidth="2" />
    </svg>
  );
}

export function HouseMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M4 12 L12 5 L20 12 V20 H4 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 20 V14 H14 V20" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
