'use client';

import { useState, useEffect } from 'react';

export function useScrollDetection(threshold: number = 100) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return hasScrolled;
}


