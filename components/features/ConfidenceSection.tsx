'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Container } from '../ui/container';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string; // For currency or other prefixes
}

const stats: StatItem[] = [
  {
    value: 25,
    suffix: '+',
    label: 'Years in Capital Markets',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Clients Guided Across India & Abroad',
  },
  {
    value: 170,
    prefix: '₹',
    suffix: '+',
    label: 'Crores of Assets Overseen',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Branches & Service Points',
  },
];

// Hook for animated counter
function useCounter(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true,
  ref: React.RefObject<HTMLDivElement>
): number {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!startOnView) {
      // Start immediately
      setHasStarted(true);
      return;
    }

    // Use Intersection Observer to trigger counter when in view
    if (typeof window !== 'undefined' && ref.current && !hasStarted) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasStarted) {
              setHasStarted(true);
              observerRef.current?.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observerRef.current.observe(ref.current);

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [startOnView, hasStarted, ref]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted]);

  return count;
}

interface AnimatedCounterProps {
  item: StatItem;
  index: number;
}

function AnimatedCounter({ item, index }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(item.value, 2000, true, ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-3 xl:mb-4">
        <span className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white">
          {item.prefix && <span>{item.prefix}</span>}
          {count}
          {item.suffix}
        </span>
      </div>
      <p className="text-base sm:text-lg xl:text-xl text-white/80 leading-relaxed max-w-xs mx-auto">
        {item.label}
      </p>
    </motion.div>
  );
}

export function ConfidenceSection() {
  return (
    <section 
      id="confidence" 
      className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, var(--color-brand-secondary), var(--color-brand-secondary-dark))',
      }}
    >
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 py-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={stat.label} item={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

