import { Hero } from '@/components/features/Hero';
import { BannerHeadlines } from '@/components/features/BannerHeadlines';
import { About } from '@/components/features/About';
import { Services } from '@/components/features/Services';
import { ComparisonChart } from '@/components/features/ComparisonChart';
import { FAQ } from '@/components/features/FAQ';
import { Testimonials } from '@/components/features/Testimonials';
import { Blog } from '@/components/features/Blog';
import { AppDownload } from '@/components/features/AppDownload';
import { ContactInstagram } from '@/components/features/ContactInstagram';
import { Footer } from '@/components/layout/Footer';

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
