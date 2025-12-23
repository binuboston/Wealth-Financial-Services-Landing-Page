import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "muted" | "gradient";
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
    };

    const patternColors = {
      primary: "#003448",
      secondary: "#68c0ae",
      accent: "#9ece6c",
    };

    return (
      <section
        ref={ref}
        className={`relative py-16 lg:py-24 xl:py-32 overflow-hidden ${backgrounds[background]} ${className}`}
        {...props}
      >
        {withPattern && (
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <svg className="absolute top-0 right-0 w-[600px] h-[600px] xl:w-[800px] xl:h-[800px]" viewBox="0 0 800 800">
              <path 
                d="M400,0 Q600,200 700,400 T800,800 L400,800 Z" 
                fill={patternColors[patternColor]} 
              />
            </svg>
          </div>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };