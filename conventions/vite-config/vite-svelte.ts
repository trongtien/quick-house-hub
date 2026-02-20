import { defineConfig, type UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export interface ViteSvelteOptions {
  port?: number;
  viteConfig?: UserConfig;
  svelteOptions?: Parameters<typeof svelte>[0];
}

export function registerViteSvelte(options: ViteSvelteOptions = {}) {
  const { port = 3000, viteConfig = {}, svelteOptions = {} } = options;

  return defineConfig({
    plugins: [svelte(svelteOptions)],
    server: {
      port,
      strictPort: false,
      host: true,
    },
    build: {
      target: "esnext",
      minify: "esbuild",
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
        sass: {
          api: "modern-compiler",
        },
      },
      postcss: {
        plugins: [],
      },
    },
    resolve: {
      dedupe: ["svelte"],
    },
    ...viteConfig,
  });
}
