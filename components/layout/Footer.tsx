'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import Logo from './Logo';
import { footerConfig, siteConfig, heroConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement newsletter subscription API call
    try {
      // await fetch(footerConfig.newsletter.submitAction, { ... });
      console.log('Newsletter subscription:', email);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer 
      className="text-white py-12 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${heroConfig.backgroundGradient.from}, ${heroConfig.backgroundGradient.via} 50%, ${heroConfig.backgroundGradient.to})`,
      }}
    >
      {/* Organic Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg 
          className="absolute bottom-0 left-0 w-full h-[150px]" 
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M0,200 Q200,100 400,180 T800,200 L800,400 L0,400 Z" 
            fill={designTokens.colors.brand.accent}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo className="h-10" variant="light" />
            </div>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              {footerConfig.company.description}
            </p>
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[var(--color-brand-secondary)] rounded-xl flex items-center justify-center transition-colors"
                    style={{ transitionDuration: designTokens.transitions.base }}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="w-5 h-5" />
              </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white font-semibold text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerConfig.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--color-brand-accent)] transition-colors text-sm sm:text-base"
                    style={{ transitionDuration: designTokens.transitions.base }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-white font-semibold text-base sm:text-lg">
              Services
            </h3>
            <ul className="space-y-2">
              {footerConfig.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[var(--color-brand-accent)] transition-colors text-sm sm:text-base"
                    style={{ transitionDuration: designTokens.transitions.base }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Hidden for now */}
          {/* <div>
            <h3 className="mb-4 text-white font-semibold text-base sm:text-lg">
              {footerConfig.newsletter.title}
            </h3>
            <p className="text-white/70 mb-4 text-sm sm:text-base">
              {footerConfig.newsletter.description}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerConfig.newsletter.placeholder}
                required
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)] text-white placeholder-white/50 text-sm sm:text-base"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-accent)] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ transitionDuration: designTokens.transitions.base }}
                aria-label="Subscribe to newsletter"
              >
                <footerConfig.newsletter.buttonIcon className="w-5 h-5" />
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-center md:text-left text-sm sm:text-base">
              {footerConfig.legal.copyright}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-white/70 text-sm sm:text-base">
              {footerConfig.legal.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--color-brand-accent)] transition-colors"
                  style={{ transitionDuration: designTokens.transitions.base }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
