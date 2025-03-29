"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection({ sectionId }: { sectionId: string }) {
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
            About AKIASSC
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <div className="relative w-full h-full">
                <Image
                  src="/college.jpg"
                  alt="College Campus"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
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

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                AKIASSC, the All Kerala Industry Applications Society Student
                Conclave, is an initiative by the IEEE IA/IE/PELS Joint Chapter
                Kerala designed to provide a valuable platform for engineering
                students. This conclave acts as a bridge between academic
                learning and practical industrial applications, fostering a
                space for students to network with industry experts and senior
                IEEE members.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-purple-400 text-2xl mb-2">🎓</div>
                <h3 className="text-white font-semibold mb-1">
                  Learning Platform
                </h3>
                <p className="text-gray-400 text-sm">
                  Bridge between academia and industry
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-purple-400 text-2xl mb-2">🤝</div>
                <h3 className="text-white font-semibold mb-1">Networking</h3>
                <p className="text-gray-400 text-sm">
                  Connect with industry experts
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-purple-400 text-2xl mb-2">💡</div>
                <h3 className="text-white font-semibold mb-1">Innovation</h3>
                <p className="text-gray-400 text-sm">
                  Explore latest technologies
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-purple-400 text-2xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-1">Career Growth</h3>
                <p className="text-gray-400 text-sm">
                  Develop professional skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
