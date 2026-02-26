'use client';

import { motion } from 'motion/react';
import { Instagram as InstagramIcon, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ImageWithFallback } from '../shared/figma/ImageWithFallback';
import { siteConfig } from '@/lib/config';
import { SectionHeader } from '../ui/section-header';
import { Container } from '../ui/container';

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
    image: '/media/ig-1.jpg',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '2',
    image: '/media/ig-2.jpg',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '3',
    image: '/media/ig-3.jpg',
    permalink: siteConfig.social.instagram,
    likes: 0,
  },
  {
    id: '4',
    image: '/media/ig-4.jpg',
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
      <Container size="wide">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Stronger Futures"
          description="Ready to design your financial growth? Connect with us for personalized guidance and follow our journey on Instagram for daily insights."
        />

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
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
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
                className="mt-auto w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-[#003448]/10 text-[#003448] rounded-2xl hover:bg-gray-50 transition-all shadow-sm hover:shadow-md font-medium group"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="instagrad"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 12) rotate(45) scale(12)"
                    >
                      <stop offset="0" stopColor="#F58529" />
                      <stop offset="0.1" stopColor="#FEDA77" />
                      <stop offset="0.5" stopColor="#DD2A7B" />
                      <stop offset="1" stopColor="#8134AF" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.68.822.897 1.382.164.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.68-1.382.897-.422.164-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.475-1.382-.897-.422-.422-.68-.822-.897-1.382-.164-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.475-.96.897-1.382.422-.422.822-.68 1.382-.897.422-.164 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12c0 3.259.012 3.667.072 4.947.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24c3.259 0 3.667-.012 4.947-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.337 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.337-1.077-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="url(#instagrad)"
                  />
                </svg>
                <span>Follow on Instagram</span>
                <ChevronRight className="w-5 h-5 text-[#003448]/30 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Stats */}
              {/* <div className="mt-6 grid grid-cols-3 gap-4 text-center">
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
              </div> */}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}