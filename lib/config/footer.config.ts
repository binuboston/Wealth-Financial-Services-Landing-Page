// Footer configuration
import { siteConfig } from './site.config';
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
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
  socialLinks: [
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Twitter', url: siteConfig.social.twitter, icon: Twitter },
    { name: 'Facebook', url: siteConfig.social.facebook, icon: Facebook },
    { name: 'Instagram', url: siteConfig.social.instagram, icon: Instagram },
  ] as SocialLink[],
  quickLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ] as FooterLink[],
  services: [
    { label: 'Equities', href: '/service-details?service=equities' },
    { label: 'Mutual Funds', href: '/service-details?service=mutual-funds' },
    { label: 'PMS & AIF', href: '/service-details?service=pms' },
    { label: 'GIFT City Funds', href: '/service-details?service=gift-city' },
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

