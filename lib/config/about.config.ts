// About section configuration
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Target, Eye, TrendingUp } from 'lucide-react';

export interface AboutFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string; // Background color for the card
}

export const aboutConfig = {
  badge: 'About Us',
  title: 'Dhanovaa — Your Growth Architect',
  introduction: [
    'Welcome to Dhanovaa, a place where disciplined financial strategy meets generations of market insight.',
    'We help families, professionals, NRIs, and businesses navigate equities, mutual funds, PMS, AIF, GIFT City funds, commodities, currency trading, and insurance with clarity and conviction.',
    'Here, growth isn\'t a chase. It\'s a structure, a design shaped by experience and foresight.',
  ],
  features: [
    {
      icon: BookOpen,
      title: 'Our Story',
      description: 'True growth is never accidental. For generations, Dhanovaa has guided families and businesses with clarity and conviction.',
      bgColor: '#003448', // Dark blue
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To guide clients toward long-term financial growth by designing disciplined, insight-driven strategies that adapt, endure, and create lasting value.',
      bgColor: '#68C0AE', // Teal/Primary
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the trusted architect of enduring prosperity for individuals, families, and institutions, creating futures defined by clarity, stability, and growth.',
      bgColor: '#8dd4c0', // Light green (primary light)
    },
    {
      icon: TrendingUp,
      title: 'What Sets Us Apart',
      description: 'Because great futures are built, not found.\nSolid strategies for shifting markets.\nProgress with purpose, not chance.\nDesigned for those who build legacies.',
      bgColor: '#605095', // Purple/Secondary
    },
  ] as AboutFeature[],
  ourStory: {
    title: 'Our Story',
    description: 'True growth is never accidental. It is built with foresight, discipline, and time. For generations, Dhanovaa has guided families and businesses with clarity and conviction, turning uncertainty into direction and direction into enduring progress. We are not driven by trends but by principles, interpreting markets, shaping strategies, and constructing structures that stand firm across cycles. As your growth architect, we design progress meant to last beyond tomorrow.',
  },
  mission: {
    title: 'Mission',
    description: 'To guide clients toward long-term financial growth by designing disciplined, insight-driven strategies that adapt, endure, and create lasting value.',
  },
  vision: {
    title: 'Vision',
    description: 'To be the trusted architect of enduring prosperity for individuals, families, and institutions, creating futures defined by clarity, stability, and growth.',
  },
  journey: {
    title: 'Our Journey So Far',
    description: 'What began as Dhanasree Wealth Financial Services founded by Sreenath Prabhu, a seasoned expert with decades of capital market experience has steadily grown from a small proprietorship into a trusted financial advisory serving clients across Kerala and India. Over the years, we expanded our expertise across equities, mutual funds, PMS, AIF, currency and commodity markets, derivatives, and insurance, earning a reputation for clarity, discipline, and dependable guidance.',
    evolution: 'Dhanovaa is the natural evolution of that journey, a future-ready identity built on legacy, principled decision-making, and the architecture of long-term financial growth. Through changing markets and across generations, we continue to stand as Your Growth Architect, designing progress that endures beyond tomorrow.',
  },
  foundersMessage: {
    header: "FOUNDER'S MESSAGE",
    paragraphs: [
      "For over three decades, my work in the capital markets has reinforced a simple truth: lasting financial growth is built, not found. Dhanovaa was founded on that belief. What began as a small wealth advisory firm has grown into a trusted financial partner for hundreds of families, professionals, and businesses across Kerala and India.",
      "As Your Growth Architect, we turn complexity into clarity and structure into confidence, helping every client build progress that stands strong across cycles.",
    ],
    founderName: 'Sreenath Prabhu',
    founderTitle: 'Founder & Director, Dhanovaa',
    imageUrl: '/media/sreenath-prabhu.jpeg',
  },
} as const;

