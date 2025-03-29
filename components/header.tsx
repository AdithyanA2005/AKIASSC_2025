import Link from "next/link";
import Image from "next/image";
import { ELandingSections } from "@/lib/enum";

export function Header() {
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
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
            href={`#${ELandingSections.COUNTDOWN}`}
            className="text-white hover:text-purple-300"
          >
            Countdown
          </Link>
        </div>

        <Link
          href={`#${ELandingSections.COUNTDOWN}`}
          className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-6 py-1.5"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
