/**
 * What: Named easings for every ritual motion on the site.
 * Why: Default "ease-out" fades feel like a template. These curves
 *      are the liturgy of motion — each one has a spiritual job.
 * Related: tailwind.config.ts, animation components
 */

export const LITURGY_EASE = {
  divineArrival: [0.16, 1, 0.3, 1] as const,
  gentleSettle: [0.25, 0.46, 0.45, 0.94] as const,
  quickDeparture: [0.7, 0, 0.84, 0] as const,
  sacredSpring: [0.68, -0.55, 0.265, 1.55] as const,
  inkFlow: [0.4, 0, 0.2, 1] as const,
};

export const LITURGY_EASE_CSS = {
  divineArrival: "cubic-bezier(0.16, 1, 0.3, 1)",
  gentleSettle: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  quickDeparture: "cubic-bezier(0.7, 0, 0.84, 0)",
  sacredSpring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  inkFlow: "cubic-bezier(0.4, 0, 0.2, 1)",
};
