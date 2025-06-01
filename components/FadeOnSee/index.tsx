import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';

interface FadeOnSeeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeOnSee({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "" 
}: FadeOnSeeProps) {
  const [isVisible, ref] = useLazyLoad<HTMLDivElement>({
    rootMargin: '50px',
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
