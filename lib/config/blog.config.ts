// Blog configuration
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageQuery: string;
  slug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'How Smart Investors Build Long Term Wealth in a Changing Market',
    excerpt: 'Building long term wealth today is not about reacting to market trends or chasing quick returns. Successful investors focus on discipline, clarity, and consistency.',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Investing',
    imageQuery: 'long term wealth building',
    slug: 'how-smart-investors-build-long-term-wealth-changing-market',
  },
  {
    title: 'Why Financial Planning Is More Important Than Ever',
    excerpt: 'Financial planning is no longer optional. In today's fast-changing economic environment, structured financial planning is essential for achieving long-term financial goals.',
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    category: 'Financial Planning',
    imageQuery: 'financial planning',
    slug: 'why-financial-planning-more-important-than-ever',
  },
  {
    title: 'Investing in 2026: Rupee Movements, Global Markets, and How First-Time Investors Should Prepare',
    excerpt: 'Understanding currency movements, global trends, and risk dynamics to make informed investment decisions that support long-term financial growth.',
    date: 'Jan 5, 2026',
    readTime: '8 min read',
    category: 'Investing',
    imageQuery: 'investing 2026',
    slug: 'investing-2026-rupee-movements-global-markets-first-time-investors',
  },
] as const;
