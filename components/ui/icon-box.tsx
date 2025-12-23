import * as React from "react";
import { LucideIcon } from "lucide-react";

export interface IconBoxProps {
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconBox({ 
  icon: Icon, 
  variant = "primary", 
  size = "md",
  className = "" 
}: IconBoxProps) {
  const variants = {
    primary: "bg-[var(--color-brand-primary)]",
    secondary: "bg-[var(--color-brand-secondary)]",
    accent: "bg-[var(--color-brand-accent)]",
  };

  const sizes = {
    sm: { box: "w-10 h-10", icon: "w-5 h-5", radius: "rounded-lg" },
    md: { box: "w-12 h-12", icon: "w-6 h-6", radius: "rounded-xl" },
    lg: { box: "w-14 h-14", icon: "w-7 h-7", radius: "rounded-2xl" },
  };

  const sizeConfig = sizes[size];

  return (
    <div 
      className={`${sizeConfig.box} ${variants[variant]} ${sizeConfig.radius} flex items-center justify-center shadow-lg ${className}`}
    >
      <Icon className={`${sizeConfig.icon} text-white`} />
    </div>
  );
}
