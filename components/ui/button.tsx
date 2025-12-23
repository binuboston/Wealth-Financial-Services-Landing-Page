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
  default: "bg-[#003448] text-white hover:bg-[#004d6b] shadow-lg shadow-[#003448]/20",
  outline: "bg-white text-[#003448] border-2 border-[#003448] hover:bg-[#f0f9f6]",
  ghost: "text-[#003448] hover:text-[#68c0ae] hover:bg-[#f0f9f6]",
  secondary: "bg-[var(--color-brand-secondary)] text-white hover:bg-[var(--color-brand-secondary)]/90 shadow-lg shadow-[var(--color-brand-secondary)]/20",
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
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClassName}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
