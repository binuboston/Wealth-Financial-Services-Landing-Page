import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { NavigationWrapper } from '@/components/layout/NavigationWrapper';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ['financial services', 'wealth advisory', 'SIP', 'mutual funds', 'financial planning', 'Kerala', 'India'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-white">
          <NavigationWrapper />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
