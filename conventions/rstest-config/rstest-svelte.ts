import { defineConfig, type RstestConfig } from "@rstest/core";

export interface RstestOptions {
  testEnvironment?: "happy-dom" | "jsdom" | "node";
  setupFiles?: string[];
  rstestConfig?: RstestConfig;
  rootDir?: string;
}

/**
 * Shared Rstest configuration for testing Svelte applications
 * Includes:
 * - Happy DOM test environment
 * - Setup files for testing utilities
 * - Coverage configuration
 */
export function registerRstest(options: RstestOptions = {}) {
  const {
    testEnvironment = "happy-dom",
    setupFiles = [],
    rstestConfig = {},
    rootDir = process.cwd(),
  } = options;

  return defineConfig({
    testEnvironment,
    setupFiles,
    coverage: {
      provider: "istanbul",
      reporters: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.config.{js,ts}",
        "**/*.spec.{js,ts}",
        "**/*.test.{js,ts}",
      ],
    },
    ...rstestConfig,
  });
}
