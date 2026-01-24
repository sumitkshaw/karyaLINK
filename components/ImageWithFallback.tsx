"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  fallbackComponent?: React.ReactNode;
  fallbackEmoji?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  fallbackComponent,
  fallbackEmoji,
  className = '',
  width,
  height,
  style,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // If using custom fallback component
  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  // If using emoji fallback
  if (hasError && fallbackEmoji) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-2xl">{fallbackEmoji}</span>
      </div>
    );
  }

  // Check if src is an emoji (starts with data: or is emoji)
  const isEmoji = src.length <= 3 && /\p{Emoji}/u.test(src);
  
  if (isEmoji) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-2xl">{src}</span>
      </div>
    );
  }

  // For SVG or icons, we need special handling
  const isSvg = imgSrc?.endsWith('.svg');
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={imgSrc}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        onError={handleError}
        className={`object-cover ${hasError ? 'opacity-30' : ''}`}
        style={{
          ...style,
          ...(isSvg && { width: 'auto', height: 'auto' }),
        }}
        {...props}
      />
      
      {hasError && !fallbackComponent && !fallbackEmoji && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400">
          <div className="w-12 h-12 mb-2 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-lg">📷</span>
          </div>
          <span className="text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;