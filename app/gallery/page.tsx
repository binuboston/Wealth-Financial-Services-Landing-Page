'use client';

import { Gallery } from '@/components/features/Gallery';
import { Footer } from '@/components/layout/Footer';
import { HeroNavigation } from '@/components/layout/HeroNavigation';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-surface)] to-white">
      {/* Hero Navigation */}
      <div className="relative z-50 pt-4 sm:pt-6">
        <HeroNavigation isVisible={true} />
      </div>
      
    <div className="pt-16 sm:pt-20">
      <Gallery />
      <Footer />
      </div>
    </div>
  );
}