import { defineConfig, type UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

export interface ViteSvelteOptions {
  port?: number;
  viteConfig?: UserConfig;
  svelteOptions?: Parameters<typeof svelte>[0];
  rootDir?: string;
}

export function registerViteSvelte(options: ViteSvelteOptions = {}) {
  const {
    port = 3000,
    viteConfig = {},
    svelteOptions = {},
    rootDir = process.cwd(),
  } = options;

  // Resolve paths for shared libraries
  const workspaceRoot = path.resolve(rootDir, "../..");
  const uiPath = path.resolve(workspaceRoot, "libs/ui/src");
  const utilsPath = path.resolve(workspaceRoot, "libs/utils/src");

  return defineConfig({
    plugins: [
      svelte({
        ...svelteOptions,
      }),
    ],
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
      alias: {
        "@quick-house-hub/ui": uiPath,
        "@quick-house-hub/utils": utilsPath,
      },
    },
    ...viteConfig,
  });
}
