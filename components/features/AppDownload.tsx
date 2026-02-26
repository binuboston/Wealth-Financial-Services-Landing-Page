'use client';

import { motion } from 'motion/react';
import { Smartphone, Apple } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';
import { PhoneMockupWithCalculator } from '../services/PhoneMockupWithCalculator';
import { Shape } from '../ui/shape';
export function AppDownload() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#003448] via-[#004d6b] to-[#003448] relative overflow-hidden">
      {/* Background Shapes - positioned behind content */}
      <Shape shapeKey="shape9" opacity={1} zIndex={0} />
      <Shape shapeKey="shape1" opacity={1} zIndex={0} />
      <Shape shapeKey="shape3" opacity={1} zIndex={0} />
      <Shape shapeKey="shape6" opacity={1} zIndex={0} />
      {/* Organic Pattern Background */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Download */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="Download Our App"
              title="Manage Your Wealth On The Go"
              description="Access your portfolio, track investments, calculate SIP returns, and get real-time market insights with our mobile app. Available on iOS and Android."
              align="left"
              className="[&_h2]:text-white [&_p]:text-white/90 [&_span]:text-white [&_.bg-\[#68c0ae\]\/20]:bg-white/10 [&_.border-\[#68c0ae\]\/30]:border-white/20"
            />

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://apps.apple.com/in/app/ofa-client/id1206294474"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 bg-[#003448] rounded-xl flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-[#003448]/60">Download on the</div>
                  <div className="text-[#003448]">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.dhanasreefinancialservices"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 bg-[#003448] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-[#003448]/60">GET IT ON</div>
                  <div className="text-[#003448]">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {['Real-time tracking', 'SIP Calculator', 'Secure transactions', 'Expert insights'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-[#9ece6c] rounded-full" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Phone Mockup with SIP Calculator (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <PhoneMockupWithCalculator />
          </motion.div>
        </div>
      </div>

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
    </section>
  );
}