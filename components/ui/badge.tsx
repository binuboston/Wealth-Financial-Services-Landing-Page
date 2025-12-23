import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "default";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-brand-primary)]/10 text-[var(--foreground)] border-[var(--color-brand-primary)]/20",
      secondary: "bg-[var(--color-brand-secondary)]/20 text-[var(--foreground)] border-[var(--color-brand-secondary)]/30",
      accent: "bg-[var(--color-brand-accent)]/20 text-[var(--foreground)] border-[var(--color-brand-accent)]/30",
      outline: "bg-transparent text-[var(--foreground)] border-[var(--color-brand-primary)]/30",
      default: "bg-[var(--color-brand-primary)]/10 text-[var(--foreground)] border-[var(--color-brand-primary)]/20",
    };

    return (
      <div
        ref={ref}
        className={`inline-block px-4 py-2 border rounded-lg transition-all ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
