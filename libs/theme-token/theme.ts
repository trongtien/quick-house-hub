import type { Config } from "tailwindcss";

/**
 * Shared Tailwind CSS theme configuration
 * This theme can be extended by all applications in the monorepo
 */
export const sharedTheme: Partial<Config["theme"]> = {
  extend: {
    colors: {
      // Primary brand colors
      primary: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
      // Secondary brand colors
      secondary: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
      },
      // Neutral colors
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      mono: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "monospace",
      ],
    },
    spacing: {
      "72": "18rem",
      "84": "21rem",
      "96": "24rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
    boxShadow: {
      "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.1)",
    },
  },
};

/**
 * Base Tailwind CSS configuration
 * Applications can extend this configuration with their own settings
 */
export function createTailwindConfig(overrides: Partial<Config> = {}): Config {
  return {
    content: [],
    theme: sharedTheme,
    plugins: [],
    ...overrides,
  };
}

export type { Config };
