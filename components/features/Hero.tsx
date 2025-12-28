'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { PhoneMockupWithCalculator } from '../services/PhoneMockupWithCalculator';
import { HeroNavigation } from '../layout/HeroNavigation';
import { Shape } from '../ui/shape';
import { heroConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import { useScrollDetection } from '@/hooks/useScrollDetection';

export function Hero() {
  const hasScrolled = useScrollDetection(100);
  const [showCalculator, setShowCalculator] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only animating on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom, ${heroConfig.backgroundGradient.from}, ${heroConfig.backgroundGradient.via} 50%, ${heroConfig.backgroundGradient.to})`,
      }}
    >
        {/* Background Shapes - positioned behind content */}
        <Shape shapeKey="shape9" opacity={1} zIndex={0} delay={0} />
        <Shape shapeKey="shape1" opacity={1} zIndex={0} delay={0.15} />
        <Shape shapeKey="shape6" opacity={1} zIndex={0} delay={0.3} />
        <Shape shapeKey="shape3" opacity={1} zIndex={0} delay={0.45} />

      {/* Hero Navigation - inside container */}
      <div className="relative z-50 pt-4 sm:pt-6">
        <HeroNavigation isVisible={!hasScrolled} />
        </div>

        {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 xl:py-24">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 items-center">
              {/* Left Content */}
              <motion.div
              initial={mounted ? { opacity: 0, x: -20 } : false}
              animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={mounted ? { duration: 0.6 } : undefined}
              >
                <motion.div
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={mounted ? { duration: 0.6, delay: 0.1 } : undefined}
                className="mb-2 sm:mb-3 xl:mb-4 text-sm sm:text-base xl:text-lg tracking-wide font-medium text-[var(--color-brand-primary)]"
                style={{ 
                  fontFamily: designTokens.typography.fontFamily,
                }}
                >
                {heroConfig.badge}
                </motion.div>

                <motion.h1
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={mounted ? { duration: 0.6, delay: 0.2 } : undefined}
                className="text-white mb-4 sm:mb-6 xl:mb-8 text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold"
                style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                {heroConfig.title}
                </motion.h1>

                <motion.p
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={mounted ? { duration: 0.6, delay: 0.3 } : undefined}
                className="text-white/90 mb-6 sm:mb-8 xl:mb-10 text-base sm:text-lg xl:text-xl leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                {heroConfig.description}
                </motion.p>

                {/* Mobile Calculator Toggle Link - Only visible on mobile */}
                <motion.div
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={mounted ? { duration: 0.6, delay: 0.35 } : undefined}
                  className="mb-4 lg:hidden"
                >
                  <button
                    onClick={() => setShowCalculator(!showCalculator)}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-2 text-base sm:text-lg underline decoration-white/50 hover:decoration-white"
                    style={{ fontFamily: designTokens.typography.fontFamily }}
                  >
                    <Calculator className="w-4 h-4" />
                    {showCalculator ? 'Hide Calculator' : 'Try Our Calculator'}
                  </button>
                </motion.div>
                  
                <motion.div
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={mounted ? { duration: 0.6, delay: 0.4 } : undefined}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                <Link href={heroConfig.primaryCTA.href}>
                  <Button 
                    size="lg" 
                    className="group w-full sm:w-auto"
                    style={{
                      backgroundColor: 'var(--color-brand-secondary)',
                      transitionDuration: designTokens.transitions.base,
                    }}
                  >
                    {heroConfig.primaryCTA.label}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={heroConfig.secondaryCTA.href}>
                  <Button 
                    size="lg"
                    className="group w-full sm:w-auto"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      transitionDuration: designTokens.transitions.base,
                    }}
                  >
                    {heroConfig.secondaryCTA.label}
                  </Button>
                </Link>
                </motion.div>
              </motion.div>

            {/* Right Content - Phone Mockup */}
              <motion.div
              initial={mounted ? { opacity: 0, x: 20 } : false}
              animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={mounted ? { duration: 0.8, delay: 0.2 } : undefined}
              className={`justify-center lg:justify-end order-first lg:order-last ${showCalculator ? 'flex' : 'hidden lg:flex'}`}
              >
                <PhoneMockupWithCalculator />
              </motion.div>
            </div>
        </Container>
        </div>
      </section>
  );
        }
