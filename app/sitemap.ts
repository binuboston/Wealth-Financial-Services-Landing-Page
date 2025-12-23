import { MetadataRoute } from 'next';

/**
 * Dynamic sitemap generation for SEO
 * This file automatically generates a sitemap.xml at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dhanovaa.com';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/service-details`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Add more URLs as needed
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'daily',
    //   priority: 0.9,
    // },
  ];
}
