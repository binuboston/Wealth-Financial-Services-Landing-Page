import * as React from "react";
import { motion } from "motion/react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full transition-colors disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-[#003448] text-white hover:bg-[#004d6b] shadow-lg shadow-[#003448]/20",
      outline: "bg-white text-[#003448] border-2 border-[#003448] hover:bg-[#f0f9f6]",
      ghost: "text-[#003448] hover:text-[#68c0ae] hover:bg-[#f0f9f6]",
    };
    
    const sizes = {
      default: "px-8 py-4 text-base xl:text-lg",
      sm: "px-6 py-3 text-sm xl:text-base",
      lg: "px-10 py-5 text-base xl:text-lg",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
