'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { BlogPost } from '@/lib/config/blog.config';
import { FALLBACK_POSTS } from '@/lib/api/wp';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

interface BlogProps {
  initialPosts?: BlogPost[];
}

// Always have something to show - use fallback when no posts
const DEFAULT_POSTS = FALLBACK_POSTS.slice(0, 3);

export function Blog({ initialPosts }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts?.length ? initialPosts : DEFAULT_POSTS);
  const [loading, setLoading] = useState(!initialPosts?.length);

  useEffect(() => {
    if (!initialPosts?.length) {
      // Fetch posts on client side if not provided
      fetch('/api/blog/posts')
        .then(res => res.json())
        .then((data: BlogPost[]) => {
          setPosts((data?.length ? data : DEFAULT_POSTS).slice(0, 3));
          setLoading(false);
        })
        .catch(() => {
          setPosts(DEFAULT_POSTS);
          setLoading(false);
        });
    }
  }, [initialPosts]);

  return (
    <Section id="blog" background="gradient">
      <Container size="wide">
        <SectionHeader
          badge="Latest Insights"
          badgeVariant="primary"
          title="Financial Insights & Resources"
          description="Stay informed with our latest articles on wealth management, investment strategies, and financial planning."
        />

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden animate-pulse">
                <div className="h-48 xl:h-56 bg-gray-200" />
                <div className="p-6 xl:p-8 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">No blog posts available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                      <p className="text-[#003448]/70 mb-4 xl:mb-5 text-sm xl:text-base line-clamp-3">{post.excerpt}</p>

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
        )}
      </Container>
    </Section>
  );
}