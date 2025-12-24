'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { Footer } from '@/components/layout/Footer';
import { getServiceData } from '@/lib/service-details-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ServiceDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get('service');
  const [serviceData, setServiceData] = useState(getServiceData(serviceId || ''));

  useEffect(() => {
    if (serviceId) {
      const data = getServiceData(serviceId);
      setServiceData(data);
    } else {
      setServiceData(null);
    }
  }, [serviceId]);

  const handleCTAClick = () => {
    // Navigate to home page with contact section
    router.push('/');
    // Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!serviceId || !serviceData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16 sm:pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested service could not be found.</p>
          <Button onClick={() => router.push('/#services')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Services
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={serviceId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceDetail data={serviceData} onCTAClick={handleCTAClick} />
        </motion.div>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}