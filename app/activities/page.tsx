"use client";

import { Activity } from "@/lib/types";
import FeatureGrid from "@/components/FeatureGrid";
import { motion } from "framer-motion";
import { LazySection } from "@/components/lazy-section";

const activities: Activity[] = [
  {
    id: 1,
    image: "/workshop.jpeg",
    date: "July 11, 2025",
    time: "10:00 AM - 1:00 PM",
    topic: "EV Workshop - Part 1",
    description: "Theoretical session on Electric Vehicles covering BLDC motors, battery selection, converters, and the fundamentals of EV conversion."
  },
  {
    id: 2,
    image: "/workshop.jpeg",
    date: "July 11, 2025",
    time: "2:00 PM - 5:00 PM",
    topic: "EV Workshop - Part 2",
    description: "Hands-on workshop where participants will learn to wire and convert a conventional IC engine bike into a fully functional electric vehicle."
  },
  {
    id: 3,
    image: "/hackathon.avif",
    date: "July 12, 2025",
    time: "9:00 AM - 9:00 PM",
    topic: "12-Hour Hackathon",
    description: "Collaborative coding marathon where teams will solve real-world engineering problems using innovative technology solutions."
  },
  {
    id: 4,
    image: "/iv.jpeg",
    date: "July 13, 2025",
    time: "10:00 AM - 4:00 PM",
    topic: "Industrial Visit",
    description: "Visit to a leading tech company to gain insights into industrial applications of electrical and computer engineering in real-world scenarios."
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-24">
      <LazySection className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Upcoming Activities
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore the exciting activities planned for AKIASSC 2025. From hands-on workshops to tech talks, 
            there's something for everyone interested in industrial applications and technology.
          </p>
        </motion.div>
        
        <FeatureGrid data={activities} />
      </LazySection>
    </div>
  );
}