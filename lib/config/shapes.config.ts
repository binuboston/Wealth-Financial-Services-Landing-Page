// Shape configuration for decorative background shapes
export type ShapePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ShapeConfig {
  filename: string;
  position: ShapePosition;
}

export const shapesConfig: Record<string, ShapeConfig> = {
  shape0: {
    filename: 'shape0.svg',
    position: 'bottom-left',
  },
  shape1: {
    filename: 'shape1.svg',
    position: 'top-right',
  },
  shape2: {
    filename: 'shape2.svg',
    position: 'bottom-right',
  },
  shape3: {
    filename: 'shape3.svg',
    position: 'bottom-left',
  },
  shape4: {
    filename: 'shape4.svg',
    position: 'bottom-left',
  },
  shape5: {
    filename: 'shape5.svg',
    position: 'top-right',
  },
  shape6: {
    filename: 'shape6.svg',
    position: 'bottom-right',
  },
  shape7: {
    filename: 'shape7.svg',
    position: 'top-right',
  },
  shape8: {
    filename: 'shape8.svg',
    position: 'top-right',
  },
  shape9: {
    filename: 'shape9.svg',
    position: 'top-left',
  },
  shape11: {
    filename: 'shape11.svg',
    position: 'top-left',
  },
  shape12: {
    filename: 'shape12.svg',
    position: 'top-right',
  },
} as const;

