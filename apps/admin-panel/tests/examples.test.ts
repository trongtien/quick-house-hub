import { expect, test, describe, beforeEach } from '@rstest/core';
import { screen } from '@testing-library/dom';

describe('Utility Functions', () => {
  test('example: string manipulation', () => {
    const result = 'Hello World'.toLowerCase();
    expect(result).toBe('hello world');
  });

  test('example: array operations', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((n) => n * 2);

    expect(doubled).toEqual([2, 4, 6, 8, 10]);
    expect(doubled).toHaveLength(5);
  });

  test('example: object comparison', () => {
    const user = {
      name: 'John',
      age: 30,
      email: 'john@example.com',
    };

    expect(user).toHaveProperty('name', 'John');
    expect(user.age).toBeGreaterThan(18);
  });
});

describe('DOM Manipulation Examples', () => {
  beforeEach(() => {
    // Clear the document body before each test
    document.body.innerHTML = '';
  });

  test('creates and appends elements', () => {
    const div = document.createElement('div');
    div.textContent = 'Test Content';
    div.setAttribute('data-testid', 'test-div');
    document.body.appendChild(div);

    const element = screen.getByTestId('test-div');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test Content');
  });

  test('modifies element attributes', () => {
    document.body.innerHTML = `
      <button id="myButton" disabled>Click me</button>
    `;

    const button = document.getElementById('myButton') as HTMLButtonElement;
    expect(button).toBeDisabled();

    button.disabled = false;
    expect(button).not.toBeDisabled();
  });

  test('handles CSS classes', () => {
    document.body.innerHTML = `
      <div class="container primary">Content</div>
    `;

    const div = document.querySelector('.container');
    expect(div).toHaveClass('container');
    expect(div).toHaveClass('primary');
    expect(div).toHaveClass('container', 'primary');
  });

  test('queries elements by role', () => {
    document.body.innerHTML = `
      <main>
        <h1>Page Title</h1>
        <button>Submit</button>
        <input type="text" placeholder="Enter name" />
      </main>
    `;

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page Title',
    );
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  test('checks element visibility', () => {
    document.body.innerHTML = `
      <div data-testid="visible">I am visible</div>
      <div data-testid="hidden" style="display: none;">I am hidden</div>
    `;

    expect(screen.getByTestId('visible')).toBeVisible();
    expect(screen.getByTestId('hidden')).not.toBeVisible();
  });
});

describe('Async Operations Examples', () => {
  test('handles promises', async () => {
    const fetchData = () => Promise.resolve({ data: 'test' });

    const result = await fetchData();
    expect(result).toEqual({ data: 'test' });
  });

  test('handles async errors', async () => {
    const failingOperation = () => Promise.reject(new Error('Failed'));

    await expect(failingOperation()).rejects.toThrow('Failed');
  });
});
