'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Target, Eye, TrendingUp } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeroNavigation } from '@/components/layout/HeroNavigation';
import { Footer } from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { aboutConfig } from '@/lib/config';
import { designTokens } from '@/lib/design-tokens';
import Image from 'next/image';

export default function AboutPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={handleBack}
              className="mb-8 text-white hover:text-white/80 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            {/* Badge */}
            <Badge variant="secondary" className="mb-6">
              {aboutConfig.badge}
            </Badge>
            
            {/* Title */}
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-6">
              Who We Are
            </h1>
            
            {/* Introduction */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-xl xl:text-2xl text-white/90 leading-relaxed">
                {aboutConfig.introduction[0]}
              </p>
              <p className="text-lg xl:text-xl text-white/80 leading-relaxed">
                {aboutConfig.introduction[1]}
              </p>
              <p className="text-lg xl:text-xl text-white/80 leading-relaxed">
                {aboutConfig.introduction[2]}
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Our Story Section */}
      <Section background="white">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 
              className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[var(--foreground)] mb-8 xl:mb-10"
              style={{ fontFamily: designTokens.typography.fontFamily }}
            >
              {aboutConfig.ourStory.title}
            </h2>
            <p 
              className="text-[var(--foreground)]/80 text-lg xl:text-xl leading-relaxed"
              style={{ fontFamily: designTokens.typography.fontFamily }}
            >
              {aboutConfig.ourStory.description}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Mission & Vision Cards */}
      <Section background="muted">
        <Container size="full">
          <div className="grid md:grid-cols-2 gap-6 xl:gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] rounded-2xl xl:rounded-3xl p-8 xl:p-10 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                </div>
                <h3 
                  className="text-2xl xl:text-3xl font-bold mb-4"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {aboutConfig.mission.title}
                </h3>
              </div>
              <p 
                className="text-white/90 text-base xl:text-lg leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.mission.description}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[var(--color-brand-secondary)] to-[var(--color-brand-secondary-dark)] rounded-2xl xl:rounded-3xl p-8 xl:p-10 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                </div>
                <h3 
                  className="text-2xl xl:text-3xl font-bold mb-4"
                  style={{ fontFamily: designTokens.typography.fontFamily }}
                >
                  {aboutConfig.vision.title}
                </h3>
              </div>
              <p 
                className="text-white/90 text-base xl:text-lg leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.vision.description}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Our Journey So Far Section */}
      <Section background="white">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8 xl:mb-10">
              <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                <TrendingUp className="w-6 h-6 xl:w-7 xl:h-7 text-[var(--color-brand-primary)]" />
              </div>
              <h2 
                className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[var(--foreground)]"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.title}
              </h2>
            </div>
            <div className="space-y-6 xl:space-y-8">
              <p 
                className="text-[var(--foreground)]/80 text-lg xl:text-xl leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.description}
              </p>
              <p 
                className="text-[var(--foreground)]/80 text-lg xl:text-xl leading-relaxed"
                style={{ fontFamily: designTokens.typography.fontFamily }}
              >
                {aboutConfig.journey.evolution}
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Founder's Message Section */}
      <Section background="muted">
        <Container size="full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div 
              className="rounded-3xl xl:rounded-[2rem] overflow-hidden shadow-2xl"
              style={{
                backgroundColor: '#003448',
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Founder's Image */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gray-700">
                    <Image
                      src={aboutConfig.foundersMessage.imageUrl}
                      alt={aboutConfig.foundersMessage.founderName}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      quality={90}
                    />
                  </div>
                </div>

                {/* Right Side - Message Content */}
                <div className="p-8 sm:p-10 xl:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <h3 
                    className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8"
                    style={{ fontFamily: designTokens.typography.fontFamily }}
                  >
                    {aboutConfig.foundersMessage.header}
                  </h3>

                  {/* Message Paragraphs */}
                  <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                    {aboutConfig.foundersMessage.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-white text-base sm:text-lg xl:text-xl leading-relaxed"
                        style={{ fontFamily: designTokens.typography.fontFamily }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Signature */}
                  <div className="pt-4 border-t border-white/20">
                    <p 
                      className="text-white text-xl sm:text-2xl xl:text-3xl font-bold mb-2"
                      style={{ fontFamily: designTokens.typography.fontFamily }}
                    >
                      {aboutConfig.foundersMessage.founderName}
                    </p>
                    <p 
                      className="text-white/80 text-sm sm:text-base xl:text-lg"
                      style={{ fontFamily: designTokens.typography.fontFamily }}
                    >
                      {aboutConfig.foundersMessage.founderTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
