'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { Badge } from '../ui/badge';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';

export function About() {
  return (
    <Section id="about" background="white" withPattern patternColor="accent">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 xl:mb-8">
              <Badge variant="primary" className="text-sm xl:text-base">
                {aboutConfig.badge}
              </Badge>
            </div>

            {/* Title */}
            <h2 
              className="text-[var(--foreground)] mb-6 xl:mb-8 text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight"
              style={{ fontFamily: designTokens.typography.fontFamily }}
            >
              {aboutConfig.title}
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {aboutConfig.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--foreground)]/70 text-base sm:text-lg xl:text-lg leading-relaxed"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Journey Section */}
            <div className="mt-8 sm:mt-10">
              <h3 
                className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[var(--foreground)]"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.title}
              </h3>
              <p 
                className="text-[var(--foreground)] font-semibold mb-3 sm:mb-4 text-lg sm:text-xl"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.founder}
              </p>
              <p 
                className="text-[var(--foreground)]/70 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.description}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {aboutConfig.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div 
                      className="h-full flex flex-col rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-lg hover:shadow-xl transition-all"
                      style={{
                        backgroundColor: feature.bgColor,
                        transitionDuration: designTokens.transitions.base,
                      }}
                    >
                      {/* Icon */}
                      <div className="mb-4 xl:mb-5">
                        <div 
                          className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          <Icon className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className="text-white mb-3 xl:mb-4 text-lg xl:text-xl font-semibold"
                        style={{ fontFamily: designTokens.typography.fontFamily }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="text-white/90 text-sm xl:text-base leading-relaxed flex-grow"
                        style={{ fontFamily: designTokens.typography.fontFamily }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Founder's Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 xl:mt-24"
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
                    src={aboutConfig.foundersMessage.imageUrl}
                    alt={aboutConfig.foundersMessage.founderName}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Side - Message Content */}
              <div className="p-8 sm:p-10 xl:p-12 flex flex-col justify-center">
                {/* Header */}
                <h3 
                  className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {aboutConfig.foundersMessage.header}
                </h3>

                {/* Message Paragraphs */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  {aboutConfig.foundersMessage.paragraphs.map((paragraph, index) => (
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
                    {aboutConfig.foundersMessage.founderName}
                  </p>
                  <p 
                    className="text-white/80 text-sm sm:text-base xl:text-lg"
                    style={{ fontFamily: designTokens.typography.fontFamily }}
                  >
                    {aboutConfig.foundersMessage.founderTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
