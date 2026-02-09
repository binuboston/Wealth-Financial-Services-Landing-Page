'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionBadge } from '../ui/section-badge';
import { Button } from '../ui/button';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import { ArrowRight } from 'lucide-react';
import { FounderMessage } from './FounderMessage';

export function About() {
  return (
    <Section id="about" background="white" withPattern patternColor="accent">
      <Container size="wide">
        <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 xl:gap-24 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Badge */}
            <div className="mb-6 xl:mb-8">
              <SectionBadge animate>{aboutConfig.badge}</SectionBadge>
            </div>

            {/* Title */}
            <h2 
              className="text-[var(--foreground)] mb-6 xl:mb-8 text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight"
              style={{ fontFamily: designTokens.typography.fontFamily }}
            >
              Your Trusted Financial Partner
            </h2>
            
            {/* Description */}
            <p
              className="text-[var(--foreground)]/70 text-base sm:text-lg xl:text-lg leading-relaxed mb-6"
              style={{ fontFamily: designTokens.typography.fontFamily }}
            >
              {aboutConfig.introduction[0]}
            </p>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {aboutConfig.introduction.slice(1).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--foreground)]/70 text-base sm:text-lg xl:text-lg leading-relaxed"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                variant="outline"
                className="group border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {aboutConfig.features.map((feature, index) => {
                const Icon = feature.icon;
                // Use darker text for Mission and Vision cards for better readability on light backgrounds
                const isMissionOrVision = feature.title === 'Mission' || feature.title === 'Vision';
                const textColor = isMissionOrVision ? 'text-[#003448]' : 'text-white';
                const textOpacity = isMissionOrVision ? 'text-[#003448]/90' : 'text-white/90';
                const iconBg = isMissionOrVision ? 'rgba(0, 52, 72, 0.15)' : 'rgba(255, 255, 255, 0.2)';
                const iconColor = isMissionOrVision ? 'text-[#003448]' : 'text-white';
                
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Link 
                      href="/about"
                      className="h-full flex flex-col rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                      style={{
                        backgroundColor: feature.bgColor,
                        transitionDuration: designTokens.transitions.base,
                      }}
                    >
                      {/* Icon */}
                      <div className="mb-4 xl:mb-5">
                        <div 
                          className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: iconBg }}
                        >
                          <Icon className={`w-6 h-6 xl:w-7 xl:h-7 ${iconColor}`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 
                        className={`${textColor} mb-3 xl:mb-4 text-lg xl:text-xl font-semibold`}
                        style={{ fontFamily: designTokens.typography.fontFamily }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      {feature.title === 'What Sets Us Apart' ? (
                        <ul 
                          className={`${textOpacity} text-sm xl:text-base leading-relaxed flex-grow space-y-2 list-none`}
                          style={{ fontFamily: designTokens.typography.fontFamily }}
                        >
                          {feature.description.split('\n').map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#9ece6c] mt-1.5 flex-shrink-0">●</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p 
                          className={`${textOpacity} text-sm xl:text-base leading-relaxed flex-grow`}
                          style={{ fontFamily: designTokens.typography.fontFamily }}
                        >
                          {feature.description}
                        </p>
                      )}

                      {/* Read more - Our Story card only */}
                      {feature.title === 'Our Story' && (
                        <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-white/90 group-hover:gap-3 transition-all text-sm xl:text-base">
                          <span>Read more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Founder's Message Section */}
        <FounderMessage className="mt-16 sm:mt-20 xl:mt-24" />
      </Container>
    </Section>
  );
}
