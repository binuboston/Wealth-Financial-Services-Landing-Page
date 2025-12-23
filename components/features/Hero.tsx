'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PhoneMockupWithCalculator } from '../services/PhoneMockupWithCalculator';
import { heroConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
function BackgroundPatternIcon() {
  return (
    <div className="absolute left-[1560px] size-[1000px] top-0" aria-hidden="true">
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
    <div className="absolute left-0 size-[800px] top-[111px]" aria-hidden="true">
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
  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom, ${heroConfig.backgroundGradient.from}, ${heroConfig.backgroundGradient.via} 50%, ${heroConfig.backgroundGradient.to})`,
      }}
    >
        {/* Background Pattern - positioned behind content */}
      <div className="absolute h-full left-0 opacity-5 overflow-clip top-0 w-full" aria-hidden="true">
          <BackgroundPatternIcon />
          <BackgroundPatternIcon1 />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:px-12 xl:px-16 lg:pt-40 lg:pb-32">
          <div className="mx-auto max-w-[1440px] w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-2 sm:mb-3 xl:mb-4 text-sm sm:text-base xl:text-lg tracking-wide font-medium"
                style={{ 
                  color: designTokens.colors.brand.secondary,
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
                className="text-white/90 mb-6 sm:mb-8 xl:mb-10 text-base sm:text-lg xl:text-xl leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                {heroConfig.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                <Link href={heroConfig.primaryCTA.href}>
                  <Button 
                    size="lg" 
                    className="group w-full sm:w-auto"
                    style={{
                      backgroundColor: designTokens.colors.brand.secondary,
                      transitionDuration: designTokens.transitions.base,
                    }}
                  >
                    {heroConfig.primaryCTA.label}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={heroConfig.secondaryCTA.href}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                  >
                    {heroConfig.secondaryCTA.label}
                  </Button>
                </Link>
                </motion.div>
              </motion.div>

            {/* Right Content - Phone Mockup */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
              >
                <PhoneMockupWithCalculator />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
        }
