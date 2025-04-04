import { useState, useEffect, useRef, RefObject } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Custom hook for lazy loading elements when they enter the viewport
 * @param options Intersection observer options
 * @returns [isVisible, ref] - Whether element is visible and ref to attach to element
 */
export function useLazyLoad<T extends HTMLElement = HTMLDivElement>({
  rootMargin = '100px 0px',
  threshold = 0,
  triggerOnce = true
}: UseLazyLoadOptions = {}): [boolean, React.RefObject<T>] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null) as RefObject<T>;
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // If we only want to trigger once, unobserve after becoming visible
          if (triggerOnce && element) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // If not trigger once, toggle visibility
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [rootMargin, threshold, triggerOnce]);
  
  return [isVisible, elementRef];
}
