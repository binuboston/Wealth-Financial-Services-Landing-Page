'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends React.ComponentPropsWithoutRef<typeof Image> {
  fallbackSrc?: string;
}

export const ImageWithFallback = React.memo(function ImageWithFallback({
  src,
  alt = '',
  className = '',
  style,
  fallbackSrc = ERROR_IMG_SRC,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = useCallback(() => {
    if (!didError) {
      setDidError(true);
      setImgSrc(fallbackSrc);
    }
  }, [didError, fallbackSrc]);

  // Reset error state when src changes
  React.useEffect(() => {
    if (src !== imgSrc) {
      setDidError(false);
      setImgSrc(src);
    }
  }, [src, imgSrc]);

  // If it's a data URL, use regular img
  const isDataUrl = typeof imgSrc === 'string' && imgSrc.startsWith('data:');

  // Try to use Next.js Image for optimization, fallback to regular img if needed
  if (isDataUrl || didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src={imgSrc as string} 
            alt={didError ? 'Error loading image' : alt} 
            className={className}
            style={style}
            onError={handleError}
            loading="lazy"
            {...rest}
          />
        </div>
      </div>
    );
  }

  // Check if this is an external URL (http/https)
  const isExternalUrl = typeof imgSrc === 'string' && (imgSrc.startsWith('http://') || imgSrc.startsWith('https://'));
  
  // For ALL external URLs, use regular img tag to avoid width/height requirements
  // Next.js Image requires width/height for external images even with unoptimized
  if (isExternalUrl) {
    return (
      <img 
        src={imgSrc as string} 
        alt={alt} 
        className={className}
        style={style}
        onError={handleError}
        loading="lazy"
        {...rest}
      />
    );
  }
  
  // Use Next.js Image only for local images (starting with / or relative paths)
  // These don't require width/height when using fill or when dimensions are provided
  try {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        className={className}
        style={style}
        onError={handleError}
        loading="lazy"
        quality={85}
        {...rest}
      />
    );
  } catch (error) {
    // Fallback to regular img if Image component fails
    return (
      <img 
        src={imgSrc as string} 
        alt={alt} 
        className={className}
        style={style}
        onError={handleError}
        loading="lazy"
        {...rest}
      />
    );
  }
});
