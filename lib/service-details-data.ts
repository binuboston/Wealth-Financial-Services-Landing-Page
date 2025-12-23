import {
  TrendingUp,
  Wallet,
  LineChart,
  Shield,
  Target,
  Users,
  BarChart3,
  CheckCircle2,
  Clock,
  FileText,
  TrendingDown,
  ArrowUpRight,
  Lock,
  Eye,
  Sparkles,
  Calendar,
  DollarSign,
  PieChart,
  Building2,
  Globe2,
} from 'lucide-react';
import { ServiceDetailData } from '@/components/services/ServiceDetail';

// Mutual Funds Service Detail
export const mutualFundsData: ServiceDetailData = {
  badge: 'Investment Services',
  title: 'Mutual Funds',
  subtitle: 'Build wealth systematically with diversified, professionally managed portfolios.',
  description:
    'Access a curated selection of mutual fund schemes across equity, debt, hybrid, and thematic categories. Designed to match your risk appetite and financial objectives.',
  heroIcon: Wallet,
  ctaText: 'Start Investing',

  features: [
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description:
        'Align your investments with life goals—education, retirement, home, or wealth creation.',
    },
    {
      icon: PieChart,
      title: 'Diversification',
      description:
        'Spread risk across asset classes, sectors, and geographies for stability and growth.',
    },
    {
      icon: Users,
      title: 'Expert Fund Selection',
      description:
        'Access handpicked funds backed by research, performance tracking, and due diligence.',
    },
    {
      icon: DollarSign,
      title: 'Low Entry Barrier',
      description:
        'Start with as little as ₹500 and build your portfolio with disciplined SIPs.',
    },
    {
      icon: Eye,
      title: 'Transparent Reporting',
      description:
        'Track your investments, returns, and portfolio health through our platform.',
    },
    {
      icon: Shield,
      title: 'Regulatory Safety',
      description:
        'Invest in SEBI-regulated schemes with complete transparency and compliance.',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Understand Your Goals',
      description:
        'We start by understanding your financial objectives, time horizon, and risk tolerance through a detailed consultation.',
    },
    {
      step: 2,
      title: 'Personalized Portfolio Design',
      description:
        'Our advisors create a customized mutual fund portfolio that aligns with your goals and market conditions.',
    },
    {
      step: 3,
      title: 'Seamless Onboarding',
      description:
        'Complete KYC, link your bank account, and start investing—all through our streamlined digital process.',
    },
    {
      step: 4,
      title: 'Ongoing Monitoring & Rebalancing',
      description:
        'We continuously monitor your portfolio performance and recommend rebalancing to keep you on track.',
    },
  ],

  benefits: [
    {
      icon: CheckCircle2,
      title: 'Professional Management',
      description:
        'Your money is managed by experienced fund managers with proven track records.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Growth',
      description:
        'Benefit from the power of compounding with consistent, long-term investments.',
    },
    {
      icon: Lock,
      title: 'Liquidity',
      description:
        'Redeem your investments partially or fully whenever needed (subject to exit loads).',
    },
    {
      icon: FileText,
      title: 'Tax Efficiency',
      description:
        'Choose ELSS funds for tax savings under Section 80C or optimize capital gains taxes.',
    },
    {
      icon: Calendar,
      title: 'SIP Flexibility',
      description:
        'Pause, modify, or stop your SIPs anytime based on changing financial needs.',
    },
    {
      icon: Sparkles,
      title: 'Zero Commission Bias',
      description:
        'We recommend funds based solely on performance, not commission structures.',
    },
  ],

  pricingTiers: [
    {
      name: 'Starter',
      description: 'Perfect for beginners looking to start their investment journey.',
      minInvestment: '₹500/month',
      features: [
        'Access to equity, debt, and hybrid funds',
        'SIP and lump sum investment options',
        'Basic portfolio tracking',
        'Email support',
        'Quarterly portfolio reviews',
      ],
    },
    {
      name: 'Growth',
      description: 'For investors building a diversified portfolio with discipline.',
      minInvestment: '₹5,000/month',
      recommended: true,
      features: [
        'All Starter features',
        'Priority fund recommendations',
        'Advanced portfolio analytics',
        'Dedicated relationship manager',
        'Monthly portfolio reviews',
        'Tax optimization guidance',
      ],
    },
    {
      name: 'Wealth',
      description: 'Comprehensive wealth management for serious investors.',
      minInvestment: '₹25,000/month',
      features: [
        'All Growth features',
        'Access to exclusive funds',
        'Personalized asset allocation',
        '24/7 priority support',
        'Bi-weekly portfolio reviews',
        'Estate and tax planning support',
        'Family portfolio consolidation',
      ],
    },
  ],

  relatedServices: [
    {
      icon: TrendingUp,
      title: 'Equities',
      description: 'Direct equity investments for higher growth potential.',
      link: '#equities',
    },
    {
      icon: LineChart,
      title: 'PMS',
      description: 'Personalized portfolio management for high net worth individuals.',
      link: '#pms',
    },
    {
      icon: Building2,
      title: 'AIF',
      description: 'Alternative investment funds for sophisticated investors.',
      link: '#aif',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Comprehensive protection for your wealth and family.',
      link: '#insurance',
    },
  ],

  faqs: [
    {
      question: 'What is the minimum amount required to start investing in mutual funds?',
      answer:
        'You can start investing with as little as ₹500 per month through SIP (Systematic Investment Plan) or make a lump sum investment starting from ₹5,000.',
    },
    {
      question: 'How are mutual funds taxed?',
      answer:
        'Equity mutual funds held for more than 1 year attract long-term capital gains tax of 10% on gains above ₹1 lakh. Debt funds are taxed as per your income tax slab. ELSS funds offer tax deductions under Section 80C.',
    },
    {
      question: 'Can I withdraw my money anytime?',
      answer:
        'Yes, most mutual funds (except ELSS with 3-year lock-in) allow redemption anytime. However, exit loads may apply if withdrawn before a specified period.',
    },
    {
      question: 'How do you select mutual funds?',
      answer:
        'We use a rigorous selection process based on fund performance, consistency, fund manager track record, expense ratios, and alignment with your investment goals.',
    },
    {
      question: 'What is the difference between SIP and lump sum?',
      answer:
        'SIP involves investing a fixed amount regularly (monthly/quarterly), which averages out market volatility. Lump sum is a one-time investment, suitable when you have surplus funds or during market corrections.',
    },
    {
      question: 'Are mutual funds safe?',
      answer:
        'Mutual funds are regulated by SEBI and managed by professional fund managers. While they carry market risk, diversification and professional management reduce overall risk significantly.',
    },
    {
      question: 'How often should I review my mutual fund portfolio?',
      answer:
        'We recommend quarterly reviews to track performance and annual rebalancing to maintain optimal asset allocation based on changing goals and market conditions.',
    },
    {
      question: 'What happens if the fund house shuts down?',
      answer:
        'Your investments are held separately by a custodian and are not part of the AMC\'s assets. Even if a fund house shuts down, your investments remain safe and will be transferred to another AMC.',
    },
  ],
};

