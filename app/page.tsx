import { Hero } from '@/components/Hero';
import { BannerHeadlines } from '@/components/BannerHeadlines';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { ComparisonChart } from '@/components/ComparisonChart';
import { FAQ } from '@/components/FAQ';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { AppDownload } from '@/components/AppDownload';
import { ContactInstagram } from '@/components/ContactInstagram';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20">
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