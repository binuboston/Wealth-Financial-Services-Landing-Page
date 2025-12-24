import dynamic from 'next/dynamic';
import { Hero } from '@/components/features/Hero';
import { BannerHeadlines } from '@/components/features/BannerHeadlines';
import { About } from '@/components/features/About';
import { Services } from '@/components/features/Services';
import { Footer } from '@/components/layout/Footer';

// Lazy load heavy components below the fold
const ComparisonChart = dynamic(() => import('@/components/features/ComparisonChart').then(mod => ({ default: mod.ComparisonChart })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/features/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

const Testimonials = dynamic(() => import('@/components/features/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

const Blog = dynamic(() => import('@/components/features/Blog').then(mod => ({ default: mod.Blog })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

const AppDownload = dynamic(() => import('@/components/features/AppDownload').then(mod => ({ default: mod.AppDownload })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

const ContactInstagram = dynamic(() => import('@/components/features/ContactInstagram').then(mod => ({ default: mod.ContactInstagram })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
  ssr: true,
});

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BannerHeadlines />
      <About />
      <Services />
      <ComparisonChart />
      <FAQ />
      <Testimonials />
      <Blog />
      <AppDownload />
      <ContactInstagram />
      <Footer />
    </div>
  );
}
