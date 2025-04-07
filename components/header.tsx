"use client"

import Link from "next/link";
import Image from "next/image";
import { ELandingSections } from "@/lib/enum";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="w-full mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <Image src="/logo.png" alt="Logo" width={110} height={75} priority className="max-w-[90px] md:max-w-full" />
          </span>
        </div>

        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href={`#${ELandingSections.HOME}`}
            className="text-white hover:text-purple-300"
          >
            Home
          </Link>
          <Link
            href={`#${ELandingSections.ABOUT}`}
            className="text-white hover:text-purple-300"
          >
            About
          </Link>
          <Link
           href={`#${ELandingSections.EVENTS}`}
           className="text-white hover:text-purple-300"
          >
            Events
          </Link>
          <Link
            href={`#${ELandingSections.TICKET}`}
            className="text-white hover:text-purple-300"
          >
            Ticket
          </Link>
          <Link
            href={`#${ELandingSections.COUNTDOWN}`}
            className="text-white hover:text-purple-300"
          >
            Countdown
          </Link>
        </div>

        {/* Logos moved before mobile menu button */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-xl font-bold">
            <Image src="/ieee-logo.png" alt="Logo" width={90} height={45} priority className="w-auto h-[30px] md:h-[45px]" />
          </span>
          <span className="text-xl font-bold">
            <Image src="/jt-chpter-logo.png" alt="Logo" width={150} height={45} priority className="w-auto h-[30px] md:h-[45px]" />
          </span>
          
          {/* Mobile menu button moved to the end */}
          <div className="md:hidden ml-2">
            <motion.button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-purple-900/40 border border-purple-500/30 hover:bg-purple-800/50 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="text-purple-200 w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <Menu className="text-purple-200 w-5 h-5 md:w-6 md:h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-20 left-0 right-0 border-b border-purple-500/20 backdrop-blur-md bg-[#0e0420]/80 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={`#${ELandingSections.HOME}`}
                  className="text-white hover:text-purple-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href={`#${ELandingSections.ABOUT}`}
                  className="text-white hover:text-purple-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={`#${ELandingSections.EVENTS}`}
                  className="text-white hover:text-purple-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={`#${ELandingSections.TICKET}`}
                  className="text-white hover:text-purple-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ticket
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href={`#${ELandingSections.COUNTDOWN}`}
                  className="text-white hover:text-purple-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Countdown
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
