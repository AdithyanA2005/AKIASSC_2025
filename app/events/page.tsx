"use client";

import { Activity } from "@/lib/types";
import FeatureGrid from "@/components/FeatureGrid";
import { motion } from "framer-motion";
import { LazySection } from "@/components/lazy-section";
import ActivityGrid from "@/components/ActivitiesGrid";

const activities: Activity[][] = [
  [
    {
      id: 1,
      date: "July 11, 2025",
      time: "11:00 AM - 12:30 PM",
      topic: "Industrial Visit",
    },
    {
      id: 2,
      date: "July 11, 2025",
      time: "11:00 AM - 12:30 PM",
      topic: "Field Trip",
    },
    {
      id: 3,
      date: "July 11, 2025",
      time: "4:30 PM - 5:30 PM",
      topic: "Inaugration Ceremony",
    },
    {
      id: 4,
      date: "July 11, 2025",
      time: "6:00 PM - 7:00 PM",
      topic: "Keynote Address",
    },
    {
      id: 5,
      date: "July 11, 2025",
      time: "7:00 PM - 8:00 PM",
      topic: "Cultural Evening",
    }
  ],
  [
    {
      id: 0,
      date: "July 12, 2025",
      time: "9:00 AM - 9:00 PM",
      topic: "12-Hour Hackathon",
    },
    {
      id: 1,
      date: "July 12, 2025",
      time: "9:00 AM - 10:45 AM",
      topic: "Technical Talk",
    },
    {
      id: 2,
      date: "July 12, 2025",
      time: "11:00 AM - 12:30 PM",
      topic: "Panel Discussion"
    },
    {
      id: 3,
      date: "July 12, 2025",
      time: "1:30 PM - 5:00 PM",
      topic: "EV Workshop"
    },
    {
      id: 4,
      date: "July 12, 2025",
      time: "1:30 PM - 5:00 PM",
      topic: "AI Workshop"
    },
    {
      id: 5,
      date: "July 12, 2025",
      time: "5:00 PM - 7:00 PM",
      topic: "IAS YP Event"
    }
  ],
  [
    {
      id: 0,
      date: "July 13, 2025",
      time: "9:00 AM - 11:00 PM",
      topic: "Panel Discussion [SPAx Event]",
    },
    {
      id: 1,
      date: "July 13, 2025",
      time: "11:15 AM - 12:00 PM",
      topic: "Talk Session"
    },
    {
      id: 2,
      date: "July 13, 2025",
      time: "12:00 PM - 1:00 PM",
      topic: "Validectory Function"
    }
  ]
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
          <h1 className="h-14 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Upcoming Activities
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore all the exciting activities taking place at AKIASSC 2025 and
            the time slots for each event.
          </p>
        </motion.div>
        <h1 className="w-full h-14 text-4xl md:text-5xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-400">
          Day 1
        </h1>
        <ActivityGrid data={activities[0]} />

        <div className="w-[70%] h-1 bg-[#00FFFF] rounded-full mt-2 mb-10 mx-auto" />
        <h1 className="w-full h-14 text-4xl md:text-5xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-400">
          Day 2
        </h1>
        <ActivityGrid data={activities[1]} />

        <div className="w-[70%] h-1 bg-[#00FFFF] rounded-full mt-2 mb-10 mx-auto" />
        <h1 className="w-full h-14 text-4xl md:text-5xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-400">
          Day 3
        </h1>
        <ActivityGrid data={activities[2]} />
      </LazySection>
    </div>
  );
}
