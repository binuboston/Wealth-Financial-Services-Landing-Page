import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button, buttonVariants } from './button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies default variant styles', () => {
    render(<Button variant="default">Primary</Button>);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('bg-[var(--color-brand-primary)]');
  });

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole('button', { name: /outline/i });
    expect(button).toHaveClass('border-[var(--color-brand-primary)]');
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled();
  });
});

describe('buttonVariants', () => {
  it('returns base and default variant classes', () => {
    const classes = buttonVariants({ variant: 'default', size: 'default' });
    expect(classes).toContain('inline-flex');
    expect(classes).toContain('bg-[var(--color-brand-primary)]');
  });

  it('applies secondary variant', () => {
    const classes = buttonVariants({ variant: 'secondary' });
    expect(classes).toContain('bg-[var(--color-brand-secondary)]');
  });
});
