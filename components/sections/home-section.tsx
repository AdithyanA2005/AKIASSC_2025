"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HomeSection({ sectionId }: { sectionId: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      id={sectionId}
    >
      {/* Particle Background */}
      <div className="fixed inset-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-500/40 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: 0.5,
              opacity: 0.3,
            }}
            animate={{
              x: [
                Math.random() * 100 + "vw",
                Math.random() * 100 + "vw",
                Math.random() * 100 + "vw",
              ],
              y: [
                Math.random() * 100 + "vh",
                Math.random() * 100 + "vh",
                Math.random() * 100 + "vh",
              ],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <div className="max-w-5xl mx-auto flex-1 flex flex-col justify-center -mt-20">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 relative"
          >
            {/* Main logo */}
            <div className="relative z-10 w-[350px] h-[350px] mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-950/20 rounded-[3rem] blur-2xl"></div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={450}
                height={450}
                className="w-[120%] h-[120%] object-contain relative z-10 -translate-y-8"
              />
            </div>
          </motion.div>

          <div className="text-4xl md:text-6xl font-light mb-6 -mt-24 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block"
            >
              We are
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-bold block md:inline md:ml-4"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 12px rgba(149,76,233,0.5)",
                    "0 0 16px rgba(149,76,233,0.8)",
                    "0 0 12px rgba(149,76,233,0.5)",
                  ],
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-purple-400"
              >
                Live
              </motion.span>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 12px rgba(149,76,233,0.5)",
                    "0 0 16px rgba(149,76,233,0.8)",
                    "0 0 12px rgba(149,76,233,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="text-purple-300 ml-4"
              >
                Now
              </motion.span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto text-center"
          >
            Join us in shaping the future of technology and innovation
          </motion.p>

          {/* Circle with down arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-full h-[200px] absolute -top-[100px] bg-gradient-radial from-purple-500/30 to-transparent rounded-[100%] blur-md"></div>
            <button className="relative z-10 w-16 h-16 mx-auto bg-purple-900/50 rounded-full flex items-center justify-center border border-purple-500/30 shadow-[0_0_20px_rgba(149,76,233,0.5)] hover:bg-purple-900/70 transition-colors">
              <ChevronDown className="text-white w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
