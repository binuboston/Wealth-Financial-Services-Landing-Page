import { ServiceDetailDemo } from '@/components/services/ServiceDetailDemo';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Service Details - Dhanovaa Financial Services',
  description: 'Explore our comprehensive financial services including wealth management, SIP planning, mutual funds, and personalized investment strategies.',
};

export default function ServiceDetailsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <ServiceDetailDemo />
      <Footer />
    </div>
  );
}