# @conventions/tailwindcss

Shared Tailwind CSS configuration and theme for all applications in the monorepo.

## Features

- **Latest Tailwind CSS v4** - Uses the newest version of Tailwind CSS
- **Shared Theme** - Consistent colors, fonts, and spacing across all apps
- **Hot Module Reload** - Changes to Tailwind config trigger instant updates in dev mode
- **Type-safe** - Full TypeScript support for configuration

## Installation

This package is already configured for use in the monorepo. To add it to a new app:

```bash
pnpm add -D @conventions/tailwindcss tailwindcss autoprefixer postcss --filter your-app-name
```

## Usage

### 1. Create `tailwind.config.ts` in your app root

```typescript
import { createTailwindConfig } from "@conventions/tailwindcss";
import type { Config } from "tailwindcss";

const config: Config = createTailwindConfig({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    // Add your content paths here
  ],
});

export default config;
```

### 2. Create `postcss.config.js` in your app root

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. Import Tailwind directives in your CSS

Create a CSS file (e.g., `src/app.css` or `src/styles/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then import it in your app entry point:

```typescript
// For Svelte (main.ts)
import "./app.css";

// For Next.js (_app.tsx)
import "../styles/globals.css";
```

## Shared Theme

The shared theme includes:

### Colors

- **Primary**: Blue color palette (50-950)
- **Secondary**: Purple color palette (50-950)
- **Neutral**: Gray color palette (50-950)

Example usage:

```html
<div class="bg-primary-500 text-white">Primary Button</div>
<div class="bg-secondary-600">Secondary Element</div>
```

### Typography

- **Font Sans**: Inter + system fonts
- **Font Mono**: JetBrains Mono + system monospace fonts

### Extended Spacing

Additional spacing values: `72`, `84`, `96`

### Border Radius

Additional border radius: `4xl` (2rem)

## Extending the Theme

You can extend or override the shared theme in your app's `tailwind.config.ts`:

```typescript
import { createTailwindConfig, sharedTheme } from "@conventions/tailwindcss";
import type { Config } from "tailwindcss";

const config: Config = createTailwindConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...sharedTheme,
    extend: {
      ...sharedTheme.extend,
      colors: {
        ...sharedTheme.extend?.colors,
        // Add your custom colors
        brand: {
          light: "#ff6b6b",
          dark: "#c92a2a",
        },
      },
    },
  },
});

export default config;
```

## Hot Reload

Hot Module Reload (HMR) is automatically configured:

- **Vite** (admin-panel): Changes to Tailwind config or CSS files trigger instant updates
- **Next.js** (web): Fast Refresh handles Tailwind changes automatically

No additional configuration needed - just save your files and see changes instantly!

## Apps Using This Configuration

- `@quick-house-hub/admin-panel` (Svelte + Vite)
- `@quick-house-hub/web` (Next.js)
