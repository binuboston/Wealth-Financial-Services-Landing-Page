"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-dark)] shadow-lg shadow-[var(--color-brand-primary)]/20",
  outline: "bg-white text-[var(--foreground)] border-2 border-[var(--color-brand-primary)] hover:bg-[#f0f9f6]",
  ghost: "text-[var(--foreground)] hover:text-[var(--foreground)]/80 hover:bg-[#f0f9f6]",
  secondary: "bg-[var(--color-brand-secondary)] text-white hover:bg-[var(--color-brand-secondary-dark)] shadow-lg shadow-[var(--color-brand-secondary)]/20",
};

const sizes = {
  default: "px-8 py-4 text-base xl:text-lg",
  sm: "px-6 py-3 text-sm xl:text-base",
  lg: "px-10 py-5 text-base xl:text-lg",
  icon: "w-10 h-10 p-0",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
} = {}) {
  return cn(baseStyles, variants[variant], sizes[size], className);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild, children, ...props }, ref) => {
    const combinedClassName = buttonVariants({ variant, size, className });

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: combinedClassName,
        ...props,
      });
    }
    
    // Extract motion-specific props and regular button props
    const { whileHover, whileTap, ...buttonProps } = props as any;
    
    return (
      <motion.button
        ref={ref}
        whileHover={whileHover || { scale: 1.02 }}
        whileTap={whileTap || { scale: 0.98 }}
        className={combinedClassName}
        {...buttonProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
