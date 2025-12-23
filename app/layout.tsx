import type { Metadata } from 'next';
import '../styles/globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Dhanovaa Financial Services - Your Growth Architect',
  description: 'Trusted financial partner for wealth advisory, SIP investments, mutual funds, and financial planning across Kerala and India. Building lasting financial growth for over three decades.',
  keywords: ['financial services', 'wealth advisory', 'SIP', 'mutual funds', 'financial planning', 'Kerala', 'India'],
  authors: [{ name: 'Dhanovaa Financial Services' }],
  openGraph: {
    title: 'Dhanovaa Financial Services - Your Growth Architect',
    description: 'Trusted financial partner for wealth advisory and financial planning',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanovaa Financial Services',
    description: 'Your Growth Architect - Building lasting financial growth',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
