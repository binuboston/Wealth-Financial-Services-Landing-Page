// WordPress API configuration
const API_URL = "https://wp.dhanovaa.com/wp-json/wp/v2";

// Transformed blog post interface for our app
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featuredImage?: string;
  author?: {
    name: string;
    role?: string;
  };
}

// Fallback mock data - exported so components can use it directly when API fails
export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How Smart Investors Build Long Term Wealth in a Changing Market',
    excerpt: 'Building long term wealth today is not about reacting to market trends or chasing quick returns. Successful investors focus on discipline, clarity, and consistency.',
    content: `
      <h2>Introduction</h2>
      <p>Building long term wealth today is not about reacting to market trends or chasing quick returns. Successful investors focus on discipline, clarity, and consistency.</p>
      <p>In an evolving financial environment, wealth is created by making informed decisions, staying invested, and following a structured plan. Over time, this approach helps investors manage risk and grow their capital steadily.</p>
      
      <h2>Understanding Long Term Wealth Creation</h2>
      <p>Long term wealth creation is the process of growing money steadily through thoughtful investing and patience. It involves staying invested across market cycles and avoiding impulsive decisions.</p>
      <p>Some of the key elements of long term wealth creation include:</p>
      <ul>
        <li>Setting clear financial goals</li>
        <li>Maintaining a balanced investment portfolio</li>
        <li>Managing risk carefully</li>
        <li>Allowing compounding to work over time</li>
      </ul>
      <p>While markets may fluctuate, investors who stay disciplined are better positioned to build sustainable financial growth.</p>
      
      <h2>The Importance of Strategy in Wealth Building</h2>
      <p>A strong investment strategy plays a critical role in achieving long term financial success. It helps investors stay focused and avoid emotional reactions during market ups and downs.</p>
      <p>An effective strategy typically includes:</p>
      <ul>
        <li>Asset allocation based on risk tolerance</li>
        <li>Regular portfolio review</li>
        <li>Diversification across asset classes</li>
        <li>A long term investment mindset</li>
      </ul>
      <p>Rather than trying to time the market, smart investors focus on staying invested for the long run.</p>
      
      <h2>Why Experience Matters in Financial Planning</h2>
      <p>Market cycles repeat, but investor behaviour often changes with emotions. Experience helps in understanding how markets behave during different phases and how portfolios should be aligned accordingly.</p>
      <p>Professionals with long term market exposure bring clarity during volatility and stability during uncertain times. Their understanding of market movements, risk management, and planning helps investors stay on track toward their financial goals.</p>
      
      <h2>A Disciplined Approach to Long Term Growth</h2>
      <p>Wealth creation is not about quick gains. It is built through consistency, patience, and informed decision making.</p>
      <p>A structured financial approach ensures that investments remain aligned with long term objectives, regardless of short term market movements. Discipline and regular review play a key role in achieving sustainable financial growth.</p>
      <p>At Dhanovaa, the focus remains on helping investors build long term financial stability through insight, planning, and a measured investment approach.</p>
      
      <h2>Closing Thought</h2>
      <p>True wealth is not built overnight. It is created through careful planning, steady growth, and informed decisions over time. With the right strategy and long term perspective, financial goals become more achievable and sustainable.</p>
      <p><strong>Dhanovaa – Your Wealth Architect</strong></p>
    `,
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Investing',
    slug: 'how-smart-investors-build-long-term-wealth-changing-market',
    author: {
      name: 'Dhanovaa Team',
      role: 'Wealth Management Experts',
    },
  },
  {
    id: 2,
    title: 'Why Financial Planning Is More Important Than Ever',
    excerpt: 'Financial planning is no longer optional. In today\'s fast-changing economic environment, structured financial planning is essential for achieving long-term financial goals.',
    content: `
      <h2>Introduction</h2>
      <p>Financial planning is no longer optional. In today's fast-changing economic environment, rising expenses, evolving lifestyles, and long-term responsibilities make structured financial planning essential.</p>
      <p>A clear financial plan provides direction, stability, and confidence. It helps individuals make informed decisions, prepare for uncertainties, and work steadily toward long-term financial goals.</p>
      
      <h2>What Is Financial Planning?</h2>
      <p>Financial planning is the process of managing income, expenses, investments, and future goals in a structured way. It helps individuals understand their financial position and make informed decisions based on their needs and priorities.</p>
      <p>A well-designed financial plan takes into account:</p>
      <ul>
        <li>Income and savings patterns</li>
        <li>Investment preferences</li>
        <li>Risk tolerance</li>
        <li>Life goals and timelines</li>
        <li>Changing market conditions</li>
      </ul>
      <p>When these elements are aligned properly, financial planning reduces uncertainty and improves long-term financial confidence.</p>
      
      <h2>The Importance of Long-Term Planning</h2>
      <p>Short-term financial decisions often have long-term consequences. Without a clear plan, it becomes easy to make emotional or reactive choices, especially during market fluctuations.</p>
      <p>Long-term financial planning encourages:</p>
      <ul>
        <li>Disciplined investing</li>
        <li>Realistic goal setting</li>
        <li>Better money management</li>
        <li>Consistent progress toward financial goals</li>
      </ul>
      <p>It also helps individuals stay prepared for market volatility and unexpected life events.</p>
      
      <h2>The Value of Experience and Discipline</h2>
      <p>Markets evolve continuously, and no two phases are the same. Experience plays a key role in understanding how different economic cycles impact investments.</p>
      <p>Disciplined planning helps ensure that financial decisions remain aligned with long-term objectives, even during periods of uncertainty. Investors who follow a structured approach are better equipped to manage risk and stay focused on their goals.</p>
      
      <h2>A Structured Approach to Financial Growth</h2>
      <p>At Dhanovaa, financial planning is approached with clarity, structure, and foresight. The focus is on creating sustainable financial growth rather than short-term outcomes. By combining thoughtful planning, disciplined execution, and long-term perspective, investors can build financial stability that stands strong across market cycles.</p>
      
      <h2>Final Thoughts</h2>
      <p>Financial success is built through informed decisions, consistent effort, and long-term vision. With the right planning approach, it becomes easier to navigate uncertainty and work steadily toward lasting financial security.</p>
      <p><strong>Dhanovaa — Your Wealth Architect</strong></p>
    `,
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    category: 'Financial Planning',
    slug: 'why-financial-planning-more-important-than-ever',
    author: {
      name: 'Dhanovaa Team',
      role: 'Financial Planning Specialists',
    },
  },
  {
    id: 3,
    title: 'Investing in 2026: Rupee Movements, Global Markets, and How First-Time Investors Should Prepare',
    excerpt: 'Understanding currency movements, global trends, and risk dynamics to make informed investment decisions that support long-term financial growth.',
    content: `
      <h2>Introduction</h2>
      <p>The financial environment entering 2026 looks very different from what investors were used to a decade ago. Currency movements, global economic shifts, and changing interest rate cycles are reshaping how investments are planned and executed.</p>
      <p>One of the most discussed topics today is the weakening of the rupee, rising global uncertainty, and how these factors influence investment decisions. For both new and experienced investors, understanding this landscape is critical before allocating capital.</p>
      
      <h2>The Rupee and Its Impact on Investments</h2>
      <p>The value of the Indian rupee plays a significant role in shaping market behaviour. A weakening rupee affects imports, inflation, and global investment flows, while also influencing asset prices across sectors.</p>
      <p>For investors, this has two key implications:</p>
      <ul>
        <li>Imported inflation impacts purchasing power</li>
        <li>Global assets and export-oriented companies often gain relative strength</li>
      </ul>
      <p>Rather than viewing rupee movement as a risk alone, informed investors see it as an indicator that helps shape asset allocation decisions.</p>
      
      <h2>Global Market Forces Shaping Investment Decisions</h2>
      <p>Global markets are more interconnected than ever. Interest rate changes in developed economies, geopolitical developments, and commodity price movements now have a direct impact on domestic markets.</p>
      <p>Some trends influencing investment behaviour include:</p>
      <ul>
        <li>Tighter global liquidity cycles</li>
        <li>Increased volatility across equity markets</li>
        <li>Greater focus on defensive and diversified assets</li>
        <li>Shift toward long-term, risk-managed investing</li>
      </ul>
      <p>This environment makes it important for investors to move away from speculation and toward structured investment planning.</p>
      
      <h2>Why Gold Is Gaining Attention Again</h2>
      <p>Gold has traditionally been seen as a hedge during periods of uncertainty. With currency fluctuations and global instability, gold continues to attract investor interest as a store of value.</p>
      <p>In 2026, gold is being considered not as a short-term trade but as a portfolio stabiliser. Many investors use it to balance equity exposure and protect purchasing power during volatile phases. That said, gold works best as a part of a diversified portfolio rather than a standalone investment.</p>
      
      <h2>How First-Time Investors Should Approach 2026</h2>
      <p>For new investors, the current market environment may seem overwhelming. However, the key is not to time the market, but to enter it with a plan.</p>
      <p>First-time investors should focus on:</p>
      <ul>
        <li>Starting early, even with small amounts</li>
        <li>Understanding their risk tolerance</li>
        <li>Investing regularly rather than in lump sums</li>
        <li>Avoiding emotional decisions</li>
        <li>Building a long-term mindset</li>
      </ul>
      <p>Consistency matters more than market timing, especially in the early stages of investing.</p>
      
      <h2>Understanding Risk and Reward</h2>
      <p>Every investment carries a level of risk. The goal is not to avoid risk entirely, but to manage it wisely.</p>
      <p>Higher returns generally come with higher volatility, while stable investments offer lower but more predictable outcomes. The right balance depends on factors such as age, income, financial goals, and investment horizon. A diversified portfolio helps reduce risk while allowing capital to grow steadily over time.</p>
      
      <h2>Funds and Investment Options to Consider</h2>
      <p>In the current environment, investors are exploring a mix of investment options based on their goals and risk appetite:</p>
      <ul>
        <li><strong>Equity Mutual Funds:</strong> Suitable for long-term wealth creation. Best for investors with a higher risk tolerance and longer investment horizon.</li>
        <li><strong>Hybrid Funds:</strong> Offer a balance between equity and debt. Ideal for moderate risk profiles.</li>
        <li><strong>Debt Funds:</strong> Provide stability and predictable returns. Suitable for conservative investors or short-term goals.</li>
        <li><strong>Gold-Based Investments:</strong> Often used as a hedge against inflation and currency depreciation.</li>
        <li><strong>Structured and Managed Portfolios:</strong> For investors looking for professional management and strategic asset allocation.</li>
      </ul>
      <p>Choosing the right mix depends on personal goals, risk capacity, and time horizon.</p>
      
      <h2>Final Thoughts</h2>
      <p>Investing in 2026 is less about chasing returns and more about building resilience. Market conditions will continue to evolve, but a well-structured investment approach can help navigate uncertainty with confidence.</p>
      <p>By understanding currency movements, global trends, and risk dynamics, investors can make informed decisions that support long-term financial growth.</p>
      <p>At Dhanovaa, the focus remains on helping investors think strategically, invest responsibly, and build wealth with clarity and discipline.</p>
      <p><strong>Dhanovaa — Your Wealth Architect</strong></p>
    `,
    date: 'Jan 5, 2026',
    readTime: '8 min read',
    category: 'Investing',
    slug: 'investing-2026-rupee-movements-global-markets-first-time-investors',
    author: {
      name: 'Dhanovaa Team',
      role: 'Investment Advisory Team',
    },
  },
];

