import { NextResponse } from 'next/server';
import { getPosts, FALLBACK_POSTS } from '@/lib/api/wp';

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts.length ? posts : FALLBACK_POSTS);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(FALLBACK_POSTS);
  }
}
