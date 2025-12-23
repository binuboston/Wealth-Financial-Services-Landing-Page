"use client";

import { useState } from 'react';
import { ServiceDetail } from './ServiceDetail';
import { mutualFundsData, equitiesData, pmsData, insuranceData } from '@/lib/service-details-data';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Wallet, TrendingUp, LineChart, Shield, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ServiceType = 'mutual-funds' | 'equities' | 'pms' | 'insurance' | null;

const serviceList = [
  {
    id: 'mutual-funds' as ServiceType,
    icon: Wallet,
    title: 'Mutual Funds',
    description: 'Diversified portfolios aligned with your goals.',
    color: 'bg-[var(--color-brand-secondary)]',
  },
  {
    id: 'equities' as ServiceType,
    icon: TrendingUp,
    title: 'Equities',
    description: 'Strategic equity investments for long-term wealth creation.',
    color: 'bg-[var(--color-brand-primary)]',
  },
  {
    id: 'pms' as ServiceType,
    icon: LineChart,
    title: 'PMS',
    description: 'Personalized portfolio management services.',
    color: 'bg-[var(--color-brand-accent)]',
  },
  {
    id: 'insurance' as ServiceType,
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive protection for your legacy.',
    color: 'bg-[var(--color-brand-secondary)]',
  },
];

export function ServiceDetailDemo() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);

  const getServiceData = (serviceId: ServiceType) => {
    switch (serviceId) {
      case 'mutual-funds':
        return mutualFundsData;
      case 'equities':
        return equitiesData;
      case 'pms':
        return pmsData;
      case 'insurance':
        return insuranceData;
      default:
        return null;
    }
  };

  const handleCTAClick = () => {
    alert('This would open a consultation booking form or contact dialog');
  };

  if (selectedService) {
    const serviceData = getServiceData(selectedService);
    if (!serviceData) return null;

    return (
      <div className="min-h-screen">
        {/* Back button - positioned below navigation */}
        <div className="sticky top-24 left-6 z-40 max-w-[1440px] mx-auto px-6">
          <Button
            onClick={() => setSelectedService(null)}
            variant="secondary"
            size="lg"
            className="shadow-xl backdrop-blur-sm bg-white/90 hover:bg-white"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceDetail data={serviceData} onCTAClick={handleCTAClick} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-muted)] to-white">
      <div className="py-20 xl:py-32">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xl:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-brand-secondary)]/10 border border-[var(--color-brand-secondary)]/20 text-[var(--color-brand-secondary)] mb-6">
              Service Detail Pages Demo
            </div>
            
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl text-[var(--color-brand-primary)] mb-6">
              Reusable Service Detail Pages
            </h1>
            
            <p className="text-lg xl:text-xl text-[var(--color-brand-primary)]/70 max-w-3xl mx-auto mb-4">
              Click any service below to view its comprehensive detail page with hero, features, process, benefits, pricing tiers, related services, and FAQs.
            </p>
            
            <p className="text-base xl:text-lg text-[var(--color-brand-primary)]/60 max-w-2xl mx-auto">
              Each page is data-driven and fully customizable—perfect for showcasing different financial services with consistent design and user experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {serviceList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedService(service.id)}
                  className="cursor-pointer"
                >
                  <Card className="h-full border-2 hover:border-[var(--color-brand-secondary)] transition-all hover:shadow-2xl group">
                    <CardHeader>
                      <div className={`w-16 h-16 xl:w-20 xl:h-20 ${service.color} rounded-2xl xl:rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl xl:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base xl:text-lg mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center text-[var(--color-brand-secondary)] group-hover:translate-x-1 transition-transform">
                        <span className="text-sm">View Details</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Features Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 xl:mt-24"
          >
            <Card className="border-2 border-[var(--color-brand-accent)]/30 bg-gradient-to-br from-white to-[var(--color-muted)]">
              <CardHeader>
                <CardTitle className="text-2xl xl:text-3xl text-center text-[var(--color-brand-primary)]">
                  What&apos;s Included in Each Service Page
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[var(--color-brand-primary)] rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl xl:text-2xl">1</span>
                    </div>
                    <h4 className="text-[var(--color-brand-primary)] mb-2">Hero Section</h4>
                    <p className="text-sm text-[var(--color-brand-primary)]/70">
                      Engaging intro with glassmorphism effects
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[var(--color-brand-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl xl:text-2xl">2</span>
                    </div>
                    <h4 className="text-[var(--color-brand-primary)] mb-2">Features & Process</h4>
                    <p className="text-sm text-[var(--color-brand-primary)]/70">
                      Key features grid and step-by-step timeline
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[var(--color-brand-accent)] rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl xl:text-2xl">3</span>
                    </div>
                    <h4 className="text-[var(--color-brand-primary)] mb-2">Pricing Tiers</h4>
                    <p className="text-sm text-[var(--color-brand-primary)]/70">
                      Flexible investment options comparison
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[var(--color-brand-secondary)] to-[var(--color-brand-accent)] rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl xl:text-2xl">4</span>
                    </div>
                    <h4 className="text-[var(--color-brand-primary)] mb-2">FAQs & CTAs</h4>
                    <p className="text-sm text-[var(--color-brand-primary)]/70">
                      Common questions and conversion sections
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 p-6 xl:p-8 bg-[var(--color-brand-primary)]/5 border border-[var(--color-brand-primary)]/10 rounded-2xl"
          >
            <h3 className="text-xl xl:text-2xl text-[var(--color-brand-primary)] mb-4">
              Implementation Guide
            </h3>
            <div className="space-y-3 text-[var(--color-brand-primary)]/80 text-sm xl:text-base">
              <p>
                <strong>• Component Location:</strong> <code className="px-2 py-1 bg-white rounded text-[var(--color-brand-secondary)]">/components/ServiceDetail.tsx</code>
              </p>
              <p>
                <strong>• Data Structure:</strong> <code className="px-2 py-1 bg-white rounded text-[var(--color-brand-secondary)]">/lib/service-details-data.ts</code>
              </p>
              <p>
                <strong>• Usage:</strong> Import the component and pass the appropriate service data object as props
              </p>
              <p>
                <strong>• Customization:</strong> Each service page is fully data-driven. Update the data objects to change content, features, pricing, FAQs, etc.
              </p>
              <p>
                <strong>• Routing:</strong> Integrate with your routing solution (Next.js, React Router, etc.) to create URLs like <code className="px-2 py-1 bg-white rounded">/services/mutual-funds</code>
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}