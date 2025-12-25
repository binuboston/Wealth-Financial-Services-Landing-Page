'use client';

import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ImageWithFallback } from '../shared/figma/ImageWithFallback';
import { siteConfig } from '@/lib/config';

interface InstagramPost {
  id: string;
  image: string;
  permalink: string;
  likes: number;
}

// Fallback posts if API is not configured
const fallbackPosts: InstagramPost[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
];

export function ContactInstagram() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  // Fetch Instagram posts with AbortController for cleanup
  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchInstagramPosts = async () => {
      try {
        setIsLoadingPosts(true);
        const response = await fetch('/api/instagram', {
          signal: abortController.signal,
          next: { revalidate: 3600 }, // Cache for 1 hour
        });
        
        if (abortController.signal.aborted) return;
        
        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          // Transform API posts to component format
          const transformedPosts: InstagramPost[] = data.posts.slice(0, 4).map((post: any) => ({
            id: post.id,
            image: post.media_url,
            permalink: post.permalink,
            likes: post.like_count || 0,
          }));
          setInstagramPosts(transformedPosts);
        } else {
          // Use fallback posts if API is not configured or returns no posts
          setInstagramPosts(fallbackPosts);
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return; // Request was aborted, ignore
        }
        // Use fallback posts on error
        setInstagramPosts(fallbackPosts);
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoadingPosts(false);
        }
      }
    };

    fetchInstagramPosts();
    
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Organic Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute top-0 left-0 w-[600px] h-[600px]" viewBox="0 0 600 600">
          <path d="M0,0 Q200,100 300,200 T600,400 L600,0 Z" fill="#9ece6c" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#68c0ae]/20 border border-[#68c0ae]/30 rounded-full mb-6">
            <span className="text-[#003448]">Get in Touch</span>
          </div>
          <h2 className="text-[#003448] mb-6">
            Let&apos;s Build Stronger Futures
          </h2>
          <p className="text-[#003448]/70 max-w-2xl mx-auto">
            Ready to design your financial growth? Connect with us for personalized guidance and follow our journey on Instagram for daily insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Instagram Feed - Minimized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--color-brand-secondary)]/30 border border-[#003448]/10 rounded-3xl p-8 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003448] to-[#68c0ae] rounded-2xl flex items-center justify-center shadow-lg">
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#003448]">Follow Us</h3>
                    <p className="text-[#003448]/70">@dhanovaafinserv</p>
                  </div>
                </div>
              </div>

              {/* Compact Instagram Grid */}
              {isLoadingPosts ? (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {instagramPosts.map((post, index) => (
                    <motion.a
                      key={post.id}
                      href={post.permalink || siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <ImageWithFallback
                        src={post.image}
                        alt={`Instagram post ${post.id}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <div className="flex items-center gap-2 text-white">
                          <Heart className="w-4 h-4 fill-white" />
                          <span className="text-sm">{post.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}

              {/* Follow Button */}
              <motion.a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003448] text-white rounded-2xl hover:bg-[#004d6b] transition-all shadow-lg"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </motion.a>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-[#003448]">15K+</div>
                  <div className="text-[#003448]/70 text-sm">Followers</div>
                </div>
                <div>
                  <div className="text-[#003448]">1.2K</div>
                  <div className="text-[#003448]/70 text-sm">Posts</div>
                </div>
                <div>
                  <div className="text-[#003448]">98%</div>
                  <div className="text-[#003448]/70 text-sm">Engagement</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}