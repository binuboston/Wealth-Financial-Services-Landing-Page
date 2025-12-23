'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../shared/figma/ImageWithFallback';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';

const blogPosts = [
  {
    title: '5 Strategies to Maximize Your Retirement Savings',
    excerpt: 'Discover proven techniques to accelerate your retirement planning and secure your financial future.',
    date: 'Nov 20, 2025',
    readTime: '5 min read',
    category: 'Retirement',
    imageQuery: 'retirement planning',
  },
  {
    title: 'Understanding Market Volatility in 2025',
    excerpt: 'Learn how to navigate uncertain markets and make informed investment decisions during economic changes.',
    date: 'Nov 15, 2025',
    readTime: '7 min read',
    category: 'Investing',
    imageQuery: 'stock market',
  },
  {
    title: 'Estate Planning Essentials for Young Families',
    excerpt: 'Essential estate planning steps every young family should take to protect their loved ones and assets.',
    date: 'Nov 10, 2025',
    readTime: '6 min read',
    category: 'Estate Planning',
    imageQuery: 'family planning',
  },
];

export function Blog() {
  return (
    <Section id="blog" background="gradient">
      <Container size="wide">
        <SectionHeader
          badge="Latest Insights"
          badgeVariant="secondary"
          title="Financial Insights & Resources"
          description="Stay informed with our latest articles on wealth management, investment strategies, and financial planning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
  );
}