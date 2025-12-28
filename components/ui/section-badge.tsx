import * as React from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

export interface SectionBadgeProps {
  /**
   * Badge text content
   */
  children: React.ReactNode;
  /**
   * Optional animation props
   */
  animate?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * SectionBadge Component
 * Consistent badge styling for all section titles
 * Matches the "Get in Touch" style from Contact section
 */
export const SectionBadge = React.forwardRef<HTMLDivElement, SectionBadgeProps>(
  ({ className = "", children, animate = false }, ref) => {
    const badgeClasses = cn(
      "inline-block px-4 py-2 bg-[#68c0ae]/20 border border-[#68c0ae]/30 rounded-full mb-6",
      className
    );

    const content = (
      <span className="text-[#003448] font-medium text-sm sm:text-base">
        {children}
      </span>
    );

    if (animate) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={badgeClasses}
        >
          {content}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={badgeClasses}>
        {content}
      </div>
    );
  }
);

SectionBadge.displayName = "SectionBadge";

