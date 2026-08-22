/**
 * What: First focusable control — jump past the floating reliquary.
 * Why: WCAG 2.1 AA requires a skip link for keyboard visitors.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[90] focus:bg-verdigris focus:px-3 focus:py-2 focus:font-body focus:text-sm focus:text-limestone-ivory"
    >
      Skip to the sanctuary
    </a>
  );
}
