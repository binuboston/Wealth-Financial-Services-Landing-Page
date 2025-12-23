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
    title: '5 Strategies to Maximize Your Retirement Savings',
    excerpt: 'Discover proven techniques to accelerate your retirement planning and secure your financial future.',
    date: 'Nov 20, 2025',
    readTime: '5 min read',
    category: 'Retirement',
    imageQuery: 'retirement planning',
    slug: '5-strategies-maximize-retirement-savings',
  },
  {
    title: 'Understanding Market Volatility in 2025',
    excerpt: 'Learn how to navigate uncertain markets and make informed investment decisions during economic changes.',
    date: 'Nov 15, 2025',
    readTime: '7 min read',
    category: 'Investing',
    imageQuery: 'stock market',
    slug: 'understanding-market-volatility-2025',
  },
  {
    title: 'Estate Planning Essentials for Young Families',
    excerpt: 'Essential estate planning steps every young family should take to protect their loved ones and assets.',
    date: 'Nov 10, 2025',
    readTime: '6 min read',
    category: 'Estate Planning',
    imageQuery: 'family planning',
    slug: 'estate-planning-essentials-young-families',
  },
  {
    title: 'Tax Optimization Strategies for High Net Worth Individuals',
    excerpt: 'Learn advanced tax planning techniques to minimize your tax burden while maximizing wealth growth.',
    date: 'Nov 5, 2025',
    readTime: '8 min read',
    category: 'Tax Planning',
    imageQuery: 'tax planning',
    slug: 'tax-optimization-strategies-hnwi',
  },
  {
    title: 'Building a Diversified Portfolio: A Step-by-Step Guide',
    excerpt: 'Comprehensive guide to creating a well-balanced investment portfolio that aligns with your risk profile.',
    date: 'Oct 30, 2025',
    readTime: '6 min read',
    category: 'Investing',
    imageQuery: 'portfolio diversification',
    slug: 'building-diversified-portfolio-guide',
  },
  {
    title: 'SIP vs Lump Sum: Which Investment Strategy is Right for You?',
    excerpt: 'Compare systematic investment plans with lump sum investments to determine the best approach for your goals.',
    date: 'Oct 25, 2025',
    readTime: '5 min read',
    category: 'Investing',
    imageQuery: 'sip investment',
    slug: 'sip-vs-lump-sum-investment-strategy',
  },
] as const;


