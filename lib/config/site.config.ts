// Site-wide configuration
export const siteConfig = {
  name: 'Dhanovaa Financial Services',
  tagline: 'Your Growth Architect',
  description: 'Trusted financial partner for wealth advisory, SIP investments, mutual funds, and financial planning across Kerala and India. Building lasting financial growth for over three decades.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://dhanovaa.com',
  social: {
    linkedin: 'https://linkedin.com/company/dhanovaa',
    twitter: 'https://twitter.com/dhanovaa',
    facebook: 'https://facebook.com/dhanovaa',
    instagram: 'https://instagram.com/dhanovaa',
    email: 'info@dhanovaa.com',
  },
  contact: {
    email: 'info@dhanovaa.com',
    phone: '+91-XXXX-XXXXXX',
    address: 'Kerala, India',
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} Dhanovaa. All rights reserved.`,
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms-of-service',
    cookiePolicy: '/cookie-policy',
  },
} as const;