// Equities Service Detail
export const equitiesData: ServiceDetailData = {
  badge: 'Direct Investment',
  title: 'Equity Investments',
  subtitle: 'Own a piece of India\'s growth story with strategic stock investments.',
  description:
    'Direct equity investing for long-term wealth creation. Access carefully researched stocks with disciplined entry and exit strategies designed for sustainable growth.',
  heroIcon: TrendingUp,
  ctaText: 'Explore Opportunities',

  features: [
    {
      icon: Target,
      title: 'Research-Backed Picks',
      description:
        'Access stocks selected through fundamental and technical analysis by our research team.',
    },
    {
      icon: BarChart3,
      title: 'Portfolio Construction',
      description:
        'Build a diversified equity portfolio balanced across sectors, market caps, and themes.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description:
        'Defined stop-loss strategies and position sizing to protect your capital.',
    },
    {
      icon: Clock,
      title: 'Long-Term Focus',
      description:
        'Investment philosophy centered on wealth compounding over market cycles.',
    },
    {
      icon: Eye,
      title: 'Real-Time Tracking',
      description:
        'Monitor your holdings, P&L, and portfolio performance through our platform.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description:
        'Benefit from ongoing advisory support and market insights from our equity specialists.',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Investment Profiling',
      description:
        'Assess your risk appetite, investment horizon, and return expectations to create a personalized strategy.',
    },
    {
      step: 2,
      title: 'Stock Selection & Research',
      description:
        'Our analysts identify high-conviction opportunities based on thorough fundamental research and valuation analysis.',
    },
    {
      step: 3,
      title: 'Portfolio Building',
      description:
        'Execute trades through your demat account and build a diversified portfolio with proper allocation.',
    },
    {
      step: 4,
      title: 'Active Monitoring',
      description:
        'Regular portfolio reviews, earnings updates, and timely recommendations for entry/exit points.',
    },
  ],

  benefits: [
    {
      icon: ArrowUpRight,
      title: 'High Growth Potential',
      description:
        'Equities historically outperform other asset classes over long periods.',
    },
    {
      icon: DollarSign,
      title: 'Dividend Income',
      description:
        'Earn regular dividend income from quality stocks while benefiting from capital appreciation.',
    },
    {
      icon: PieChart,
      title: 'Ownership & Voting Rights',
      description:
        'Become a part-owner in companies and participate in their growth story.',
    },
    {
      icon: FileText,
      title: 'Tax Benefits',
      description:
        'Long-term capital gains up to ₹1 lakh per year are tax-free. Dividends are taxed as per your slab.',
    },
    {
      icon: Lock,
      title: 'Liquidity',
      description:
        'Listed stocks can be sold anytime during market hours for instant liquidity.',
    },
    {
      icon: Sparkles,
      title: 'Inflation Hedge',
      description:
        'Equity investments typically grow faster than inflation, preserving purchasing power.',
    },
  ],

  pricingTiers: [
    {
      name: 'Self-Directed',
      description: 'For experienced investors who want research support.',
      minInvestment: '₹50,000',
      features: [
        'Monthly stock recommendations',
        'Research reports & market updates',
        'Email and chat support',
        'Access to webinars',
        'Basic portfolio tracking',
      ],
    },
    {
      name: 'Guided Investment',
      description: 'For investors seeking ongoing advisory support.',
      minInvestment: '₹2,00,000',
      recommended: true,
      features: [
        'All Self-Directed features',
        'Personalized portfolio design',
        'Quarterly portfolio reviews',
        'Entry & exit alerts',
        'Dedicated advisor access',
        'Risk management guidance',
      ],
    },
    {
      name: 'Managed Portfolio',
      description: 'Full-service equity portfolio management.',
      minInvestment: '₹10,00,000',
      features: [
        'All Guided Investment features',
        'Custom model portfolio',
        'Monthly performance reviews',
        'Priority trade execution support',
        '24/7 advisor access',
        'Tax harvesting strategies',
        'Exclusive research insights',
      ],
    },
  ],

  relatedServices: [
    {
      icon: Wallet,
      title: 'Mutual Funds',
      description: 'Diversified portfolios with professional management.',
      link: '#mutual-funds',
    },
    {
      icon: BarChart3,
      title: 'Derivatives',
      description: 'Hedge your positions with options and futures strategies.',
      link: '#derivatives',
    },
    {
      icon: LineChart,
      title: 'PMS',
      description: 'Personalized portfolio management services.',
      link: '#pms',
    },
    {
      icon: Globe2,
      title: 'GIFT City Funds',
      description: 'Global equity exposure through IFSC structures.',
      link: '#gift-city',
    },
  ],

  faqs: [
    {
      question: 'What is the minimum investment required for equities?',
      answer:
        'You can start with as little as the price of one share. However, we recommend a minimum portfolio size of ₹50,000 to ₹1,00,000 for proper diversification across 8-12 stocks.',
    },
    {
      question: 'How are equity investments taxed?',
      answer:
        'Short-term capital gains (held less than 1 year) are taxed at 15%. Long-term capital gains above ₹1 lakh per year are taxed at 10%. Dividends are taxed as per your income tax slab.',
    },
    {
      question: 'What is the ideal investment horizon for equities?',
      answer:
        'We recommend a minimum investment horizon of 5-7 years for equities to ride out market volatility and benefit from long-term compounding.',
    },
    {
      question: 'How do you select stocks?',
      answer:
        'Our research team uses a combination of fundamental analysis (earnings, valuations, management quality) and technical analysis (trends, momentum) to identify high-conviction opportunities.',
    },
    {
      question: 'What happens during market crashes?',
      answer:
        'Market corrections are natural. We use stop-loss strategies to limit downside and view corrections as opportunities to add quality stocks at attractive valuations.',
    },
    {
      question: 'Do I need a demat account?',
      answer:
        'Yes, a demat and trading account is mandatory for equity investing. We can help you open one if you don\'t have it already.',
    },
    {
      question: 'Can I invest in both large-cap and small-cap stocks?',
      answer:
        'Yes, we recommend a balanced mix based on your risk profile. Typically, 60-70% in large/mid-caps for stability and 30-40% in small-caps for growth.',
    },
  ],
};

