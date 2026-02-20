import { defineConfig, type RsbuildConfig } from "@rsbuild/core";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginSvelte } from "@rsbuild/plugin-svelte";
import path from "node:path";

export interface RsBuildSvelteOptions {
  port?: number;
  rsbuildConfig?: RsbuildConfig;
  svelteOptions?: Parameters<typeof pluginSvelte>[0];
  sassOptions?: Parameters<typeof pluginSass>[0];
  rootDir?: string;
}

/**
 * Shared Rsbuild configuration for Svelte applications
 * Includes:
 * - Svelte plugin
 * - Sass/SCSS plugin with modern compiler
 * - Tailwind CSS support via PostCSS (configured via postcss.config.mjs)
 * - Path aliases for workspace libraries
 * - Development server configuration
 */
export function registerRsbuildSvelte(options: RsBuildSvelteOptions = {}) {
  const {
    port = 3000,
    rsbuildConfig = {},
    svelteOptions = {},
    sassOptions = {},
    rootDir = process.cwd(),
  } = options;

  // Resolve paths for shared libraries
  const workspaceRoot = path.resolve(rootDir, "../..");
  const uiPath = path.resolve(workspaceRoot, "libs/ui/src");
  const utilsPath = path.resolve(workspaceRoot, "libs/utils/src");

  return defineConfig({
    plugins: [
      pluginSvelte({
        ...svelteOptions,
      }),
      pluginSass({
        sassLoaderOptions: {
          api: "modern-compiler",
        },
        ...sassOptions,
      }),
    ],
    server: {
      port,
      strictPort: false,
      host: "0.0.0.0",
    },
    resolve: {
      // Path aliases matching Vite config
      alias: {
        "@quick-house-hub/ui": uiPath,
        "@quick-house-hub/utils": utilsPath,
      },
    },
    output: {
      target: "web",
      // Modern browser targets
      overrideBrowserslist: [
        "last 2 versions",
        "Firefox ESR",
        "> 1%",
        "not dead",
      ],
    },
    performance: {
      // Production optimizations
      chunkSplit: {
        strategy: "split-by-experience",
      },
    },
    ...rsbuildConfig,
  });
}
