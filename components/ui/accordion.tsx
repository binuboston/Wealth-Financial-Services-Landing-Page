"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "./utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-secondary)]/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "hover:text-[var(--foreground)]/80",
          "data-[state=open]:text-[var(--foreground)]",
          className,
        )}
        {...props}
      >
        <span className="flex-1 leading-relaxed pr-2">{children}</span>
        <ChevronDownIcon 
          className={cn(
            "pointer-events-none size-4 transition-all duration-300 shrink-0",
            "text-[var(--foreground)]/50",
            "group-hover:text-[var(--foreground)]/70",
            "group-data-[state=open]:text-[var(--foreground)]/70",
            "group-data-[state=open]:rotate-180"
          )} 
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState<number | "auto">(0);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateHeight = () => {
      const innerContent = innerRef.current;
      if (innerContent) {
        setHeight(innerContent.scrollHeight);
      }
    };

    const checkState = () => {
      const state = content.getAttribute("data-state");
      const newIsOpen = state === "open";
      setIsOpen(newIsOpen);
      
      if (newIsOpen) {
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          updateHeight();
        });
      } else {
        setHeight(0);
      }
    };

    const observer = new MutationObserver(checkState);
    observer.observe(content, {
      attributes: true,
      attributeFilter: ["data-state"],
    });

    // Also observe resize for dynamic content
    const resizeObserver = new ResizeObserver(() => {
      const state = content.getAttribute("data-state");
      if (state === "open") {
        updateHeight();
      }
    });

    // Set up resize observer after a small delay to ensure innerRef is available
    const timeoutId = setTimeout(() => {
      const innerContent = innerRef.current;
      if (innerContent) {
        resizeObserver.observe(innerContent);
      }
    }, 0);

    checkState();

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <AccordionPrimitive.Content
      ref={contentRef}
      data-slot="accordion-content"
      className="overflow-hidden"
      {...props}
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
          opacity: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        className={cn("overflow-hidden", className)}
      >
        <div 
          ref={innerRef}
          data-accordion-inner
          className="pt-0 pb-4 text-[var(--foreground)]/70 leading-relaxed"
        >
          {children}
        </div>
      </motion.div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
