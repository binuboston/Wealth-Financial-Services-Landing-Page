'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import { SectionBadge } from '../ui/section-badge';

interface FounderMessageProps {
  /** Optional className for the wrapper */
  className?: string;
}

export function FounderMessage({ className = '' }: FounderMessageProps) {
  const { foundersMessage } = aboutConfig;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      <div
        className="rounded-3xl xl:rounded-[2rem] overflow-hidden shadow-2xl"
        style={{
          backgroundColor: '#003448', // Dark teal/blue-green
        }}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Founder's Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gray-700">
              <Image
                src={foundersMessage.imageUrl}
                alt={foundersMessage.founderName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="p-8 sm:p-10 xl:p-12 flex flex-col justify-center">
            {/* Header - chip style */}
            <SectionBadge
              animate
              className="bg-white/20 border-white/30 [&_span]:text-white mb-6 sm:mb-8"
            >
              {foundersMessage.header}
            </SectionBadge>

            {/* Message Paragraphs */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {foundersMessage.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-white text-base sm:text-lg xl:text-xl leading-relaxed"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-4 border-t border-white/20">
              <p
                className="text-white text-xl sm:text-2xl xl:text-3xl font-bold mb-2"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {foundersMessage.founderName}
              </p>
              <p
                className="text-white/80 text-sm sm:text-base xl:text-lg"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {foundersMessage.founderTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
