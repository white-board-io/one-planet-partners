/**
 * Two-line designation for cards (e.g. "Founder & General Partner").
 */
export function splitDesignation(designation: string): {
  line1: string;
  line2: string;
} {
  const trimmed = designation.trim();
  const sep = " & ";
  const idx = trimmed.indexOf(sep);
  if (idx === -1) {
    return { line1: trimmed, line2: "" };
  }
  return {
    line1: `${trimmed.slice(0, idx)} &`,
    line2: trimmed.slice(idx + sep.length),
  };
}
