"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export function AboutSection({ sectionId }: { sectionId: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "About AKIASSC",
      image: "/logo.png",
      content: "AKIASSC, the All Kerala Industry Applications Society Student Conclave, provides a platform connecting engineering students with industry experts. This initiative by IEEE IA/IE/PELS Joint Chapter Kerala bridges academic learning with practical applications, offering workshops and networking opportunities to enhance students' technical skills and career prospects."
    },
    {
      title: "About IEEE IA/IE/PELS Jt. Chapter Kerala",
      image: "/jt-chpter-logo.png",
      content: "The IEEE IA/IE/PELS Joint Chapter Kerala unites three IEEE societies focused on industrial applications, electronics, and power systems. It serves as a hub for professionals and students, promoting knowledge exchange through workshops and technical sessions. Members gain access to cutting-edge research and networking opportunities with industry leaders."
    },
    {
      title: "About UKFCET",
      image: "/college.jpg",
      content: "UKF College of Engineering and Technology excels in technical education with state-of-the-art facilities and experienced faculty. The college offers diverse engineering programs that blend theoretical knowledge with practical skills. UKFCET's focus on holistic development and innovation prepares graduates to address real-world challenges and advance in technological fields."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="container mx-auto px-4 py-24" id={sectionId}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 lg:block hidden">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 lg:block hidden">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
          
          {/* Mobile Navigation - Moved below for better spacing */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden absolute -bottom-16 left-0 right-0">
            <button 
              onClick={prevSlide} 
              className="p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 rounded-full bg-purple-900/50 hover:bg-purple-600 transition-colors border border-purple-400/30 shadow-lg"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Image Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 rounded-[3rem] blur-2xl"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-[300px] lg:h-[600px] rounded-[2rem] overflow-hidden">
                {/* Multiple Layer Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-950/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute inset-0 bg-white/5 border border-white/10"></div>

                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent opacity-50"></div>

                {/* Image with Enhanced Effects */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-contain p-4 transform hover:scale-105 transition-transform duration-700"
                    priority
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder.png";
                    }}
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-900/10 to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
            </motion.div>
          </AnimatePresence>

          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 flex flex-col h-full"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex-grow flex items-start h-[300px] lg:h-[600px] overflow-auto">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {slides[currentSlide].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slide Indicators - Added more bottom margin for mobile layout */}
        <div className="flex justify-center mt-8 lg:mt-8 mb-8 lg:mb-0 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-purple-400 w-6" : "bg-purple-700/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
