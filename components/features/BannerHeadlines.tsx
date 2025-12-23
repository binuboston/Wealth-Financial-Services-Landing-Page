'use client';

import { motion } from 'motion/react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';

const headlines = [
  'Designed for those who build legacies.',
  'Turning market chaos into clarity.',
  'Built on experience, aimed at tomorrow.',
  'Mastery makes the difference.',
];

export function BannerHeadlines() {
  return (
    <Section background="muted">
      <Container size="full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {headlines.map((headline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 xl:p-8"
            >
              <p className="text-[var(--color-brand-primary)] text-lg xl:text-xl italic">
                {headline}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}