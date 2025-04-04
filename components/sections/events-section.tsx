"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyImage } from "@/components/lazy-image";
import { LazySection } from "@/components/lazy-section";

const events = [
  {
    id: "industry-visit",
    title: "Industrial Visit",
    description: "An Industrial Visit to a leading tech company.",
    image: "/iv.jpeg"
  },
  {
    id: "hackathon",
    title: "24-Hour Hackathon",
    description: "Collaborative coding marathon to solve real-world problems.",
    image: "/hackathon.avif"
  },
  {
    id: "workshop",
    title: "Industry Workshop",
    description: "Hands-on sessions led by industry professionals.",
    image: "/workshop.jpeg"
  },
  {
    id: "panel-discussion",
    title: "Expert Panel Discussion",
    description: "Industry leaders share insights on technology trends.",
    image: "/panel-discussion.jpg"
  },
  {
    id: "trip",
    title: "Field trip",
    description: "Field trip to a popular nature attraction.",
    image: "/trip.jpeg"
  },
];

export default function EventsSection({sectionId}: {sectionId: string}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<{[key: string]: boolean}>({});
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  // Debounced wheel event handler for better performance
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isHovering || !scrollContainerRef.current) return;
    
    e.preventDefault();
    
    // Clear existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    // Debounce the scroll operation
    wheelTimeoutRef.current = setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    }, 5);
  }, [isHovering]);
  
  // Set up and clean up wheel event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollContainer && isHovering) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
      // Clean up any pending timeout on unmount
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [isHovering, handleWheel]);
  
  return (
    <LazySection
      id={sectionId}
      className="min-h-screen py-24 relative overflow-hidden will-change-transform"
      rootMargin="200px 0px"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0836] to-[#0e0420]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Exciting Events
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our lineup of transformative events designed to inspire, educate, and connect.
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
        
        {/* Events Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
          
          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 px-4 snap-x snap-mandatory scrollbar-hide will-change-scroll"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              transform: 'translateZ(0)'  // Hardware acceleration hint
            }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="snap-center"
                onViewportEnter={() => setVisibleEvents(prev => ({ ...prev, [event.id]: true }))}
              >
                <Link href="/coming-soon">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="relative flex-shrink-0 w-[280px] h-[380px] rounded-xl overflow-hidden cursor-pointer will-change-transform"
                  >
                    {/* Glassmorphic Card Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-purple-950/30 backdrop-blur-sm z-10 border border-white/10"></div>
                    
                    {/* Card Content */}
                    <div className="absolute inset-0 z-20 p-4 flex flex-col">
                      {/* Image Banner - Using LazyImage component */}
                      <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                        <LazyImage 
                          src={event.image}
                          alt={event.title}
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 flex-grow">{event.description}</p>
                      
                      {/* Button */}
                      <div className="bg-purple-900/50 hover:bg-purple-800/70 transition-colors mt-4 py-2 px-4 rounded-lg text-center border border-purple-400/30">
                        <span className="text-sm text-gray-200">Learn more</span>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg z-30"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg z-30"></div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-400">
          <p>Hover and scroll to explore all events</p>
        </div>
      </div>
    </LazySection>
  );
}