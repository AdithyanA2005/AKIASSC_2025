"use client";

import Link from "next/link";
import Image from "next/image";
import { ELandingSections } from "@/lib/enum";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="w-full mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo section - responsive ordering */}
        <div className="flex items-center order-1 md:order-1">
          {/* Main logo remains on left side for all views */}
          <Link href={`${ELandingSections.HOME}`}>
            <Image
              src="/logo.png"
              alt="AKIASSC Logo"
              width={80}
              height={75}
              priority
              className="w-[90px] mb-3 md:max-w-full"
            />
          </Link>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-6 order-2">
          <div className="flex items-center space-x-6">
            <Image
              src="/ieee-logo.png"
              alt="IEEE Logo"
              width={90}
              height={45}
              priority
              className="h-[40px] w-auto"
            />
            <Image
              src="/ukf-ieee.png"
              alt="UKF IEEE Logo"
              width={90}
              height={65}
              priority
              className="h-[60px] w-auto"
            />
            <Image
              src="/jt-chpter-logo.png"
              alt="JT Chapter Logo"
              width={150}
              height={45}
              priority
              className="h-[50px] w-auto"
            />
          </div>
        </div>

        {/* Mobile logos (compressed) */}
        <div className="flex md:hidden items-center space-x-2 order-2">
          <Image
            src="/ieee-logo.png"
            alt="IEEE Logo"
            width={70}
            height={35}
            priority
            className="h-[25px] w-auto"
          />
          <Image
            src="/ukf-ieee.png"
            alt="UKF IEEE Logo"
            width={70}
            height={35}
            priority
            className="h-[35px] w-auto"
          />
          <Image
            src="/jt-chpter-logo.png"
            alt="JT Chapter Logo"
            width={110}
            height={35}
            priority
            className="h-[25px] w-auto"
          />
        </div>

        {/* Menu button - now for both mobile and desktop */}
        <div className="order-3">
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-purple-900/40 border border-purple-500/30 hover:bg-purple-800/50 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? (
                <X className="text-purple-200 w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Menu className="text-purple-200 w-5 h-5 md:w-6 md:h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-20 border-b border-purple-500/20 backdrop-blur-md bg-[0e0420]/90 z-40 md:border md:border-purple-500/20 md:rounded-bl-2xl md:shadow-lg md:bg-[0e0420]/90"
            style={{
              right: 0,
              width: window?.innerWidth >= 768 ? "300px" : "100%",
            }}
            initial={{
              opacity: 0,
              x: window?.innerWidth >= 768 ? 300 : 0,
              height: window?.innerWidth >= 768 ? "auto" : 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              x: window?.innerWidth >= 768 ? 300 : 0,
              height: window?.innerWidth >= 768 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 px-8 flex flex-col space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={`${ELandingSections.HOME}`}
                  className="text-white hover:text-purple-300 block py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={`${ELandingSections.EVENTS}`}
                  className="text-white hover:text-purple-300 block py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href="/activities"
                  className="text-white hover:text-purple-300 block py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Activities
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={`${ELandingSections.COMMITTEE}`}
                  className="text-white hover:text-purple-300 block py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Committee
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href={`${ELandingSections.TICKET}`}
                  className="text-white hover:text-purple-300 block py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registration
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
