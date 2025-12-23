import * as React from "react";

export interface OrganicPatternProps {
  position?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
  color?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  opacity?: number;
}

export function OrganicPattern({
  position = "top-right",
  color = "accent",
  size = "md",
  opacity = 0.05,
}: OrganicPatternProps) {
  const colors = {
    primary: "#003448",
    secondary: "#68c0ae",
    accent: "#9ece6c",
  };

  const sizes = {
    sm: { width: 400, height: 400 },
    md: { width: 600, height: 600 },
    lg: { width: 800, height: 800 },
  };

  const positions = {
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const paths = {
    "top-right": "M400,0 Q600,200 700,400 T800,800 L400,800 Z",
    "bottom-left": "M0,300 Q100,200 200,280 T400,500 T600,600 L0,600 Z",
    "top-left": "M0,0 Q200,100 300,200 T600,400 L600,0 Z",
    "bottom-right": "M600,300 Q500,200 400,280 T200,400 T0,600 L600,600 Z",
  };

  const sizeConfig = sizes[size];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <svg
        className={`absolute ${positions[position]} w-[${sizeConfig.width}px] h-[${sizeConfig.height}px]`}
        viewBox={`0 0 ${sizeConfig.width} ${sizeConfig.height}`}
      >
        <path d={paths[position]} fill={colors[color]} />
      </svg>
    </div>
  );
}
