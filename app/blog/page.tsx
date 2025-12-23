'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/figma/ImageWithFallback';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Footer } from '@/components/layout/Footer';
import { blogPosts } from '@/lib/config/blog.config';
import { Section } from '@/components/ui/section';

export default function BlogPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Section background="gradient" className="py-12 sm:py-16 lg:py-20">
        <Container size="wide">
          <SectionHeader
            badge="Latest Insights"
            badgeVariant="secondary"
            title="Financial Insights & Resources"
            description="Stay informed with our latest articles on wealth management, investment strategies, and financial planning."
          />
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
                <div className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-xl transition-all group h-full">
                  <div className="relative h-48 xl:h-56 bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1] overflow-hidden">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1600000000000 + index}?w=600&h=400&fit=crop`}
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
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}


