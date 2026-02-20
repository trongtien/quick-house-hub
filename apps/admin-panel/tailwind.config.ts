import { createTailwindConfig } from '@libs/theme-token';
import type { Config } from 'tailwindcss';

const config: Config = createTailwindConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
});

export default config;
