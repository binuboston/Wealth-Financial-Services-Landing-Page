/**
 * SEO Utilities
 * Helper functions for managing SEO metadata
 */

import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noIndex?: boolean;
}

const defaultMetadata = {
  siteName: 'Dhanovaa Financial Services',
  title: 'Dhanovaa Financial Services - Your Growth Architect',
  description: 'Trusted financial partner for wealth advisory, SIP investments, mutual funds, and financial planning across Kerala and India.',
  keywords: [
    'financial services',
    'wealth advisory',
    'SIP',
    'mutual funds',
    'financial planning',
    'Kerala',
    'India',
    'investment',
    'wealth management',
  ],
  image: '/og-image.jpg', // Add this image to /public folder
  url: 'https://dhanovaa.com', // Update with actual domain
};

/**
 * Generate SEO metadata for a page
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${defaultMetadata.siteName}`
    : defaultMetadata.title;
  
  const pageDescription = description || defaultMetadata.description;
  const pageKeywords = [...defaultMetadata.keywords, ...keywords];
  const pageImage = image || defaultMetadata.image;
  const pageUrl = url || defaultMetadata.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: pageUrl,
      siteName: defaultMetadata.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      // creator: '@dhanovaa', // Add your Twitter handle
    },
    
    // Robots
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    
    // Additional
    alternates: {
      canonical: pageUrl,
    },
  };
}

/**
 * Generate structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: defaultMetadata.siteName,
    description: defaultMetadata.description,
    url: defaultMetadata.url,
    logo: `${defaultMetadata.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Kerala',
      // Add complete address when available
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // telephone: '+91-XXX-XXX-XXXX', // Add phone number
      // email: 'contact@dhanovaa.com', // Add email
    },
    sameAs: [
      // Add social media URLs
      // 'https://facebook.com/dhanovaa',
      // 'https://instagram.com/dhanovaa',
      // 'https://linkedin.com/company/dhanovaa',
    ],
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
