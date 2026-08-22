import type { Config } from "tailwindcss";

/**
 * What: Custom Tailwind theme for the Chapel of the Archangel Michael.
 * Why: The brief forbids default kit colors and spacing — the Roça palette
 *      must be the only visual language on this site.
 * Related: app/globals.css, content/site.ts
 * Practice: Token-first design (no unnamed hex in components).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    // --- Color System: The Roça Palette ---
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      verdigris: "#4A7C6F",
      "copper-raw": "#B87333",
      "volcanic-obsidian": "#1A1614",
      "cocoa-bean": "#3D2817",
      "limestone-ivory": "#F3EFE6",
      "atlantic-deep": "#0F3D3E",
      "rainforest-canopy": "#2D4A3E",
      "terracotta-dust": "#9C6B4F",
      "parchment-warm": "#E8E0D4",
      "moss-stone": "#6B7B6E",
    },
    // --- Spacing: 8px base, editorial rhythm ---
    spacing: {
      0: "0px",
      px: "1px",
      0.5: "4px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      10: "80px",
      12: "96px",
      14: "112px",
      16: "128px",
      18: "140px",
      20: "160px",
      24: "192px",
      28: "224px",
      32: "256px",
    },
    // --- Type: Major Third (1.250) ---
    fontSize: {
      xs: ["12px", { lineHeight: "1.6" }],
      sm: ["14px", { lineHeight: "1.7" }],
      base: ["16px", { lineHeight: "1.7" }],
      lg: ["20px", { lineHeight: "1.6" }],
      xl: ["25px", { lineHeight: "1.4" }],
      "2xl": ["31px", { lineHeight: "1.25" }],
      "3xl": ["39px", { lineHeight: "1.15" }],
      "4xl": ["49px", { lineHeight: "1.1" }],
      "5xl": ["61px", { lineHeight: "1.1" }],
      "6xl": ["76px", { lineHeight: "1.05" }],
    },
    fontFamily: {
      display: ["var(--font-cinzel)", "serif"],
      body: ["var(--font-source)", "sans-serif"],
      accent: ["var(--font-crimson)", "serif"],
      mono: ["var(--font-plex)", "monospace"],
    },
    borderRadius: {
      none: "0px",
      button: "2px",
      card: "4px",
      field: "2px",
      full: "100px",
    },
    maxWidth: {
      editorial: "640px",
      sanctuary: "1200px",
      reliquary: "920px",
      offering: "720px",
      scroll: "700px",
      full: "100%",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      letterSpacing: {
        liturgical: "0.03em",
      },
      transitionTimingFunction: {
        divine: "cubic-bezier(0.16, 1, 0.3, 1)",
        settle: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        depart: "cubic-bezier(0.7, 0, 0.84, 0)",
        sacred: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        ink: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
