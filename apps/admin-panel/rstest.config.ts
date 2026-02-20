import { registerRstest } from '@conventions/rstest-config';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import { pluginSass } from '@rsbuild/plugin-sass';

// Docs: https://rstest.rs/config/
export default registerRstest({
  testEnvironment: 'happy-dom',
  setupFiles: ['./tests/rstest.setup.ts'],
  rootDir: __dirname,
  rstestConfig: {
    plugins: [pluginSvelte(), pluginSass()],
  },
});