// WordPress Post types based on REST API response
export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: {
        rendered: string;
      };
      author: number;
      caption: {
        rendered: string;
      };
      alt_text: string;
      media_type: string;
      mime_type: string;
      source_url: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: Record<string, {
          file: string;
          width: number;
          height: number;
          mime_type: string;
          source_url: string;
        }>;
      };
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      link: string;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

// Helper function to calculate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Transform WordPress post to our BlogPost format
function transformPost(post: WPPost): BlogPost {
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || 'Uncategorized';
  
  // Extract featured image - WordPress REST API with _embed includes featured media
  let featuredImage: string | undefined;
  const featuredMedia = post._embedded?.["wp:featuredmedia"];
  if (featuredMedia && featuredMedia.length > 0 && featuredMedia[0]?.source_url) {
    featuredImage = featuredMedia[0].source_url;
  }
  
  const author = post._embedded?.author?.[0];

  return {
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    content: post.content.rendered,
    date: formatDate(post.date),
    readTime: calculateReadTime(post.content.rendered),
    category,
    slug: post.slug,
    featuredImage,
    author: author ? {
      name: author.name,
    } : undefined,
  };
}

/**
 * Fetch all blog posts from WordPress
 * Falls back to mock data if WordPress API is unavailable
 */
export async function getPosts(): Promise<BlogPost[]> {
  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const res = await fetch(`${API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    
    const posts: WPPost[] = await res.json();
    
    // If WordPress returns empty array, use fallback
    if (!posts || posts.length === 0) {
      console.warn('WordPress API returned no posts, using fallback data');
      return FALLBACK_POSTS;
    }
    
    return posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching WordPress posts, using fallback data:', error);
    // Return fallback data instead of empty array
    return FALLBACK_POSTS;
  } finally {
    // Cleanup timeout if still pending
  }
}

/**
 * Fetch a single blog post by slug
 * Falls back to mock data if WordPress API is unavailable
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }
    
    const data: WPPost[] = await res.json();
    
    if (!data || data.length === 0) {
      // Try to find in fallback data
      const fallbackPost = FALLBACK_POSTS.find(p => p.slug === slug);
      if (fallbackPost) {
        console.warn(`WordPress post not found, using fallback data for slug: ${slug}`);
        return fallbackPost;
      }
      return null;
    }
    
    return transformPost(data[0]);
  } catch (error) {
    console.error(`Error fetching WordPress post with slug "${slug}", trying fallback:`, error);
    // Try to find in fallback data
    const fallbackPost = FALLBACK_POSTS.find(p => p.slug === slug);
    if (fallbackPost) {
      return fallbackPost;
    }
    return null;
  }
}

/**
 * Get related posts (same category, excluding current post)
 */
export async function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const allPosts = await getPosts();
    const related = allPosts
      .filter(post => post.slug !== currentSlug && post.category === category)
      .slice(0, limit);
    
    // If not enough posts in same category, fill with other posts
    if (related.length < limit) {
      const additional = allPosts
        .filter(post => post.slug !== currentSlug && !related.some(r => r.slug === post.slug))
        .slice(0, limit - related.length);
      related.push(...additional);
    }
    
    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}
