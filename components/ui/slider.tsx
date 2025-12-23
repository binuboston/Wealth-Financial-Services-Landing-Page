import * as React from "react";

export interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  className?: string;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ value, onValueChange, min, max, step, className = "" }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange([Number(e.target.value)]);
    };

    const percentage = ((value[0] - min) / (max - min)) * 100;

    return (
      <div ref={ref} className={`relative w-full ${className}`}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <style>{`
          .slider-thumb::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #2563eb;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .slider-thumb::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #2563eb;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
        `}</style>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
