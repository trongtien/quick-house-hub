import { createTailwindConfig } from "@conventions/tailwindcss";
import type { Config } from "tailwindcss";

const config: Config = createTailwindConfig({
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
});

export default config;
