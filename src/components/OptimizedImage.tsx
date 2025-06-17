
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallback?: string;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  fallback = '/images/placeholder.webp',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Optimize Unsplash images with proper dimensions and format
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      const params = new URLSearchParams();
      
      // Use smaller, optimized dimensions
      if (width && height) {
        params.set('w', Math.min(width, 800).toString());
        params.set('h', Math.min(height, 600).toString());
      } else {
        params.set('w', '800');
        params.set('h', '600');
      }
      params.set('fit', 'crop');
      params.set('fm', 'webp');
      params.set('q', '75'); // Reduced quality for better performance
      params.set('auto', 'format');
      
      return `${baseUrl}?${params.toString()}`;
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setImageError(true);
  };

  // Don't render if there's an error and no fallback
  if (imageError && !fallback) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 image-placeholder flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-legal border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imageError ? fallback : getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;
