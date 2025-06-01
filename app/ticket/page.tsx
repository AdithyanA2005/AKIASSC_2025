"use client";
import { LazySection } from "@/components/lazy-section";
import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";

export default function TicketPage({ sectionId }: { sectionId: string }) {
  const tickets = [
    { src: "/ticket/1.png", glowColor: "#805a07" },
    { src: "/ticket/2.png", glowColor: "#078058" },
    { src: "/ticket/3.png", glowColor: "#660342" },
  ];

  const useEarlyBird = true;
  const taxRate = 0.0604285; // Placeholder tax rate (18%)
  const platformFee = 0; // Placeholder platform fee in rupees

  const prices = {
    nonIeee: 1750,
    ieeeNonIas: 1500,
    ieeeIas: 1400,
  };

  const calculateFinalPrice = (basePrice: number) => {
    const price = useEarlyBird ? basePrice - 100 : basePrice;
    const taxes = price * taxRate;
    return price + taxes + platformFee;
  };

  // Contact information
  const contacts = [
    { name: "Dr. Reshmi", phone: "7034453360" },
    { name: "Jishnu H", phone: "7907187103" },
    { name: "Ananthu MS", phone: "9895753014" },
  ];

  return (
    <LazySection
      id={sectionId}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
        Get Your Tickets Now!
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-3"></div>
      <div className="flex flex-col md:flex-row gap-8 mt-6 w-full px-4 md:px-8">
        <div className="flex flex-col gap-8 w-full md:w-2/5">
          {tickets.map((ticket, index) => (
            <a
              key={index}
              href="https://makemypass.com/event/akiassc25"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full mx-auto"
            >
              <div
                className="rounded-lg overflow-hidden transition-all duration-300 w-full"
                style={{
                  boxShadow: `0 0 20px 0 ${ticket.glowColor}00`,
                }}
              >
                <Image
                  src={ticket.src}
                  alt={`Ticket ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-contain max-w-full"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority={index === 0}
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
        <div className="p-4 rounded-lg shadow-md w-full md:w-3/5 overflow-hidden">
          <h3 className="text-lg font-bold mb-4">Pricing Details</h3>
          <div className="overflow-x-auto pb-2">
            <table className="table-auto w-full text-sm text-left border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="">
                  <th className="border border-gray-300 px-4 py-2"></th>
                  <th className="border border-gray-300 px-4 py-2">Non-IEEE Members</th>
                  <th className="border border-gray-300 px-4 py-2">IEEE Non-IAS Members</th>
                  <th className="border border-gray-300 px-4 py-2">IEEE IAS Members</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Normal Price</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.nonIeee}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.ieeeNonIas}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.ieeeIas}</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-2">Earlybird Offer</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.nonIeee - 100}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.ieeeNonIas - 100}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{prices.ieeeIas - 100}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Platform Fees + Taxes</td>
                  <td className="border border-gray-300 px-4 py-2">₹{(prices.nonIeee * taxRate + platformFee).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{(prices.ieeeNonIas * taxRate + platformFee).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{(prices.ieeeIas * taxRate + platformFee).toFixed(2)}</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-2">Final Price</td>
                  <td className="border border-gray-300 px-4 py-2">₹{calculateFinalPrice(prices.nonIeee).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{calculateFinalPrice(prices.ieeeNonIas).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{calculateFinalPrice(prices.ieeeIas).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-left text-gray-400 text-[16px]">Food and accomadation will be provided to all registered participants</div>
          <div className="mt-0.5 text-left text-gray-400 text-[16px]">Early bird offer available till June 9, 2025</div>
        </div>
      </div>
      
      {/* Contact Us Section */}
      <div className="mt-8 mb-4 max-w-2xl w-full">
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
          Contact Us
        </h3>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
          <p className="text-center text-gray-300 mb-6">
            If you encounter any issues with registration or have questions, please contact:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {contacts.map((contact, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-xl bg-purple-900/20 border border-purple-400/20 backdrop-blur-sm transition-all duration-300 hover:bg-purple-900/30 hover:border-purple-400/30"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-purple-300" />
                </div>
                <h4 className="text-white font-medium">{contact.name}</h4>
                <a 
                  href={`tel:${contact.phone}`} 
                  className="text-purple-300 hover:text-purple-200 mt-1"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LazySection>
  );
}
