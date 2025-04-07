"use client";
import { LazySection } from "@/components/lazy-section";
import Image from "next/image";
import { useState } from "react";

export default function TicketSection({ sectionId }: { sectionId: string }) {
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

  return (
    <LazySection
      id={sectionId}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
        Get Your Tickets Now!
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-3"></div>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="flex flex-col gap-8">
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
        <div className=" p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Pricing Details</h3>
          <table className="table-auto w-full text-sm text-left border-collapse border border-gray-300">
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
      </div>
      {/* <div className="text-center text-sm text-gray-400 mt-4">
        Taxes and platform fees not included. Earlybird offer currently
        available.
      </div> */}
    </LazySection>
  );
}
