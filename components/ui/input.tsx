import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`w-full px-4 py-3 bg-[#f0f9f6] border border-[#003448]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68c0ae] focus:border-transparent transition-all ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
