'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/figma/ImageWithFallback';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/layout/Footer';
import { HeroNavigation } from '@/components/layout/HeroNavigation';
import { blogPosts } from '@/lib/config/blog.config';
import { Section } from '@/components/ui/section';
import Link from 'next/link';

export default function BlogPage() {
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
            className="text-center text-white"
          >
            <div className="mb-12 xl:mb-16">
              <Badge variant="secondary" className="mb-6 xl:mb-8">
                <span className="text-white text-sm xl:text-base">Latest Insights</span>
              </Badge>
              <h1 className="text-white mb-6 xl:mb-8 text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                Financial Insights & Resources
              </h1>
              <p className="text-white/90 max-w-3xl mx-auto text-lg xl:text-xl">
                Stay informed with our latest articles on wealth management, investment strategies, and financial planning.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section background="white" className="py-12 sm:py-16 lg:py-20">
        <Container size="wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-xl transition-all group h-full cursor-pointer">
                  <div className="relative h-48 xl:h-56 bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1] overflow-hidden">
                    <ImageWithFallback
                      src={`https://picsum.photos/600/400?random=${index + 1}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 xl:top-5 left-4 xl:left-5">
                      <span className="px-3 xl:px-4 py-1 xl:py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#003448] border border-[#003448]/10 text-sm xl:text-base">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 xl:p-8">
                    <div className="flex items-center gap-4 text-[#003448]/60 mb-3 xl:mb-4 text-sm xl:text-base">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-[#003448] mb-3 xl:mb-4 group-hover:text-[#68c0ae] transition-colors text-lg xl:text-xl">
                      {post.title}
                    </h3>
                    <p className="text-[#003448]/70 mb-4 xl:mb-5 text-sm xl:text-base">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-[#68c0ae] group-hover:gap-3 transition-all text-sm xl:text-base">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}


