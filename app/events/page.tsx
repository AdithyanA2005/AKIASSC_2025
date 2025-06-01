"use client";

import { Event } from "@/lib/types";
import FeatureGrid from "@/components/FeatureGrid";
import { motion } from "framer-motion";
import { LazySection } from "@/components/lazy-section";

const events: Event[] = [
  {
    id: 1,
    topic: "EV Workshop",
    image: "/events/evworkshop.jpg",
    description: "Join us to explore the fascinating world of Electric Vehicles by learning how to convert a conventional IC engine bike into a sustainable EV. This 2-part session begins with a theory class covering essential EV bike components like BLDC motors, battery selection, converters, and connections. It's followed by a hands-on workshop where you'll learn to wire and convert a conventional IC engine bike into a fully functional EV."
  }, 
  {
    id: 2,
    topic: "Internship Opportunities",
    image: "/events/internship.jpg",
    description: "Gain valuable real-world exposure, connect with industry leaders, and take the first step toward a successful professional journey. Our internship program offers hands-on experience in cutting-edge technologies and mentorship from seasoned professionals. Don't miss out on this incredible opportunity!"
  },
  {
    id: 3,
    topic: "12-Hour Hackathon",
    image: "/hackathon.avif",
    description: "Put your coding skills to the test in our 12-hour hackathon! Collaborate with fellow tech enthusiasts to solve real-world engineering problems using innovative technology solutions. It's a great opportunity to showcase your creativity and technical prowess."
  },
  {
    id: 4,
    topic: "Industrial Visit",
    image: "/iv.jpg",
    description: "Gain insights into how electrical and computer engineering is applied in real-world scenarios by visiting a leading tech company. This visit will provide you with a unique perspective on the industry and its applications."
  },
];

export default function EventsPage() {
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
            Event Programs
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
          {/* <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Discover the key events that make AKIASSC 2025 a must-attend conference. 
            Our carefully curated program features workshops, technical sessions, 
            and networking opportunities designed to enhance your skills and knowledge.
          </p> */}
        </motion.div>
        
        <FeatureGrid data={events} />
      </LazySection>
    </div>
  );
}