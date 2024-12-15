export interface oldTheme {
  name: string;
  color_01: string;
  color_02: string;
  color_03: string;
  color_04: string;
  color_05: string;
  color_06: string;
  color_07: string;
  color_08: string;
  color_09: string;
  color_10: string;
  color_11: string;
  color_12: string;
  color_13: string;
  color_14: string;
  color_15: string;
  color_16: string;
  background: string;
  foreground: string;
  cursor: string;
}

export function convertTheme(theme: oldTheme) {
  return {
    name: theme.name,
    background: theme.background,
    foreground: theme.foreground,
    cursor: theme.cursor,
    colors: [
      theme.color_01,
      theme.color_02,
      theme.color_03,
      theme.color_04,
      theme.color_05,
      theme.color_06,
      theme.color_07,
      theme.color_08,
      theme.color_09,
      theme.color_10,
      theme.color_11,
      theme.color_12,
      theme.color_13,
      theme.color_14,
      theme.color_15,
      theme.color_16,
    ],
  };
}

export function lightOrDark(color: string) {
  // Ensure the hex format is valid
  const sanitizedHex = color.replace(/^#/, "");
  if (!/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(sanitizedHex)) {
    throw new Error("Invalid hex color format");
  }

  // Expand shorthand hex codes (e.g., #abc -> #aabbcc)
  const fullHex = sanitizedHex.length === 3
    ? sanitizedHex.split("").map((char) => char + char).join("")
    : sanitizedHex;

  // Extract RGB components
  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}
