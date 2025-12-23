import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "muted" | "gradient" | "light";
  withPattern?: boolean;
  patternColor?: "primary" | "secondary" | "accent";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className = "", 
    background = "white", 
    withPattern = false,
    patternColor = "accent",
    children, 
    ...props 
  }, ref) => {
    const backgrounds = {
      white: "bg-white",
      muted: "bg-gradient-to-b from-[var(--color-muted)] to-white",
      gradient: "bg-gradient-to-br from-[var(--color-brand-primary)] via-[var(--color-brand-primary-dark)] to-[var(--color-brand-primary)]",
      light: "bg-[#f8fdfb]",
    };

    return (
      <section
        ref={ref}
        className={`relative py-16 lg:py-24 xl:py-32 overflow-hidden ${backgrounds[background]} ${className}`}
        {...props}
      >
        {withPattern && (
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--color-brand-primary-light), transparent)`,
              opacity: 0.1,
            }}
              />
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };