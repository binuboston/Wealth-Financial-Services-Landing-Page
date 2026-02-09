import { notFound } from 'next/navigation';
import { BlogDetail } from '@/components/features/BlogDetail';
import { Footer } from '@/components/layout/Footer';
import { getPostBySlug, getRelatedPosts } from '@/lib/api/wp';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = await getRelatedPosts(slug, post.category, 3);

  return (
    <div className="min-h-screen bg-background">
      <BlogDetail 
        post={post} 
        content={post.content}
        author={post.author}
        relatedPosts={relatedPosts}
      />
      <Footer />
    </div>
  );
}
