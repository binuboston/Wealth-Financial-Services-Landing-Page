'use client';

import { motion } from 'motion/react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { IconBox } from '../ui/icon-box';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';

export function About() {
  return (
    <Section id="about" background="white" withPattern patternColor="accent">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge={aboutConfig.badge}
              badgeVariant="accent"
              title={aboutConfig.title}
              align="left"
            />
            
            <div className="space-y-4 sm:space-y-6">
              {aboutConfig.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[var(--color-brand-primary)]/70 text-base sm:text-lg xl:text-lg ${
                    index === aboutConfig.description.length - 1 ? 'italic' : ''
                  }`}
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Journey Section */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6" style={{ color: designTokens.colors.brand.primary }}>
                {aboutConfig.journey.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {aboutConfig.journey.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: designTokens.colors.semantic.muted,
                      borderRadius: designTokens.borderRadius.md,
                    }}
                  >
                    <div 
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: designTokens.colors.brand.secondary }}
                    >
                      {milestone.year}
                    </div>
                    <div 
                      className="text-sm sm:text-base"
                      style={{ color: designTokens.colors.brand.primary }}
                    >
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {aboutConfig.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white border rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-sm hover:shadow-lg transition-all"
                      style={{
                        borderColor: designTokens.colors.semantic.border,
                        transitionDuration: designTokens.transitions.base,
                      }}
              >
                      <IconBox icon={Icon} variant="primary" size="md" className="mb-4 xl:mb-5" />
                      <h3 className="text-[var(--color-brand-primary)] mb-2 text-lg xl:text-xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--color-brand-primary)]/70 text-sm xl:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          </div>
      </Container>
    </Section>
  );
}
