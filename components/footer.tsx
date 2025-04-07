import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "IEEE SB UKFCET",
      links: [
        { platform: "Instagram", url: "https://instagram.com/ieee_sb_ukfcet", icon: Instagram },
        { platform: "LinkedIn", url: "https://linkedin.com/company/ieeesbukfcet/", icon: Linkedin },
      ],
    },
    {
      name: "IEEE Kerala Joint Chapter",
      links: [
        { platform: "Instagram", url: "https://www.instagram.com/ieeeiaiepelskerala/", icon: Instagram },
        { platform: "LinkedIn", url: "https://www.linkedin.com/company/ieeeiaiepelskerala/", icon: Twitter },
      ],
    },
    {
      name: "AKIASSC",
      links: [
        { platform: "Instagram", url: "https://instagram.com/akiassc", icon: Instagram },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/all-kerala-industry-applications-soceity-students-conclave-917061317/", icon: Linkedin },
      ],
    },
    {
      name: "IAS SBC UKFCET",
      links: [
        { platform: "Instagram", url: "https://www.instagram.com/ias_sbc_ukfcet", icon: Facebook },
        // { platform: "Instagram", url: "https://instagram.com/iassbcukfcet", icon: Instagram },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a0836]/50 to-[#0e0420]/50 text-white py-6 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((group) => (
            <div key={group.name} className="text-center">
              <h3 className=" text-sm font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                {group.name}
              </h3>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.platform}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <link.icon className="w-3 h-3" />
                      {link.platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-gray-400 text-xs">
          © AKIASSC 2025 / UKFECT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}