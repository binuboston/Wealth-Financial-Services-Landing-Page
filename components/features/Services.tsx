'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { TrendingUp, Wallet, LineChart, Building2, Globe2, BarChart3, DollarSign, Coins, PiggyBank, Shield } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';

const services = [
  {
    id: 'equities',
    icon: TrendingUp,
    title: 'Equities',
    description: 'Strategic equity investments for long-term wealth creation.',
    variant: 'primary' as const,
  },
  {
    id: 'mutual-funds',
    icon: Wallet,
    title: 'Mutual Funds',
    description: 'Diversified portfolios aligned with your goals.',
    variant: 'secondary' as const,
  },
  {
    id: 'pms',
    icon: LineChart,
    title: 'PMS',
    description: 'Personalized portfolio management services.',
    variant: 'accent' as const,
  },
  {
    id: 'aif',
    icon: Building2,
    title: 'AIF',
    description: 'Alternative investments beyond traditional assets.',
    variant: 'primary' as const,
  },
  {
    id: 'gift-city-funds',
    icon: Globe2,
    title: 'GIFT City Funds',
    description: 'Global opportunities with tax-efficient structures.',
    variant: 'secondary' as const,
  },
  {
    id: 'derivatives',
    icon: BarChart3,
    title: 'Derivatives',
    description: 'Strategic hedging and portfolio optimization.',
    variant: 'accent' as const,
  },
  {
    id: 'currency-trading',
    icon: DollarSign,
    title: 'Currency Trading',
    description: 'Forex solutions with disciplined risk controls.',
    variant: 'primary' as const,
  },
  {
    id: 'commodities',
    icon: Coins,
    title: 'Commodities',
    description: 'Precious metals and energy diversification.',
    variant: 'secondary' as const,
  },
  {
    id: 'sip-planning',
    icon: PiggyBank,
    title: 'SIP Planning',
    description: 'Systematic investing for steady wealth building.',
    variant: 'accent' as const,
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive protection for your legacy.',
    variant: 'primary' as const,
  },
];

const variantColors = {
  primary: 'bg-[var(--color-brand-primary)]',
  secondary: 'bg-[var(--color-brand-secondary)]',
  accent: 'bg-[var(--color-brand-accent)]',
};

export function Services() {
  const router = useRouter();

  const handleServiceClick = (serviceId: string) => {
    router.push(`/service-details?service=${serviceId}`);
  };

  return (
    <Section id="services" background="muted" withPattern patternColor="primary">
      <Container size="full">
        <SectionHeader
          badge="Our Services"
          badgeVariant="primary"
          title="Strategies Built With Purpose. Growth Designed to Endure."
          description="Dhanovaa offers a comprehensive suite of financial services, built on disciplined strategy, generational insight, and long-term vision."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColor = variantColors[service.variant];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleServiceClick(service.id)}
                className="group bg-white rounded-2xl xl:rounded-3xl p-6 xl:p-8 hover:shadow-2xl hover:border hover:border-[#003448]/10 transition-all cursor-pointer flex flex-col"
              >
                {/* Icon Container - Fixed Height */}
                <div className="flex items-center justify-center mb-5 xl:mb-6">
                  <div className={`w-16 h-16 xl:w-20 xl:h-20 ${bgColor} rounded-2xl xl:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                  </div>
                </div>
                
                {/* Text Content - Flex Grow */}
                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-[var(--foreground)] mb-3 xl:mb-4 text-lg xl:text-xl min-h-[3.5rem] xl:min-h-[4rem] flex items-center justify-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/60 text-sm xl:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}