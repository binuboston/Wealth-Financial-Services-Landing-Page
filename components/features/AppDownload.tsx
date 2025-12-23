'use client';

import { motion } from 'motion/react';
import { Smartphone, Apple } from 'lucide-react';
import { Badge } from '../ui/badge';
import { PhoneMockupWithCalculator } from '../services/PhoneMockupWithCalculator';

export function AppDownload() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#003448] via-[#004d6b] to-[#003448] relative overflow-hidden">
      {/* Organic Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute top-0 right-0 w-[800px] h-[800px]" viewBox="0 0 800 800">
          <path d="M400,0 Q600,200 700,400 T800,800 L400,800 Z" fill="#9ece6c" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[600px] h-[600px]" viewBox="0 0 600 600">
          <path d="M0,300 Q100,200 200,280 T400,500 T600,600 L0,600 Z" fill="#68c0ae" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Download */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 xl:mb-8">
              <Badge variant="primary" className="text-sm xl:text-base bg-white/10 border-white/20 text-white">
                Download Our App
              </Badge>
            </div>
            
            <h2 className="text-white mb-4 text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Manage Your Wealth On The Go
            </h2>
            <p className="text-white/90 mb-8 max-w-xl text-base xl:text-lg">
            Access your portfolio, track investments, calculate SIP returns, and get real-time market insights with our mobile app. Available on iOS and Android.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://apps.apple.com"
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
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 bg-[#003448] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z"/>
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

          {/* Right Side - Interactive Phone Mockup with SIP Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
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