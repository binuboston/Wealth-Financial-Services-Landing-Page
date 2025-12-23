'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-mlh2ijqb73';
import { PhoneMockupWithCalculator } from './PhoneMockupWithCalculator';

function BackgroundPatternIcon() {
  return (
    <div className="absolute left-[1560px] size-[1000px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <g clipPath="url(#clip0_2059_216)">
          <path d={svgPaths.p26b41c80} fill="#003448" />
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
    <div className="absolute left-0 size-[800px] top-[111px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
        <g clipPath="url(#clip0_2059_201)">
          <path d={svgPaths.pb87e200} fill="#9ECE6C" />
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
    <>
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#003448] to-[#003448] via-50% via-[#0e2e3b] min-h-screen flex flex-col">
        {/* Background Pattern - positioned behind content */}
        <div className="absolute h-full left-0 opacity-5 overflow-clip top-0 w-full">
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
                  className="text-[#68c0ae] mb-2 sm:mb-3 xl:mb-4 text-sm sm:text-base xl:text-lg tracking-wide"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Welcome to the Future of Purposeful Growth
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white mb-4 sm:mb-6 xl:mb-8 text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Dhanovaa - Your Growth Architect
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white/90 mb-6 sm:mb-8 xl:mb-10 text-sm sm:text-base xl:text-lg leading-relaxed max-w-[564px]"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Trusted financial guidance built on 30+ years of experience in equities, mutual funds, PMS, AIF, GIFT City investments, derivatives, and long-term wealth planning globally.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 xl:gap-5"
                >
                  <a
                    href="#services"
                    className="bg-[#68c0ae] inline-flex items-center justify-center h-14 sm:h-16 xl:h-[72px] px-6 sm:px-8 xl:px-10 rounded-full shadow-lg text-white text-sm sm:text-base xl:text-lg hover:bg-[#5ab09e] transition-all"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Begin Your Journey
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 ml-2 sm:ml-3 xl:ml-4" />
                  </a>
                  
                  <a
                    href="#services"
                    className="bg-[#9ece6c] inline-flex items-center justify-center h-14 sm:h-16 xl:h-[72px] px-6 sm:px-8 xl:px-10 rounded-full border-2 border-[#003448] text-[#003448] text-sm sm:text-base xl:text-lg hover:bg-[#8ebe5c] transition-all"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Our Offerings
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Content - SIP Calculator Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:flex justify-end"
              >
                <PhoneMockupWithCalculator />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Slider Styles */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid currentColor;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid currentColor;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
}