// PMS Service Detail
export const pmsData: ServiceDetailData = {
  badge: 'Premium Service',
  title: 'Portfolio Management Services (PMS)',
  subtitle: 'Bespoke wealth management with personalized portfolio strategies.',
  description:
    'Discretionary and non-discretionary portfolio management for high net worth individuals seeking customized investment solutions with active management and direct stock ownership.',
  heroIcon: LineChart,
  ctaText: 'Book Consultation',

  features: [
    {
      icon: Users,
      title: 'Dedicated Portfolio Manager',
      description:
        'A SEBI-registered professional manager dedicated to your wealth objectives.',
    },
    {
      icon: Target,
      title: 'Customized Strategy',
      description:
        'Investment approach tailored to your goals, risk profile, and tax considerations.',
    },
    {
      icon: Eye,
      title: 'Direct Stock Ownership',
      description:
        'Stocks held in your demat account—complete transparency and control.',
    },
    {
      icon: BarChart3,
      title: 'Active Management',
      description:
        'Continuous monitoring, rebalancing, and tactical adjustments based on market conditions.',
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description:
        'Comprehensive performance reports, tax statements, and portfolio analytics.',
    },
    {
      icon: Lock,
      title: 'Risk Controls',
      description:
        'Defined risk parameters, stop-losses, and hedging strategies to protect capital.',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Wealth Assessment',
      description:
        'Comprehensive evaluation of your financial situation, goals, and investment philosophy.',
    },
    {
      step: 2,
      title: 'Strategy Design',
      description:
        'Create a bespoke investment strategy with asset allocation, sector preferences, and risk limits.',
    },
    {
      step: 3,
      title: 'Agreement & Onboarding',
      description:
        'Sign PMS agreement, complete regulatory documentation, and fund your portfolio.',
    },
    {
      step: 4,
      title: 'Execution & Monitoring',
      description:
        'Portfolio manager actively manages your investments with regular reviews and adjustments.',
    },
  ],

  benefits: [
    {
      icon: Sparkles,
      title: 'Professional Expertise',
      description:
        'Access to experienced portfolio managers with proven track records.',
    },
    {
      icon: Target,
      title: 'Goal Alignment',
      description:
        'Every investment decision is aligned with your specific financial objectives.',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description:
        'SEBI-regulated service with strict compliance and reporting standards.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Focus',
      description:
        'Manager compensation often linked to performance, aligning interests.',
    },
    {
      icon: FileText,
      title: 'Tax Efficiency',
      description:
        'Tax-loss harvesting, capital gains optimization, and dividend planning.',
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description:
        'Let professionals manage your portfolio while you focus on your priorities.',
    },
  ],

  pricingTiers: [
    {
      name: 'Discretionary PMS',
      description: 'Full authority to portfolio manager for investment decisions.',
      minInvestment: '₹50 Lakhs',
      recommended: true,
      features: [
        'Complete portfolio management',
        'Active rebalancing & adjustments',
        'Quarterly performance reviews',
        'Detailed monthly reports',
        'Tax optimization strategies',
        'Dedicated relationship manager',
        'Management fee: 2-2.5% p.a.',
        'Performance fee: 10-20% above hurdle',
      ],
    },
    {
      name: 'Non-Discretionary PMS',
      description: 'Advisory model where you approve each recommendation.',
      minInvestment: '₹50 Lakhs',
      features: [
        'Investment recommendations',
        'You retain final decision authority',
        'Portfolio monitoring & alerts',
        'Quarterly strategy sessions',
        'Monthly performance reports',
        'Dedicated advisor access',
        'Management fee: 1.5-2% p.a.',
        'No performance fees',
      ],
    },
  ],

  relatedServices: [
    {
      icon: TrendingUp,
      title: 'Equities',
      description: 'Direct equity investments for growth.',
      link: '#equities',
    },
    {
      icon: Building2,
      title: 'AIF',
      description: 'Alternative investment funds for diversification.',
      link: '#aif',
    },
    {
      icon: Wallet,
      title: 'Mutual Funds',
      description: 'Diversified managed portfolios.',
      link: '#mutual-funds',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Wealth protection solutions.',
      link: '#insurance',
    },
  ],

  faqs: [
    {
      question: 'What is the minimum investment for PMS?',
      answer:
        'As per SEBI regulations, the minimum investment for PMS is ₹50 lakhs. This can be invested as a lump sum or transferred from existing holdings.',
    },
    {
      question: 'What is the difference between discretionary and non-discretionary PMS?',
      answer:
        'In discretionary PMS, the portfolio manager has full authority to make investment decisions. In non-discretionary PMS, the manager provides recommendations, but you approve each transaction.',
    },
    {
      question: 'How is PMS different from mutual funds?',
      answer:
        'PMS offers customized portfolios with direct stock ownership in your name, while mutual funds pool money from multiple investors. PMS provides greater personalization and transparency.',
    },
    {
      question: 'What are the fees for PMS?',
      answer:
        'Typically, management fees range from 1.5-2.5% per annum. Performance fees of 10-20% above a hurdle rate (usually 8-10%) may also apply in discretionary PMS.',
    },
    {
      question: 'Can I withdraw my investment anytime?',
      answer:
        'Yes, you can redeem your PMS investment anytime. However, some PMS schemes may have a lock-in period or exit load if withdrawn before a specified period.',
    },
    {
      question: 'How is PMS taxed?',
      answer:
        'Since stocks are held in your name, taxation is same as direct equity—STCG at 15%, LTCG at 10% above ₹1 lakh. PMS offers flexibility for tax-loss harvesting.',
    },
    {
      question: 'Who should invest in PMS?',
      answer:
        'PMS is ideal for high net worth individuals with ₹50 lakhs+ who want personalized portfolio management, direct stock ownership, and are comfortable with equity market risks.',
    },
  ],
};

