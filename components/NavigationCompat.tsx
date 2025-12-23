'use client';

import { motion } from 'motion/react';
import Logo from './Logo';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export type PageView = 'home' | 'service-details' | 'gallery';

interface NavigationCompatProps {
  currentPage: PageView;
  onPageChange: (page: PageView) => void;
}

/**
 * Navigation Component (Vite/React Compatible)
 * For Next.js version, see components/Navigation.tsx
 */

export function NavigationCompat({ currentPage, onPageChange }: NavigationCompatProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' as PageView, href: '#home' },
    { label: 'Service Details', page: 'service-details' as PageView, href: null },
    { label: 'Gallery', page: 'gallery' as PageView, href: null },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    
    if (link.page !== 'home') {
      // Navigate to different page
      onPageChange(link.page);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home
      onPageChange('home');
      // If on home page and has section href, scroll to it
      if (currentPage === 'home' && link.href) {
        setTimeout(() => {
          const element = document.querySelector(link.href!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = () => {
    onPageChange('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (page: PageView) => {
    return currentPage === page;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex-shrink-0 cursor-pointer">
            <Logo variant="horizontal" className="h-8 sm:h-10" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Button
                key={link.page}
                onClick={() => handleNavClick(link)}
                variant={isActive(link.page) ? 'default' : 'ghost'}
                size="default"
                className="transition-all duration-200"
              >
                {link.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--color-border)] py-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.page}
                  onClick={() => handleNavClick(link)}
                  variant={isActive(link.page) ? 'default' : 'ghost'}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}