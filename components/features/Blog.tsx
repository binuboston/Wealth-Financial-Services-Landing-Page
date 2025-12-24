'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { blogPosts } from '@/lib/config/blog.config';
import Link from 'next/link';

// Show only first 3 posts on homepage
const homepagePosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <Section id="blog" background="gradient">
      <Container size="wide">
        <SectionHeader
          badge="Blog"
          badgeVariant="primary"
          title="Financial Insights & Resources"
          description="Stay informed with our latest articles on wealth management, investment strategies, and financial planning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {homepagePosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-xl transition-all group h-full cursor-pointer">
                <div className="relative h-48 xl:h-56 bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1] overflow-hidden">
                  {/* Placeholder for blog image - add local image here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-[#003448]/20 text-4xl font-bold">Image</div>
                  </div>
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
  );
}