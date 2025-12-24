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

// GET /api/instagram - Fetch latest Instagram posts
export async function GET(request: NextRequest) {
  try {
    // Instagram Graph API configuration
    // These should be set as environment variables
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
    
    // If credentials are not configured, return empty array with a message
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
      console.warn('Instagram API credentials not configured. Using fallback.');
      return NextResponse.json({
        posts: [],
        message: 'Instagram API credentials not configured. Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_BUSINESS_ACCOUNT_ID environment variables.',
      });
    }

    // Fetch posts from Instagram Graph API
    // Documentation: https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
    const url = `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,media_type,media_url,permalink,caption,timestamp,like_count,comments_count&limit=6&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Instagram API error:', errorData);
      return NextResponse.json(
        { 
          posts: [],
          error: 'Failed to fetch Instagram posts',
          details: errorData 
        },
        { status: response.status }
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

    return NextResponse.json({
      posts,
      success: true,
    });

  } catch (error) {
    console.error('Instagram API error:', error);
    return NextResponse.json(
      { 
        posts: [],
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

