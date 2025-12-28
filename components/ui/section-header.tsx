import * as React from "react";
import { SectionBadge } from "./section-badge";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "accent"; // Kept for backward compatibility but not used
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "primary", // Kept for backward compatibility but not used
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`mb-12 xl:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="mb-6 xl:mb-8">
          <SectionBadge animate>{badge}</SectionBadge>
        </div>
      )}
      <h2 className="text-[var(--foreground)] mb-6 xl:mb-8 text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight">{title}</h2>
      {description && (
        <p className="text-[var(--foreground)]/70 max-w-3xl mx-auto text-base xl:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
