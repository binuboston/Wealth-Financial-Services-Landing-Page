'use client';

import { motion } from 'motion/react';
import { TrendingUp, Target, Eye, Award } from 'lucide-react';
import { Section } from './ui/section';
import { Container } from './ui/container';
import { SectionHeader } from './ui/section-header';
import { IconBox } from './ui/icon-box';

const features = [
  {
    icon: Award,
    title: 'Our Story',
    description: 'True growth is never accidental. For generations, Dhanovaa has guided families and businesses with clarity and conviction.',
  },
  {
    icon: Target,
    title: 'Mission',
    description: 'To guide clients toward long-term financial growth by designing disciplined, insight-driven strategies that adapt, endure, and create lasting value.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the trusted architect of enduring prosperity for individuals, families, and institutions, creating futures defined by clarity, stability, and growth.',
  },
  {
    icon: TrendingUp,
    title: 'What Sets Us Apart',
    description: 'Great futures are built, not found. Solid strategies for shifting markets. Progress with purpose, not chance.',
  },
];

export function About() {
  return (
    <Section id="about" background="white" withPattern patternColor="accent">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="About Us"
              badgeVariant="accent"
              title="Dhanovaa — Your Growth Architect"
              align="left"
            />
            <p className="text-[var(--color-brand-primary)]/70 mb-6 text-base xl:text-lg">
              Welcome to Dhanovaa, a place where disciplined financial strategy meets generations of market insight.
            </p>
            <p className="text-[var(--color-brand-primary)]/70 mb-6 text-base xl:text-lg">
              We help families, professionals, NRIs, and businesses navigate equities, mutual funds, PMS, AIF, GIFT City funds, commodities, currency trading, and insurance with clarity and conviction.
            </p>
            <p className="text-[var(--color-brand-primary)] mb-6 text-base xl:text-lg italic">
              Here, growth isn&apos;t a chase. It&apos;s a structure, a design shaped by experience and foresight.
            </p>
            
            {/* Journey Section */}
            <div className="mt-8 xl:mt-10 pt-8 xl:pt-10 border-t border-[var(--color-border)]">
              <h3 className="text-[var(--color-brand-primary)] mb-4 text-xl xl:text-2xl">Our Journey So Far</h3>
              <p className="text-[var(--color-brand-primary)]/70 text-sm xl:text-base leading-relaxed">
                What began as Dhanasree Wealth Financial Services founded by <strong>Sreenath Prabhu</strong>, a seasoned expert with decades of capital market experience has steadily grown from a small proprietorship into a trusted financial advisory serving clients across Kerala and India. Dhanovaa is the natural evolution of that journey, a future-ready identity built on legacy, principled decision-making, and the architecture of long-term financial growth.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 xl:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white border border-[var(--color-border)] rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <IconBox icon={feature.icon} variant="primary" size="md" className="mb-4 xl:mb-5" />
                <h3 className="text-[var(--color-brand-primary)] mb-2 text-lg xl:text-xl">{feature.title}</h3>
                <p className="text-[var(--color-brand-primary)]/70 text-sm xl:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 xl:mt-24 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary)]/90 rounded-3xl xl:rounded-[2.5rem] p-10 xl:p-16 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-[var(--color-brand-secondary)] mb-4 xl:mb-6 text-sm xl:text-base uppercase tracking-wider">Founder&apos;s Message</div>
            <p className="mb-6 xl:mb-8 text-lg xl:text-xl leading-relaxed opacity-90">
              For over three decades, my work in the capital markets has reinforced a simple truth: lasting financial growth is built, not found. Dhanovaa was founded on that belief. What began as a small wealth advisory firm has grown into a trusted financial partner for hundreds of families, professionals, and businesses across Kerala and India.
            </p>
            <p className="mb-8 xl:mb-10 text-lg xl:text-xl leading-relaxed opacity-90">
              As Your Growth Architect, we turn complexity into clarity and structure into confidence, helping every client build progress that stands strong across cycles.
            </p>
            <div className="pt-6 xl:pt-8 border-t border-white/20">
              <div className="text-xl xl:text-2xl mb-1">Sreenath Prabhu</div>
              <div className="text-[var(--color-brand-secondary)] text-sm xl:text-base">Founder & Director, Dhanovaa</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}