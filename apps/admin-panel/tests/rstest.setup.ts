import { expect } from '@rstest/core';
import * as jestDomMatchers from '@testing-library/jest-dom/matchers';

// Extend expect with jest-dom matchers for better DOM assertions
expect.extend(jestDomMatchers);

// Setup HappyDOM for Svelte 5 compatibility
if (typeof window !== 'undefined') {
  // Polyfill for Svelte 5's DOM operations
  if (!('firstChild' in Element.prototype)) {
    Object.defineProperty(Element.prototype, 'firstChild', {
      get() {
        return this.childNodes[0] || null;
      },
    });
  }
}
