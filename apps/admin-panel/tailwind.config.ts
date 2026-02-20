import { createTailwindConfig } from "@libs/theme-token";
import type { Config } from "tailwindcss";

const config: Config = createTailwindConfig({
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
});

export default config;
