import { useState } from 'react';
import Image from "next/image";
import { useLazyLoad } from "@/lib/hooks/useLazyLoad";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, imgRef] = useLazyLoad<HTMLDivElement>({
    rootMargin: '100px',
    triggerOnce: true
  });

  return (
    <div 
      ref={imgRef} 
      className={`relative w-full h-full ${className}`}
    >
      {/* Show placeholder while loading or on error */}
      {(!isVisible || !isLoaded || hasError) && (
        <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-purple-400/30 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Only render the image when it's visible */}
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
    </div>
  );
}
