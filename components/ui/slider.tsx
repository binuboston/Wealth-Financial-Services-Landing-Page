import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "./utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  trackColor?: string;
  rangeColor?: string;
  thumbColor?: string;
  thumbBorderColor?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, trackColor, rangeColor, thumbColor, thumbBorderColor, ...props }, ref) => {
  const trackStyle = trackColor ? { backgroundColor: trackColor } : {};
  const rangeStyle = rangeColor ? { backgroundColor: rangeColor } : {};
  const thumbStyle = thumbColor ? { backgroundColor: thumbColor } : {};
  const thumbBorderStyle = thumbBorderColor ? { borderColor: thumbBorderColor } : {};

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track 
        className={cn(
          "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
        )}
        style={trackStyle}
      >
        <SliderPrimitive.Range 
          className={cn("absolute h-full transition-all duration-150 ease-out")}
          style={rangeStyle}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className={cn(
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background",
          "transition-all duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "cursor-grab active:cursor-grabbing hover:scale-110 active:scale-125",
          "shadow-md hover:shadow-lg"
        )}
        style={{ ...thumbStyle, ...thumbBorderStyle }}
      />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
