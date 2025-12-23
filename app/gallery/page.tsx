import { Gallery } from '@/components/features/Gallery';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Gallery - Dhanovaa Financial Services',
  description: 'Explore our gallery showcasing our journey, events, and client success stories at Dhanovaa Financial Services.',
};

export default function GalleryPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Gallery />
      <Footer />
    </div>
  );
}