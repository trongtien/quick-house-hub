import { registerRsbuildSvelte } from '@conventions/rsbuild-config';

// Docs: https://rsbuild.rs/config/
export default registerRsbuildSvelte({
  port: 3000,
  rootDir: __dirname,
});
