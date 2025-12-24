'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { PhoneMockupWithCalculator } from '../services/PhoneMockupWithCalculator';
import { HeroNavigation } from '../layout/HeroNavigation';
import { heroConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import { useScrollDetection } from '@/hooks/useScrollDetection';

function BackgroundPatternIcon() {
  return (
    <div className="absolute right-0 top-0 w-full max-w-[600px] h-[600px] sm:max-w-[800px] sm:h-[800px] lg:max-w-[1000px] lg:h-[1000px] xl:right-[-200px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <g clipPath="url(#clip0_2059_216)">
          <path d="M500 0C666.667 83.3333 791.667 208.333 875 375C958.333 541.667 1000 750 1000 1000H0V0H500Z" fill={designTokens.colors.brand.primary} />
        </g>
        <defs>
          <clipPath id="clip0_2059_216">
            <rect fill="white" height="1000" width="1000" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundPatternIcon1() {
  return (
    <div className="absolute left-0 bottom-0 w-full max-w-[400px] h-[400px] sm:max-w-[600px] sm:h-[600px] lg:max-w-[800px] lg:h-[800px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
        <g clipPath="url(#clip0_2059_201)">
          <path d="M0 400C83.3333 300 166.667 270.667 250 312C333.333 353.334 416.667 416 500 500C583.333 584 683.333 684 800 800H0V400Z" fill={designTokens.colors.brand.accent} />
        </g>
        <defs>
          <clipPath id="clip0_2059_201">
            <rect fill="white" height="800" width="800" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  const hasScrolled = useScrollDetection(100);

  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom, ${heroConfig.backgroundGradient.from}, ${heroConfig.backgroundGradient.via} 50%, ${heroConfig.backgroundGradient.to})`,
      }}
    >
        {/* Background Pattern - positioned behind content */}
      <div className="absolute inset-0 h-full opacity-5 overflow-hidden" aria-hidden="true">
          <BackgroundPatternIcon1 />
        </div>

      {/* Hero Navigation - inside container */}
      <div className="relative z-50 pt-4 sm:pt-6">
        <HeroNavigation isVisible={!hasScrolled} />
        </div>

        {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 xl:py-24">
        <Container size="wide">
          <div className="max-w-4xl mx-auto">
              {/* Title Section */}
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-2 sm:mb-3 xl:mb-4 text-sm sm:text-base xl:text-lg tracking-wide font-medium text-[var(--color-brand-primary)]"
                style={{ 
                  fontFamily: designTokens.typography.fontFamily,
                }}
                >
                {heroConfig.badge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white mb-4 sm:mb-6 xl:mb-8 text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold"
                style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                {heroConfig.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 mb-6 sm:mb-8 xl:mb-10 text-base sm:text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                {heroConfig.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
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

            {/* Calculator Section - Below Title */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
              >
                <PhoneMockupWithCalculator variant="hero" />
              </motion.div>
            </div>
        </Container>
        </div>
      </section>
  );
        }
