'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { Button } from '../ui/button';
import { aboutConfig } from '@/lib/config';
import { ArrowRight, Target, Eye } from 'lucide-react';

export function About() {
  return (
    <Section id="about" background="muted">
      <Container size="wide">
        <SectionHeader
          badge="About Us"
          badgeVariant="primary"
          title="Your Trusted Financial Partner"
          description={aboutConfig.introduction[0]}
        />

        {/* Introduction Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 xl:mb-16"
        >
          <div className="space-y-4 text-center">
            <p className="text-[var(--foreground)]/70 text-lg xl:text-xl leading-relaxed">
              {aboutConfig.introduction[1]}
            </p>
            <p className="text-[var(--foreground)]/70 text-lg xl:text-xl leading-relaxed">
              {aboutConfig.introduction[2]}
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Preview Cards */}
        <div className="grid md:grid-cols-2 gap-6 xl:gap-8 mb-12 xl:mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] rounded-2xl xl:rounded-3xl p-8 xl:p-10 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-4">
              <div className="w-12 h-12 xl:w-14 xl:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
              </div>
              <h3 className="text-xl xl:text-2xl font-bold mb-3">
                {aboutConfig.mission.title}
              </h3>
            </div>
            <p className="text-white/90 text-sm xl:text-base leading-relaxed line-clamp-3">
              {aboutConfig.mission.description}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[var(--color-brand-secondary)] to-[var(--color-brand-secondary-dark)] rounded-2xl xl:rounded-3xl p-8 xl:p-10 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-4">
              <div className="w-12 h-12 xl:w-14 xl:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
              </div>
              <h3 className="text-xl xl:text-2xl font-bold mb-3">
                {aboutConfig.vision.title}
              </h3>
            </div>
            <p className="text-white/90 text-sm xl:text-base leading-relaxed line-clamp-3">
              {aboutConfig.vision.description}
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
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
      </Container>
    </Section>
  );
}