// Insurance Service Detail  
export const insuranceData: ServiceDetailData = {
  badge: 'Protection',
  title: 'Insurance Planning',
  subtitle: 'Protect what matters most with comprehensive insurance solutions.',
  description:
    'Life, health, and wealth protection strategies designed to safeguard your family\'s future and preserve your legacy through scientifically calculated coverage.',
  heroIcon: Shield,
  ctaText: 'Get Protected',

  features: [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description:
        'Life, health, critical illness, and personal accident insurance under one roof.',
    },
    {
      icon: Target,
      title: 'Need-Based Planning',
      description:
        'Coverage calculated based on your income, liabilities, goals, and dependents.',
    },
    {
      icon: Users,
      title: 'Family Protection',
      description:
        'Ensure financial security for your spouse, children, and parents.',
    },
    {
      icon: FileText,
      title: 'Claims Assistance',
      description:
        'End-to-end support for policy servicing, renewals, and claim settlements.',
    },
    {
      icon: DollarSign,
      title: 'Tax Benefits',
      description:
        'Premiums eligible for deductions under Section 80C, 80D, and 10(10D).',
    },
    {
      icon: Eye,
      title: 'Unbiased Advice',
      description:
        'Product recommendations based on your needs, not commissions.',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Risk Assessment',
      description:
        'Evaluate your current coverage, financial obligations, and protection gaps.',
    },
    {
      step: 2,
      title: 'Coverage Design',
      description:
        'Calculate optimal coverage using income replacement, human life value, or goal-based methods.',
    },
    {
      step: 3,
      title: 'Policy Selection',
      description:
        'Compare plans from top insurers and select the best fit for your needs and budget.',
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description:
        'Assist with policy renewals, beneficiary updates, and claims when needed.',
    },
  ],

  benefits: [
    {
      icon: Shield,
      title: 'Financial Security',
      description:
        'Ensure your family\'s lifestyle and goals are protected even in your absence.',
    },
    {
      icon: CheckCircle2,
      title: 'Debt Protection',
      description:
        'Cover outstanding loans so your family doesn\'t inherit liabilities.',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Preservation',
      description:
        'Prevent liquidation of investments during emergencies or health crises.',
    },
    {
      icon: FileText,
      title: 'Tax Efficiency',
      description:
        'Save taxes while building a safety net for your loved ones.',
    },
    {
      icon: Clock,
      title: 'Peace of Mind',
      description:
        'Sleep better knowing your family is financially protected.',
    },
    {
      icon: Sparkles,
      title: 'Legacy Planning',
      description:
        'Structured payouts ensure smooth wealth transfer to beneficiaries.',
    },
  ],

  pricingTiers: [
    {
      name: 'Essential Protection',
      description: 'Basic coverage for individuals and young families.',
      minInvestment: '₹5,000-10,000/year',
      features: [
        'Term life insurance (10-20x annual income)',
        'Basic health insurance (₹5-10 lakhs)',
        'Personal accident cover',
        'Annual policy reviews',
        'Online policy management',
      ],
    },
    {
      name: 'Comprehensive Shield',
      description: 'Complete family protection with enhanced coverage.',
      minInvestment: '₹25,000-50,000/year',
      recommended: true,
      features: [
        'All Essential Protection features',
        'Higher term cover (20-30x income)',
        'Family floater health (₹25-50 lakhs)',
        'Critical illness rider',
        'Top-up health insurance',
        'Dedicated claims support',
        'Quarterly coverage reviews',
      ],
    },
    {
      name: 'Legacy Protection',
      description: 'Premium coverage for high net worth families.',
      minInvestment: '₹1,00,000+/year',
      features: [
        'All Comprehensive Shield features',
        'High-value term insurance (₹5+ crores)',
        'Super top-up health coverage',
        'International health coverage',
        'Estate duty planning',
        'Concierge medical services',
        'Priority claims processing',
        'Annual financial health check',
      ],
    },
  ],

  relatedServices: [
    {
      icon: Wallet,
      title: 'Mutual Funds',
      description: 'Build wealth to support your protection goals.',
      link: '#mutual-funds',
    },
    {
      icon: TrendingUp,
      title: 'Equities',
      description: 'Grow your wealth for long-term security.',
      link: '#equities',
    },
    {
      icon: LineChart,
      title: 'PMS',
      description: 'Preserve and grow your protected wealth.',
      link: '#pms',
    },
    {
      icon: Building2,
      title: 'AIF',
      description: 'Alternative investments for wealth diversification.',
      link: '#aif',
    },
  ],

  faqs: [
    {
      question: 'How much life insurance do I need?',
      answer:
        'A general rule is 10-20 times your annual income, or enough to cover all liabilities plus 5-10 years of family expenses. We calculate this scientifically based on your situation.',
    },
    {
      question: 'What is the difference between term and endowment insurance?',
      answer:
        'Term insurance provides pure protection at low cost. Endowment plans combine insurance with savings but have lower returns and higher premiums. We typically recommend term insurance for protection.',
    },
    {
      question: 'Should I buy insurance online or through an advisor?',
      answer:
        'Online policies may seem cheaper, but an advisor helps with correct need assessment, product comparison, and most importantly—claims support when it matters.',
    },
    {
      question: 'What health insurance coverage is adequate?',
      answer:
        'Minimum ₹10-15 lakhs for metro cities, ₹5-10 lakhs for tier 2/3 cities. Consider family medical history, age, and inflation in healthcare costs.',
    },
    {
      question: 'Can I have multiple life insurance policies?',
      answer:
        'Yes, you can have multiple policies from different insurers. Claims are settled independently by each insurer based on sum assured.',
    },
    {
      question: 'Are insurance premiums tax-deductible?',
      answer:
        'Yes. Life insurance premiums qualify for Section 80C (up to ₹1.5 lakhs) and health insurance premiums under Section 80D (up to ₹25,000-₹50,000).',
    },
    {
      question: 'What happens if I miss a premium payment?',
      answer:
        'Most policies offer a grace period of 15-30 days. If payment is not made, the policy may lapse. However, it can usually be revived within 2-5 years with back premiums and interest.',
    },
    {
      question: 'When should I buy insurance?',
      answer:
        'The best time is now. Premiums are lowest when you\'re young and healthy. Delaying means higher premiums and potential health complications that affect insurability.',
    },
  ],
};
