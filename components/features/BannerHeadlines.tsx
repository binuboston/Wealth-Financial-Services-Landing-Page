'use client';

import { motion } from 'motion/react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { designTokens } from '@/lib/design-tokens';

const headlines = [
  {
    icon: '/assets/icons/legacies.svg',
    text: 'Designed for those who\nbuild legacies.',
  },
  {
    icon: '/assets/icons/clarity.svg',
    text: 'Turning market chaos\ninto clarity.',
  },
  {
    icon: '/assets/icons/tomorrow.svg',
    text: 'Built on experience,\naimed at tomorrow.',
  },
  {
    icon: '/assets/icons/differents.svg',
    text: 'Mastery makes the\ndifference.',
  },
];

export function BannerHeadlines() {
  return (
    <Section background="muted">
      <Container size="full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 py-12 sm:py-16 xl:py-20">
          {headlines.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 xl:mb-8 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 xl:w-20 xl:h-20 object-contain"
                />
              </div>
              
              {/* Text */}
              <p 
                className="text-[var(--foreground)] text-base sm:text-lg xl:text-xl leading-relaxed whitespace-pre-line"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}