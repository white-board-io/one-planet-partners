/**
 * Two-line name layout for compact cards.
 * - Typical names: split on last space ("Dr. Mukund Rajan" → "Dr. Mukund" / "Rajan").
 * - Quoted nickname + surname: split after first word so line 1 stays short
 *   ('Rajendra "Raju" Bhinge' → "Rajendra" / '"Raju" Bhinge').
 */
const QUOTED_NICKNAME_THEN_SURNAME = /^(\S+)\s+("[^"]+")\s+(\S+)$/;

export function splitPersonName(name: string): { line1: string; line2: string } {
  const trimmed = name.trim();
  const nick = trimmed.match(QUOTED_NICKNAME_THEN_SURNAME);
  if (nick) {
    return { line1: nick[1]!, line2: `${nick[2]!} ${nick[3]!}` };
  }
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace <= 0) {
    return { line1: trimmed, line2: "" };
  }
  return {
    line1: trimmed.slice(0, lastSpace),
    line2: trimmed.slice(lastSpace + 1),
  };
}
