'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { Button } from '../ui/button';
import { navigationConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';

interface HeroNavigationProps {
  isVisible: boolean;
}

export function HeroNavigation({ isVisible }: HeroNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle anchor links (like /#services)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're already on the target page, just scroll
      if (pathname === path || (path === '/' && pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to the page - Next.js will handle the hash scroll automatically
        // But we'll also ensure it scrolls after navigation completes
        e.preventDefault();
        router.push(href);
        // Use a more reliable method to scroll after navigation
        const scrollToHash = () => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
          }
          return false;
        };
        
        // Try immediately, then retry with increasing delays
        if (!scrollToHash()) {
          setTimeout(() => {
            if (!scrollToHash()) {
              setTimeout(scrollToHash, 300);
            }
          }, 100);
        }
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-6"
      style={{ 
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div 
          className="flex items-center justify-between h-16 sm:h-20 backdrop-blur-xl rounded-2xl px-6 shadow-lg"
          style={{
            background: 'linear-gradient(to top, #013447, #184f59)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Logo className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navigationConfig.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                <Button
                  variant={isActive(link.href) ? 'default' : 'ghost'}
                  size="default"
                  className={`transition-all ${
                    isActive(link.href) 
                      ? 'bg-white/20 backdrop-blur-md border-white/30 text-white shadow-md' 
                      : 'bg-transparent border-transparent text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                  style={{ transitionDuration: designTokens.transitions.base }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="bg-transparent border-transparent text-white hover:bg-white/10"
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
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 rounded-xl py-4 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(to top, #013447, #184f59)',
            }}
          >
            <nav className="flex flex-col gap-2 px-2" aria-label="Mobile navigation">
              {navigationConfig.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(link.href, e);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Button
                    variant={isActive(link.href) ? 'default' : 'ghost'}
                    className={`w-full justify-start ${
                      isActive(link.href)
                        ? 'bg-white/20 text-white'
                        : 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

