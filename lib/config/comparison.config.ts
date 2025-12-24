// Comparison Chart Configuration
// This file contains all comparison data for investment products

export interface ComparisonProduct {
  id: string;
  name: string;
  icon: string; // SVG path or icon identifier
  color: string;
  bgColor: string;
  hoverColor: string;
}

export interface ComparisonFeature {
  id: string;
  label: string;
  values: Record<string, string>; // productId -> value
}

export interface ComparisonConfig {
  products: ComparisonProduct[];
  features: ComparisonFeature[];
  expertTip?: {
    icon?: string;
    text: string;
    highlight?: string;
  };
}

export const comparisonConfig: ComparisonConfig = {
  products: [
    {
      id: 'equities',
      name: 'Equities',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      color: 'text-white',
      bgColor: 'bg-[#0d3d4a]',
      hoverColor: '#1a3d47',
    },
    {
      id: 'mutualFunds',
      name: 'Mutual Funds',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'text-white',
      bgColor: 'bg-[#68c0ae]',
      hoverColor: '#1a3d47',
    },
    {
      id: 'pms',
      name: 'PMS',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-white',
      bgColor: 'bg-[#9ece6c]',
      hoverColor: '#1a3d47',
    },
    {
      id: 'aif',
      name: 'AIF',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      color: 'text-white',
      bgColor: 'bg-[#0d3d4a]',
      hoverColor: '#1a3d47',
    },
  ],
  features: [
    {
      id: 'riskLevel',
      label: 'Risk Level',
      values: {
        equities: 'Medium–High',
        mutualFunds: 'Medium',
        pms: 'High',
        aif: 'High',
      },
    },
    {
      id: 'investorType',
      label: 'Investor Type',
      values: {
        equities: 'Beginner–Advanced',
        mutualFunds: 'Beginner–Advanced',
        pms: 'HNI',
        aif: 'Accredited Investors',
      },
    },
    {
      id: 'minimumInvestment',
      label: 'Minimum Investment',
      values: {
        equities: 'No minimum',
        mutualFunds: '₹500–₹1000',
        pms: '₹50 Lakhs',
        aif: '₹1 Crore',
      },
    },
    {
      id: 'professionalManagement',
      label: 'Professional Management',
      values: {
        equities: 'Optional',
        mutualFunds: 'Yes',
        pms: 'Yes',
        aif: 'Yes',
      },
    },
    {
      id: 'customization',
      label: 'Customization',
      values: {
        equities: 'High',
        mutualFunds: 'Medium',
        pms: 'Very High',
        aif: 'High',
      },
    },
    {
      id: 'diversification',
      label: 'Diversification',
      values: {
        equities: 'Low–Medium',
        mutualFunds: 'High',
        pms: 'Medium',
        aif: 'Medium',
      },
    },
    {
      id: 'returnPotential',
      label: 'Return Potential',
      values: {
        equities: 'High',
        mutualFunds: 'Moderate–High',
        pms: 'High',
        aif: 'High',
      },
    },
    {
      id: 'regulatedBy',
      label: 'Regulated By',
      values: {
        equities: 'SEBI',
        mutualFunds: 'SEBI',
        pms: 'SEBI',
        aif: 'SEBI',
      },
    },
    {
      id: 'suitability',
      label: 'Suitability',
      values: {
        equities: 'Long-term growth',
        mutualFunds: 'Beginner & SIP investors',
        pms: 'Serious wealth builders',
        aif: 'Sophisticated investors',
      },
    },
  ],
  expertTip: {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    text: 'Our advisors help you choose the right investment vehicle based on your financial goals, risk appetite, and investment horizon.',
    highlight: 'Expert Tip:',
  },
};

