# Quick House Hub

A TypeScript monorepo powered by Turborepo.

## Project Structure

```
quick-house-hub/
├── apps/               # Application packages
│   └── web/           # Next.js application
├── libs/              # Shared library packages
│   ├── ui/           # React component library
│   └── utils/        # Utility functions
└── conventions/       # Shared configurations
    ├── typescript/   # TypeScript configs
    └── formatting/   # Code formatting configs
```

## What's Inside?

### Apps
- `web`: A Next.js application

### Libraries
- `@quick-house-hub/ui`: Shared React component library
- `@quick-house-hub/utils`: Shared utility functions

### Conventions
- `@quick-house-hub/tsconfig`: Shared TypeScript configurations
- Prettier configuration for code formatting
- Oxlint configuration for fast linting

## Getting Started

Install dependencies:

```bash
npm install
```

## Development

To develop all apps and packages, run:

```bash
npm run dev
```

## Build

To build all apps and packages, run:

```bash
npm run build
```

## Useful Commands

- `npm run dev` - Start development mode for all apps
- `npm run build` - Build all apps and packages
- `npm run lint` - Lint all apps and packages with TypeScript
- `npm run lint:ox` - Lint all files with oxlint (fast Rust-based linter)
- `npm run lint:ox:fix` - Auto-fix issues with oxlint
- `npm run check` - Run both oxlint and TypeScript linting
- `npm run format` - Format all files with Prettier
- `turbo run lint:ox` - Run oxlint across workspaces with Turborepo caching

## Adding New Libraries

To add a new library to the monorepo:

1. Create a new directory in `libs/`
2. Add a `package.json` with the name `@quick-house-hub/library-name`
3. The workspace will be automatically discovered by npm workspaces

## Adding New Apps

To add a new app to the monorepo:

1. Create a new directory in `apps/`
2. Add a `package.json` with appropriate scripts
3. Reference shared packages using `@quick-house-hub/*`

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Oxlint Documentation](https://oxc-project.github.io/docs/guide/usage/linter.html)

## Code Quality

This project uses:
- **Oxlint**: Fast Rust-based linter for catching common errors
- **TypeScript**: Type checking across all packages
- **Prettier**: Code formatting

All configurations are stored in the `conventions/` folder:
- `conventions/typescript/` - Shared TypeScript configurations
- `conventions/formatting/` - Prettier and Oxlint configurations

The oxlint configuration focuses on correctness, suspicious patterns, and performance warnings while keeping style checks minimal.
