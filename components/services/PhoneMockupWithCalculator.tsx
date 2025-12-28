'use client';

import { TrendingUp, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';
import { ShadcnInvestmentCalculator } from './shadcn-investment-calculator';

/**
 * PhoneMockupWithCalculator Component
 * Wraps the ShadcnInvestmentCalculator with phone mockup UI for desktop
 * and provides minimal variant for mobile
 */
export function PhoneMockupWithCalculator() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Mobile View - Minimal Calculator */}
      <div className="lg:hidden">
        <ShadcnInvestmentCalculator variant="minimal" />
      </div>

      {/* Desktop View - Phone Mockup */}
      <div className="hidden lg:block relative">
        <div className="relative bg-[#003448] rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
            {/* Notch */}
            <div className="relative bg-[#003448] h-7 flex items-center justify-center">
              <div className="w-32 h-5 bg-[#003448] rounded-b-3xl" />
            </div>
            
            {/* App Screen Content */}
            <div className="h-full overflow-auto">
              <ShadcnInvestmentCalculator variant="default" />
          </div>
        </div>
      </div>
      
        {/* Floating elements - Desktop only */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/30 shadow-lg flex items-center justify-center"
      >
        <TrendingUp className="w-10 h-10 text-[#68c0ae] drop-shadow-lg" strokeWidth={2.5} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/30 shadow-lg flex items-center justify-center"
      >
        <PiggyBank className="w-12 h-12 text-[#9ece6c] drop-shadow-lg" strokeWidth={2.5} />
      </motion.div>
      </div>
    </div>
  );
}
