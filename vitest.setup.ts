import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js Image component
vi.mock('next/image', () => {
  const React = require('react');
  return {
    default: (props: Record<string, unknown>) =>
      React.createElement('img', { ...props, alt: props.alt ?? '' }),
  };
});

// Mock motion/react for faster tests
vi.mock('motion/react', async () => {
  const React = await import('react');
  const createEl = (tag: string) => (props: Record<string, unknown>) => {
    const { children, ...restProps } = props as { children?: React.ReactNode; [key: string]: unknown };
    return React.createElement(tag, restProps, children);
  };
  return {
    motion: {
      div: createEl('div'),
      section: createEl('section'),
      a: createEl('a'),
      button: createEl('button'),
      span: createEl('span'),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});
