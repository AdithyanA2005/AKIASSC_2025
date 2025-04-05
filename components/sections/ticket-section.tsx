"use client";
import { LazySection } from "@/components/lazy-section";
import Image from "next/image";

export default function TicketSection({ sectionId }: { sectionId: string }) {
  const tickets = [
    { src: "/ticket/1.png", glowColor: "#805a07" },
    { src: "/ticket/2.png", glowColor: "#078058" },
    { src: "/ticket/3.png", glowColor: "#660342" },
  ];

  return (
    <LazySection
      id={sectionId}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
        Get Your Tickets Now!
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-3"></div>
      <div className="flex flex-col gap-8 mt-6">
        {tickets.map((ticket, index) => (
          <a
            key={index}
            href="https://makemypass.com/event/akiassc25"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div
              className="rounded-lg overflow-hidden transition-all duration-300"
              style={{
                boxShadow: `0 0 20px 0 ${ticket.glowColor}00`,
              }}
            >
              <Image
                src={ticket.src}
                alt={`Ticket ${index + 1}`}
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>
            <style jsx>
              {`
              a:hover div {
                box-shadow: none;
              }
            `}
            </style>
          </a>
        ))}
      </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        Taxes and platform fees not included. Earlybird offer currently
        available.
      </div>
    </LazySection>
  );
}
