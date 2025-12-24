import { NextRequest, NextResponse } from 'next/server';

// Instagram post interface
export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

// In-memory cache (for production, consider using Redis or similar)
const cache = new Map<string, { data: InstagramPost[]; timestamp: number }>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

// GET /api/instagram - Fetch latest Instagram posts
export async function GET(request: NextRequest) {
  try {
    const cacheKey = 'instagram-posts';
    const cached = cache.get(cacheKey);
    
    // Return cached data if still valid
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return NextResponse.json(
        {
          posts: cached.data,
          success: true,
          cached: true,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // Instagram Graph API configuration
    // These should be set as environment variables
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
    
    // If credentials are not configured, return empty array with a message
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
      return NextResponse.json(
        {
          posts: [],
          message: 'Instagram API credentials not configured. Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_BUSINESS_ACCOUNT_ID environment variables.',
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        }
      );
    }

    // Fetch posts from Instagram Graph API with timeout
    // Documentation: https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
    const url = `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,media_type,media_url,permalink,caption,timestamp,like_count,comments_count&limit=6&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        next: { revalidate: 3600 }, // Revalidate every hour
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { 
            posts: [],
            error: 'Failed to fetch Instagram posts',
            details: errorData 
          },
          { 
            status: response.status,
            headers: {
              'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
          }
        );
      }

      const data = await response.json();
      
      // Transform Instagram API response to our format
      const posts: InstagramPost[] = (data.data || []).map((post: any) => ({
        id: post.id,
        media_url: post.media_url,
        permalink: post.permalink,
        caption: post.caption || '',
        timestamp: post.timestamp,
        like_count: post.like_count || 0,
        comments_count: post.comments_count || 0,
      }));

      // Update cache
      cache.set(cacheKey, { data: posts, timestamp: Date.now() });

      return NextResponse.json(
        {
          posts,
          success: true,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      // If fetch fails but we have cached data, return it
      if (cached) {
        return NextResponse.json(
          {
            posts: cached.data,
            success: true,
            cached: true,
            warning: 'Using cached data due to API error',
          },
          {
            headers: {
              'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            },
          }
        );
      }
      
      throw fetchError;
    }

  } catch (error) {
    // Return cached data if available, even if expired
    const cacheKey = 'instagram-posts';
    const cached = cache.get(cacheKey);
    
    if (cached) {
      return NextResponse.json(
        {
          posts: cached.data,
          success: true,
          cached: true,
          warning: 'Using stale cached data due to error',
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
          },
        }
      );
    }

    return NextResponse.json(
      { 
        posts: [],
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  }
}

// Export route config for better performance
// Note: Edge runtime doesn't support Map, so we use nodejs runtime
export const runtime = 'nodejs';
export const revalidate = 3600; // Revalidate every hour
export const maxDuration = 10; // 10 seconds max

