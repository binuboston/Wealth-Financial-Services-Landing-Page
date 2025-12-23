import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = "", size = "default", children, ...props }, ref) => {
    const sizes = {
      narrow: "max-w-[960px]",
      default: "max-w-[1280px]",
      wide: "max-w-[1360px]",
      full: "max-w-[1440px]",
    };

    return (
      <div
        ref={ref}
        className={`mx-auto px-6 lg:px-12 xl:px-16 ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
