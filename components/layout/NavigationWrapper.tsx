'use client';

import { Navigation } from './Navigation';
import { useScrollDetection } from '@/hooks/useScrollDetection';

export function NavigationWrapper() {
  const hasScrolled = useScrollDetection(100);

  return <Navigation isVisible={hasScrolled} />;
}


