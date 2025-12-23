// About section configuration
import type { LucideIcon } from 'lucide-react';
import { Award, Target, Eye, TrendingUp } from 'lucide-react';

export interface AboutFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutConfig = {
  badge: 'About Us',
  title: 'Dhanovaa — Your Growth Architect',
  description: [
    'Welcome to Dhanovaa, a place where disciplined financial strategy meets generations of market insight.',
    'We help families, professionals, NRIs, and businesses navigate equities, mutual funds, PMS, AIF, GIFT City funds, commodities, currency trading, and insurance with clarity and conviction.',
    'Here, growth isn\'t a chase. It\'s a structure, a design shaped by experience and foresight.',
  ],
  features: [
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
  ] as AboutFeature[],
  journey: {
    title: 'Our Journey',
    milestones: [
      { year: '1990', event: 'Founded with a vision' },
      { year: '2000', event: 'Expanded services' },
      { year: '2010', event: 'Digital transformation' },
      { year: '2020', event: 'Market leadership' },
    ],
  },
} as const;

