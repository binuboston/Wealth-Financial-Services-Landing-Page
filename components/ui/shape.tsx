'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import type { ShapePosition } from '@/lib/config/shapes.config';
import { shapesConfig } from '@/lib/config/shapes.config';
import { cn } from './utils';

export interface ShapeProps {
  shapeKey: keyof typeof shapesConfig;
  className?: string;
  opacity?: number;
  zIndex?: number;
  delay?: number;
}

const positionClasses: Record<ShapePosition, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

// Animation variants based on position
const getPositionAnimation = (position: ShapePosition) => {
  const animations = {
    'top-left': {
      initial: { x: '-100%', y: '-100%', opacity: 0, scale: 0.8 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    },
    'top-right': {
      initial: { x: '100%', y: '-100%', opacity: 0, scale: 0.8 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    },
    'bottom-left': {
      initial: { x: '-100%', y: '100%', opacity: 0, scale: 0.8 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    },
    'bottom-right': {
      initial: { x: '100%', y: '100%', opacity: 0, scale: 0.8 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    },
  };
  return animations[position];
};

export function Shape({
  shapeKey,
  className,
  opacity = 1,
  zIndex = 0,
  delay = 0,
}: ShapeProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only animating on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get shape config from key
  const shapeConfig = shapesConfig[shapeKey];
  
  if (!shapeConfig) {
    console.warn(`Shape key "${shapeKey}" not found in shapesConfig`);
    return null;
  }

  const { filename, position } = shapeConfig;
  const positionClass = positionClasses[position];
  const animation = getPositionAnimation(position);

  // Determine object position based on corner
  const getObjectPosition = () => {
    if (position === 'top-left' || position === 'bottom-left') {
      return 'left top';
    }
    if (position === 'top-right' || position === 'bottom-right') {
      return 'right top';
    }
    return 'left top';
  };

  // On server (mounted=false), render in final state to prevent hydration mismatch
  // On client (mounted=true), animate from initial to final state
  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none overflow-visible',
        positionClass,
        className
      )}
      initial={mounted ? animation.initial : false}
      animate={mounted ? {
        ...animation.animate,
        opacity: opacity,
      } : {
        x: 0,
        y: 0,
        opacity: opacity,
        scale: 1,
      }}
      transition={
        mounted
          ? {
              type: 'spring',
              stiffness: 50,
              damping: 20,
              mass: 1,
              delay: delay,
              opacity: {
                duration: 0.8,
                delay: delay,
              },
            }
          : undefined
      }
      style={{
        zIndex,
      }}
      aria-hidden="true"
    >
      {/* Responsive sizing - edge to edge with proper positioning */}
      <div 
        className="relative"
        style={{
          width: 'clamp(200px, 50vw, 800px)',
          height: 'clamp(200px, 50vh, 800px)',
          minWidth: '200px',
          minHeight: '200px',
        }}
      >
        <Image
          src={`/assets/brand/${filename}`}
          alt=""
          fill
          className="object-contain"
          style={{
            objectPosition: getObjectPosition(),
          }}
          sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 800px"
        />
      </div>
    </motion.div>
  );
}

