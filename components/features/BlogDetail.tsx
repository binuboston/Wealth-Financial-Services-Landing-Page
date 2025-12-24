'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, User } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { HeroNavigation } from '../layout/HeroNavigation';
import { BlogPost } from '@/lib/config/blog.config';
import Link from 'next/link';

interface BlogDetailProps {
  post: BlogPost;
  content: string;
  author?: {
    name: string;
    role?: string;
  };
  relatedPosts?: BlogPost[];
}

export function BlogDetail({ post, content, author, relatedPosts = [] }: BlogDetailProps) {
  const handleBack = () => {
    window.history.back();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
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
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={handleBack}
              className="mb-8 text-white hover:text-white/80 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            {/* Category Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                {post.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-lg">{post.readTime}</span>
              </div>
              {author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="text-lg">{author.name}</span>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-white hover:text-white/80 hover:bg-white/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Excerpt */}
            <p className="text-xl xl:text-2xl text-white/90 max-w-4xl leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" className="py-0 -mt-8">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] xl:h-[500px] rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1]"
          >
            {/* Placeholder for featured image - add local image here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-[#003448]/20 text-5xl font-bold">Featured Image</div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section background="white" className="py-12 sm:py-16 lg:py-20">
        <Container size="narrow">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg xl:prose-xl max-w-none
              prose-headings:text-[var(--foreground)] prose-headings:font-bold
              prose-p:text-[var(--foreground)]/80 prose-p:leading-relaxed
              prose-a:text-[var(--color-brand-primary)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[var(--foreground)] prose-strong:font-semibold
              prose-ul:text-[var(--foreground)]/80 prose-ol:text-[var(--foreground)]/80
              prose-li:marker:text-[var(--color-brand-primary)]
              prose-blockquote:border-l-[var(--color-brand-primary)] prose-blockquote:border-l-4
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[var(--foreground)]/70
              prose-hr:border-[var(--color-border)]"
          >
            <div 
              className="text-[var(--foreground)]/80 text-lg xl:text-xl leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </motion.article>

          {/* Author Section (if provided) */}
          {author && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 xl:mt-16 pt-8 xl:pt-12 border-t border-[var(--color-border)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl xl:text-2xl font-semibold text-[var(--foreground)] mb-1">
                    {author.name}
                  </h3>
                  {author.role && (
                    <p className="text-[var(--foreground)]/70 text-base xl:text-lg">
                      {author.role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </Container>
      </Section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <Section background="muted" withPattern patternColor="primary">
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 xl:mb-16"
            >
              <Badge variant="outline" className="mb-4">
                Related Articles
              </Badge>
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-4">
                Continue Reading
              </h2>
              <p className="text-lg xl:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
                Explore more insights and resources to enhance your financial knowledge.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug || relatedPost.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-xl transition-all group h-full cursor-pointer">
                      <div className="relative h-48 xl:h-56 bg-gradient-to-br from-[#f0f9f6] to-[#e8f5f1] overflow-hidden">
                        {/* Placeholder for blog image - add local image here */}
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-[#003448]/20 text-4xl font-bold">Image</div>
                        </div>
                        <div className="absolute top-4 xl:top-5 left-4 xl:left-5">
                          <span className="px-3 xl:px-4 py-1 xl:py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#003448] border border-[#003448]/10 text-sm xl:text-base">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 xl:p-8">
                        <div className="flex items-center gap-4 text-[#003448]/60 mb-3 xl:mb-4 text-sm xl:text-base">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{relatedPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-[#003448] mb-3 xl:mb-4 group-hover:text-[#68c0ae] transition-colors text-lg xl:text-xl">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[#003448]/70 mb-4 xl:mb-5 text-sm xl:text-base line-clamp-2">
                          {relatedPost.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-[#68c0ae] group-hover:gap-3 transition-all text-sm xl:text-base">
                          <span>Read More</span>
                          <ArrowLeft className="w-4 h-4 xl:w-5 xl:h-5 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section background="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        
        <Container size="default" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-lg xl:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get expert guidance and personalized strategies to achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
                className="group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}

