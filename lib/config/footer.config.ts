// Footer configuration
import { siteConfig } from './site.config';
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { XIcon } from '@/components/icons/XIcon';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerConfig = {
  company: {
    description: 'Dhanovaa — Your Growth Architect. Building enduring prosperity through disciplined financial strategies and generational insight.',
  },
  trustIndicators: {
    experience: '25+ Years',
    experienceLabel: 'of Financial Excellence',
    clients: '1000+',
    clientsLabel: 'Trusted Clients',
    compliance: 'AMFI Registered',
    complianceLabel: 'Regulatory Compliance',
  },
  corporateValues: [
    {
      title: 'Integrity First',
      description: 'Transparent, ethical practices in every financial decision we make.',
    },
    {
      title: 'Client-Centric',
      description: 'Your financial goals are our commitment. Personalized strategies for lasting wealth.',
    },
    {
      title: 'Regulatory Excellence',
      description: 'Fully compliant with SEBI regulations. Your investments are protected and secure.',
    },
  ],
  socialLinks: [
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'X', url: siteConfig.social.twitter, icon: XIcon },
    { name: 'Facebook', url: siteConfig.social.facebook, icon: Facebook },
    { name: 'Instagram', url: siteConfig.social.instagram, icon: Instagram },
  ] as SocialLink[],
  quickLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ] as FooterLink[],
  newsletter: {
    title: 'Newsletter',
    description: 'Subscribe for financial tips and market insights',
    placeholder: 'Your email',
    buttonIcon: Mail,
    submitAction: '/api/newsletter',
  },
  legal: {
    copyright: siteConfig.legal.copyright,
    links: [
      { label: 'Privacy Policy', href: siteConfig.legal.privacyPolicy },
      { label: 'Terms of Service', href: siteConfig.legal.termsOfService },
      { label: 'Cookie Policy', href: siteConfig.legal.cookiePolicy },
    ],
  },
} as const;

