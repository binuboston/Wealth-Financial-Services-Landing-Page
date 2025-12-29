import { motion } from 'motion/react';
import { LucideIcon, ArrowRight, Check, TrendingUp } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HeroNavigation } from '../layout/HeroNavigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

// Types for service detail data structure
export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  minInvestment?: string;
  recommended?: boolean;
}

export interface RelatedService {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  // Hero section
  title: string;
  subtitle: string;
  description: string;
  heroIcon: LucideIcon;
  badge: string;
  ctaText?: string;
  
  // Key features
  features: ServiceFeature[];
  
  // Process/How it works
  process: ProcessStep[];
  
  // Benefits
  benefits: Benefit[];
  
  // Pricing/Tiers (optional)
  pricingTiers?: PricingTier[];
  
  // Related services
  relatedServices?: RelatedService[];
  
  // FAQs specific to this service
  faqs: ServiceFAQ[];
}

interface ServiceDetailProps {
  data: ServiceDetailData;
  onCTAClick?: () => void;
}

export function ServiceDetail({ data, onCTAClick }: ServiceDetailProps) {
  const HeroIcon = data.heroIcon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section background="gradient" className="relative overflow-hidden pt-32 pb-20 xl:pt-40 xl:pb-32">
        {/* Hero Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
          <HeroNavigation isVisible={true} />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-brand-accent)] rounded-full blur-3xl" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <Badge variant="secondary" className="mb-6">
                {data.badge}
              </Badge>
              
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-6">
                {data.title}
              </h1>
              
              <p className="text-xl xl:text-2xl mb-6 text-white/90">
                {data.subtitle}
              </p>
              
              <p className="text-lg xl:text-xl mb-8 text-white/80 leading-relaxed">
                {data.description}
              </p>
              
              <Button 
                size="lg" 
                variant="secondary"
                onClick={onCTAClick}
                className="group"
              >
                {data.ctaText || 'Get Started'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Right: Hero Icon with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                {/* Glassmorphic card */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl xl:rounded-[2.5rem] p-12 xl:p-16 shadow-2xl">
                  <div className="w-48 h-48 xl:w-64 xl:h-64 bg-white rounded-3xl xl:rounded-[2rem] flex items-center justify-center shadow-xl">
                    <HeroIcon className="w-24 h-24 xl:w-32 xl:h-32 text-[var(--foreground)]" />
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-20 h-20 xl:w-24 xl:h-24 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl xl:rounded-3xl flex items-center justify-center shadow-lg"
                >
                  <TrendingUp className="w-10 h-10 xl:w-12 xl:h-12 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 xl:w-20 xl:h-20 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl xl:rounded-3xl flex items-center justify-center shadow-lg"
                >
                  <Check className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Key Features Section */}
      <Section background="white">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xl:mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Key Features
            </Badge>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
              What Makes This Different
            </h2>
            <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Designed with precision, powered by expertise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {data.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-[var(--color-brand-secondary)] transition-all hover:shadow-xl group">
                    <CardHeader>
                      <div className="w-14 h-14 xl:w-16 xl:h-16 bg-[var(--color-brand-primary)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FeatureIcon className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl xl:text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base xl:text-lg">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process/How It Works Section */}
      <Section background="muted" withPattern patternColor="secondary">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xl:mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Process
            </Badge>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
              How It Works
            </h2>
            <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              A clear, structured approach to your financial goals.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-brand-secondary)] to-[var(--color-brand-accent)]" />
            
            <div className="space-y-12 xl:space-y-16">
              {data.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content side */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="border-2 hover:border-[var(--color-brand-secondary)] transition-all hover:shadow-xl">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] rounded-full flex items-center justify-center text-white text-xl xl:text-2xl">
                            {step.step}
                          </div>
                          <CardTitle className="text-xl xl:text-2xl">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base xl:text-lg">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Empty space for timeline on desktop */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {/* Timeline dot */}
                    <div className="flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-brand-secondary)] to-[var(--color-brand-accent)] rounded-full border-4 border-white shadow-lg" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xl:mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Benefits
            </Badge>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
              Why Choose This Service
            </h2>
            <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Built to deliver measurable value and lasting impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {data.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon || Check;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white border-2 border-[var(--color-border)] hover:border-[var(--color-brand-accent)] rounded-2xl xl:rounded-3xl p-6 xl:p-8 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[var(--color-brand-accent)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BenefitIcon className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                  </div>
                  <h3 className="text-lg xl:text-xl text-[var(--foreground)] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--foreground)]/70 text-sm xl:text-base">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing/Tiers Section (Optional) - Hidden per user request */}
      {/* {data.pricingTiers && data.pricingTiers.length > 0 && (
        <Section background="muted" withPattern patternColor="primary">
          <Container size="full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 xl:mb-16"
            >
              <Badge variant="outline" className="mb-4">
                Investment Options
              </Badge>
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
                Choose Your Path
              </h2>
              <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
                Flexible options designed for different goals and capacities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {data.pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative ${tier.recommended ? 'lg:-mt-4' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge variant="default" className="bg-[var(--color-brand-accent)] text-white">
                        Recommended
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full ${
                    tier.recommended 
                      ? 'border-[var(--color-brand-accent)] border-2 shadow-2xl' 
                      : 'border-2 hover:border-[var(--color-brand-secondary)]'
                  } transition-all`}>
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl xl:text-3xl text-[var(--foreground)]">
                        {tier.name}
                      </CardTitle>
                      <CardDescription className="text-base xl:text-lg mt-2">
                        {tier.description}
                      </CardDescription>
                      {tier.minInvestment && (
                        <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                          <p className="text-sm text-[var(--foreground)]/60">
                            Minimum Investment
                          </p>
                          <p className="text-2xl xl:text-3xl text-[var(--foreground)] mt-1">
                            {tier.minInvestment}
                          </p>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[var(--color-brand-secondary)] flex-shrink-0 mt-0.5" />
                            <span className="text-[var(--foreground)]/80 text-sm xl:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full mt-6"
                        variant={tier.recommended ? 'default' : 'outline'}
                        size="lg"
                        onClick={onCTAClick}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )} */}

      {/* Related Services (Optional) */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <Section background="white">
          <Container size="full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 xl:mb-16"
            >
              <Badge variant="outline" className="mb-4">
                Related Services
              </Badge>
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
                Explore More Solutions
              </h2>
              <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
                Complete your financial strategy with complementary services.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {data.relatedServices.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.a
                    key={index}
                    href={service.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white border-2 border-[var(--color-border)] hover:border-[var(--color-brand-secondary)] rounded-2xl xl:rounded-3xl p-6 xl:p-8 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="w-14 h-14 xl:w-16 xl:h-16 bg-[var(--color-brand-primary)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ServiceIcon className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                    </div>
                    <h3 className="text-lg xl:text-xl text-[var(--foreground)] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 text-sm xl:text-base mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[var(--color-brand-secondary)] group-hover:translate-x-1 transition-transform">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ Section */}
      <Section background="muted" withPattern patternColor="accent">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xl:mb-16"
          >
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
              Common Questions
            </h2>
            <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Everything you need to know about this service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-0 border border-[var(--color-border)] rounded-2xl overflow-hidden bg-white max-w-4xl mx-auto"
            >
              {data.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className={`border-b last:border-b-0 border-[var(--color-border)] px-5 xl:px-6 hover:bg-[var(--color-brand-secondary)]/5 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#f0f9f6]/30'
                    }`}
                  >
                    <AccordionTrigger className="text-[var(--foreground)] hover:text-[var(--foreground)]/80 text-left py-4 xl:py-5 text-base xl:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--foreground)]/70 pb-4 xl:pb-5 text-sm xl:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        
        <Container size="default" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg xl:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step toward achieving your financial goals with expert guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={onCTAClick} className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
