import type { Config } from "tailwindcss";

const themeColors = {
  primary: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#e53935",
    700: "#dc2626",
    800: "#b91c1c",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  accent: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
};

export const sharedTheme: Partial<Config["theme"]> = {
  extend: {
    colors: {
      ...themeColors,
      primary: themeColors.primary,
      accent: themeColors.accent,
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
        "SF Pro Display",
        "-apple-system",
        "BlinkMacSystemFont",
        "SF Pro Text",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      display: [
        "SF Pro Display",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      body: [
        "SF Pro Text",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: [
        "SF Mono",
        "ui-monospace",
        "Menlo",
        "Monaco",
        "Consolas",
        "monospace",
      ],
    },
    fontSize: {
      "2xs": ["0.625rem", { lineHeight: "0.875rem", letterSpacing: "0em" }],
      xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0em" }],
      sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.01em" }],
      base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.01em" }],
      lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
      xl: ["1.375rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
      "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.02em" }],
      "3xl": ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
      "4xl": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
      "5xl": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.02em" }],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0em",
      wide: "0.01em",
      wider: "0.02em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
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

export const lightThemeVariables = `:root {
  --color-primary-50: ${themeColors.primary[50]};
  --color-primary-100: ${themeColors.primary[100]};
  --color-primary-200: ${themeColors.primary[200]};
  --color-primary-300: ${themeColors.primary[300]};
  --color-primary-400: ${themeColors.primary[400]};
  --color-primary-500: ${themeColors.primary[500]};
  --color-primary-600: ${themeColors.primary[600]};
  --color-primary-700: ${themeColors.primary[700]};
  --color-primary-800: ${themeColors.primary[800]};
  --color-primary-900: ${themeColors.primary[900]};
  --color-primary-950: ${themeColors.primary[950]};
  
  --color-accent-50: ${themeColors.accent[50]};
  --color-accent-100: ${themeColors.accent[100]};
  --color-accent-200: ${themeColors.accent[200]};
  --color-accent-300: ${themeColors.accent[300]};
  --color-accent-400: ${themeColors.accent[400]};
  --color-accent-500: ${themeColors.accent[500]};
  --color-accent-600: ${themeColors.accent[600]};
  --color-accent-700: ${themeColors.accent[700]};
  --color-accent-800: ${themeColors.accent[800]};
  --color-accent-900: ${themeColors.accent[900]};
  --color-accent-950: ${themeColors.accent[950]};
  
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;
  
  --font-sans: "SF Pro Display", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace;
}`;

export function createTailwindConfig(overrides: Partial<Config> = {}): Config {
  return {
    content: [],
    theme: sharedTheme,
    plugins: [],
    ...overrides,
  };
}

export type { Config };
