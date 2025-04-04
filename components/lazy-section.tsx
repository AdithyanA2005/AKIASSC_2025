import { ReactNode } from 'react';
import { useLazyLoad } from "@/lib/hooks/useLazyLoad";

interface LazySectionProps {
  id?: string;
  className?: string;
  placeholderHeight?: string;
  rootMargin?: string;
  children: ReactNode;
}

export function LazySection({ 
  id, 
  className = "", 
  placeholderHeight = "50vh",
  rootMargin = "200px 0px", 
  children 
}: LazySectionProps) {
  const [isVisible, sectionRef] = useLazyLoad<HTMLElement>({
    rootMargin,
    triggerOnce: true
  });
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={className}
    >
      {isVisible ? (
        children
      ) : (
        // Placeholder with spinner while section is not visible
        <div className="flex justify-center items-center" style={{ height: placeholderHeight }}>
          <div className="w-12 h-12 border-4 border-purple-400/30 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
}
