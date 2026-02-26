'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Footer } from '@/components/layout/Footer';
import { HeroNavigation } from '@/components/layout/HeroNavigation';
import { Section } from '@/components/ui/section';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/config/blog.config';

// Client-side image component with error handling for WordPress images
function BlogImage({ src, alt }: { src?: string; alt: string }) {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1]">
        <div className="text-[#003448]/20 text-4xl font-bold">Image</div>
      </div>
    );
  }

  // Use regular img tag for external WordPress images for better compatibility
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  // Use Next.js Image for local images
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setImgError(true)}
    />
  );
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts')
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        setBlogPosts(Array.isArray(data) && data.length > 0 ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setBlogPosts([]);
        setLoading(false);
      });
  }, []);

  // Fallback posts when API returns empty or fails
  const posts =
    blogPosts.length > 0
      ? blogPosts
      : [
        {
          id: 1,
          title: 'How Smart Investors Build Long Term Wealth in a Changing Market',
          excerpt:
            'Building long term wealth today is not about reacting to market trends or chasing quick returns. Successful investors focus on discipline, clarity, and consistency.',
          date: 'Jan 15, 2026',
          readTime: '6 min read',
          category: 'Investing',
          slug: 'how-smart-investors-build-long-term-wealth-changing-market',
        },
        {
          id: 2,
          title: 'Why Financial Planning Is More Important Than Ever',
          excerpt:
            "Financial planning is no longer optional. In today's fast-changing economic environment, structured financial planning is essential for achieving long-term financial goals.",
          date: 'Jan 10, 2026',
          readTime: '5 min read',
          category: 'Financial Planning',
          slug: 'why-financial-planning-more-important-than-ever',
        },
        {
          id: 3,
          title: 'Investing in 2026: Rupee Movements, Global Markets, and How First-Time Investors Should Prepare',
          excerpt:
            'Understanding currency movements, global trends, and risk dynamics to make informed investment decisions that support long-term financial growth.',
          date: 'Jan 5, 2026',
          readTime: '8 min read',
          category: 'Investing',
          slug: 'investing-2026-rupee-movements-global-markets-first-time-investors',
        },
      ] as BlogPost[];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section background="gradient" className="relative overflow-hidden pt-32 pb-20 xl:pt-40 xl:pb-32">
        <div className="absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
          <HeroNavigation isVisible={true} />
        </div>
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
            <SectionHeader
              badge="Latest Insights"
              title="Financial Insights & Resources"
              description="Stay informed with our latest articles on wealth management, investment strategies, and financial planning."
              className="[&_h2]:text-white [&_p]:text-white/90 [&_span]:text-white [&_.bg-\[#68c0ae\]\/20]:bg-white/10 [&_.border-\[#68c0ae\]\/30]:border-white/20"
            />
          </motion.div>
        </Container>
      </Section>

      <Section background="white" className="py-12 sm:py-16 lg:py-20">
        <Container size="wide">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-[#003448]/10 animate-pulse">
                  <div className="h-48 xl:h-56 bg-gray-200" />
                  <div className="p-6 xl:p-8 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-xl transition-all group h-full cursor-pointer">
                      <div className="relative h-48 xl:h-56 overflow-hidden">
                        <BlogImage src={post.featuredImage} alt={post.title} />
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
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
