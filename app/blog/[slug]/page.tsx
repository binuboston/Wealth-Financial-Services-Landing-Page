'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlogDetail } from '@/components/features/BlogDetail';
import { Footer } from '@/components/layout/Footer';
import { blogPosts, BlogPost } from '@/lib/config/blog.config';
import { blogContent, blogAuthors } from '@/lib/config/blog-content';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<{ name: string; role: string } | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        setContent(blogContent[slug] || '<p>Content coming soon...</p>');
        setAuthor(blogAuthors[slug]);
      } else {
        setPost(null);
      }
    }
  }, [slug]);

  if (!slug || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16 sm:pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested blog post could not be found.</p>
          <Button onClick={() => router.push('/blog')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  // If not enough posts in same category, add other posts
  if (relatedPosts.length < 3) {
    const additionalPosts = blogPosts
      .filter(p => p.slug !== slug && !relatedPosts.some(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <BlogDetail 
            post={post} 
            content={content}
            author={author}
            relatedPosts={relatedPosts}
          />
        </motion.div>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

