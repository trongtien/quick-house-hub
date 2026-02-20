# Testing Guide for Admin Panel

## Current Setup

The admin-panel uses **Rstest** with **HappyDOM** for testing Svelte applications.

### Configuration Files

- `rstest.config.ts` - Main test configuration
- `tests/rstest.setup.ts` - Test environment setup
- `tests/jest-dom.d.ts` - TypeScript definitions for jest-dom matchers

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test -- --coverage
```

## Testing Approach

### Current Limitations

**Svelte 5 Component Mounting**: Currently, there are compatibility issues between Svelte 5's internal DOM operations and HappyDOM. Direct component mounting tests fail due to missing DOM APIs.

### Recommended Testing Strategies

#### 1. **Component Import Tests** (Current Approach)

Test that components are valid and export correctly:

```typescript
test('component file exists and exports correctly', async () => {
  const Component = await import('./Component.svelte');
  expect(Component).toBeDefined();
  expect(Component.default).toBeDefined();
});
```

#### 2. **DOM Manipulation Tests** (Working)

Test DOM operations directly:

```typescript
test('dom operations', () => {
  document.body.innerHTML = `
    <div data-testid="example">Content</div>
  `;
  expect(screen.getByTestId('example')).toBeInTheDocument();
});
```

#### 3. **Future: Full Component Testing**

Once Svelte 5 + HappyDOM compatibility improves, or when switching to jsdom:

```typescript
import { mount, unmount } from 'svelte';

test('renders component', () => {
  const container = document.createElement('div');
  const component = mount(Component, { target: container });

  expect(container.querySelector('.element')).toBeInTheDocument();

  unmount(component);
});
```

## Alternative Testing Options

### Option 1: Switch to jsdom

Update `rstest.config.ts`:

```typescript
export default registerRstest({
  testEnvironment: 'jsdom', // Change from 'happy-dom'
  setupFiles: ['./tests/rstest.setup.ts'],
  rootDir: __dirname,
});
```

Then install jsdom:

```bash
pnpm add -D jsdom
```

### Option 2: Use @testing-library/svelte

Install when Svelte 5 support is available:

```bash
pnpm add -D @testing-library/svelte
```

### Option 3: Browser-based E2E Testing

Use Playwright or Cypress for comprehensive component testing in real browsers.

## Best Practices

1. **Unit Tests**: Test individual functions and utilities
2. **Integration Tests**: Test component interactions (when mounting works)
3. **E2E Tests**: Test full user flows with Playwright/Cypress
4. **Keep tests simple**: Focus on behavior, not implementation
5. **Use semantic queries**: Prefer `getByRole`, `getByText` over `getByTestId`

## Example Tests

See:

- `src/App.test.ts` - Component import test example
- `tests/dom.test.ts` - DOM manipulation test example

## Coverage

Run coverage reports:

```bash
pnpm test -- --coverage
```

Coverage reports are generated in:

- Text format (console)
- JSON format (`coverage/coverage-final.json`)
- HTML format (`coverage/index.html`)

## Troubleshooting

### Tests failing with "Cannot read properties of undefined"

This is likely a Svelte 5 + HappyDOM compatibility issue. Try:

1. Switching to jsdom
2. Using simpler import tests
3. Using browser-based testing

### TypeScript errors with matchers

Ensure `tests/jest-dom.d.ts` is included in `tests/tsconfig.json`.

### Module not found errors

Check that `@rsbuild/plugin-svelte` and `@rsbuild/plugin-sass` are configured in `rstest.config.ts`.
