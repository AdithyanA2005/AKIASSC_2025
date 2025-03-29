"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-24">
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
            <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden">
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-950/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-white/5 border border-white/10"></div>

              {/* Image */}
              <Image
                src="/college.png"
                alt="College Campus"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                Through informative sessions, workshops, and interactions,
                participants gain insights into technological innovations and
                explore potential career paths. AKIASSC aims to enhance
                students' technical and professional skills, equipping them with
                the knowledge and connections necessary to succeed in the
                dynamic field of industrial applications.
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
