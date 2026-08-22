/**
 * What: Points a full photo at its small river/gallery thumb.
 * Why: The river was loading 20 full-size expedition files (~20MB). Thumbs are ~40KB each.
 */
export function thumbSrc(src: string) {
  const file = src.split("/").pop() ?? src;
  const base = file.replace(/\.(png|webp|jpe?g)$/i, ".jpg");
  return `/images/thumbs/${base}`;
}
