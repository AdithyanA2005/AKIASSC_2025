import Link from "next/link";
import Image from "next/image";
import { ELandingSections } from "@/lib/enum";

export function Header() {
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <Image src="/logo.png" alt="Logo" width={110} height={75} />
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

        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <Image src="/ieee-logo.png" alt="Logo" width={90} height={45} />
          </span>
        </div>
      </nav>
    </header>
  );
}
