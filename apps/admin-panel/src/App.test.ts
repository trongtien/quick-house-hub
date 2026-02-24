import { expect, test, describe } from '@rstest/core';

describe('App.svelte', () => {
  test('component file exists and exports correctly', async () => {
    const App = await import('./App.svelte');
    expect(App).toBeDefined();
    expect(App.default).toBeDefined();
  });
});
