'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram as InstagramIcon, Heart, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email':
        if (value && !/\S+@\S+\.\S+/.test(value)) {
          return 'Invalid email address';
        }
        break;
      case 'phone':
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          return 'Invalid phone number';
        }
        break;
    }
    return '';
  };

  const handleChange = (name: string, value: string) => {
    setFormState({ ...formState, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  // Fetch Instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setIsLoadingPosts(true);
        const response = await fetch('/api/instagram');
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
        console.error('Error fetching Instagram posts:', error);
        // Use fallback posts on error
        setInstagramPosts(fallbackPosts);
      } finally {
        setIsLoadingPosts(false);
      }
    };

    fetchInstagramPosts();
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
          {/* Contact Form - Enhanced & Interactive */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--color-brand-primary-light)]/30 border border-[#003448]/10 rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-[#003448] mb-2">Send us a message</h3>
                <p className="text-[#003448]/70">We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <motion.div
                  animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <Input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="John Doe"
                      className={`transition-all ${focusedField === 'name' ? 'ring-2 ring-[#68c0ae]' : ''}`}
                    />
                    <AnimatePresence>
                      {formState.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="john@example.com"
                      className={`transition-all ${
                        focusedField === 'email' ? 'ring-2 ring-[#68c0ae]' : ''
                      } ${errors.email ? 'border-red-500' : ''}`}
                    />
                    <AnimatePresence>
                      {formState.email && !errors.email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+1 (555) 123-4567"
                      className={`transition-all ${
                        focusedField === 'phone' ? 'ring-2 ring-[#68c0ae]' : ''
                      } ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    <AnimatePresence>
                      {formState.phone && !errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Input */}
                <motion.div
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#f0f9f6] border border-[#003448]/20 rounded-xl focus:outline-none focus:border-transparent transition-all resize-none ${
                      focusedField === 'message' ? 'ring-2 ring-[#68c0ae]' : ''
                    }`}
                    placeholder="Tell us about your financial goals..."
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-[#003448]/60">
                      {formState.message.length}/500
                    </span>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full relative overflow-hidden"
                  disabled={isSubmitted}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-[#003448]/10 flex flex-row gap-2 sm:gap-4">
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#003448] rounded-lg flex items-center justify-center shadow-lg">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Call Us</span>
                </motion.a>

                <motion.a
                  href="mailto:info@dhanovaa.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#68c0ae] rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Email</span>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#9ece6c] rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Visit</span>
                </motion.div>
              </div>
            </div>
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