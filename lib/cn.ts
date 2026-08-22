/**
 * What: Tiny class merger so components stay readable.
 * Why: Avoids pulling in extra utility libraries for a two-line job.
 */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
