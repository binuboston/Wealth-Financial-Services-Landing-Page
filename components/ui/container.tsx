import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = "", size = "default", children, ...props }, ref) => {
    const sizes = {
      narrow: "w-full max-w-screen-md lg:max-w-4xl",
      default: "w-full max-w-screen-lg xl:max-w-screen-xl",
      wide: "w-full max-w-screen-xl 2xl:max-w-screen-2xl",
      full: "w-full max-w-screen-xl 2xl:max-w-screen-2xl",
    };

    return (
      <div
        ref={ref}
        className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
