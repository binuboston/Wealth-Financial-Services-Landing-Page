'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionBadge } from '../ui/section-badge';
import { Button } from '../ui/button';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import { ArrowRight } from 'lucide-react';

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
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={90}
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
