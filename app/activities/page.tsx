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
    topic: "AI Workshop",
    image: "/events/aiworkshop.jpg",
    description: "Get ready for an immersive AI Workshop that unlocks the power of Machine Learning and Artificial Intelligence—one of the most transformative technologies of our time.\nWhat You'll Learn:\n* Session 1: Build a solid foundation in AI—covering Machine Learning basics, neural networks, model training, and real-world applications.\n* Session 2: Hands-on implementation! Train your own ML models, work with real datasets, and deploy AI-powered solutions using Python and popular libraries like Scikit-learn and TensorFlow."
  },
  {
    id: 3,
    topic: "Internship Opportunities",
    image: "/events/internship.jpg",
    description: "Gain valuable real-world exposure, connect with industry leaders, and take the first step toward a successful professional journey. Our internship program offers hands-on experience in cutting-edge technologies and mentorship from seasoned professionals. Don't miss out on this incredible opportunity!"
  },
  {
    id: 4,
    topic: "12-Hour Hackathon",
    image: "/hackathon.jpg",
    description: "Put your coding skills to the test in our 12-hour hackathon! Collaborate with fellow tech enthusiasts to solve real-world engineering problems using innovative technology solutions. It's a great opportunity to showcase your creativity and technical prowess."
  },
  {
    id: 5,
    topic: "Industrial Visit",
    image: "/iv.jpg",
    description: "Step inside one of India’s top tech powerhouses – UST – during AKIASSC 2025!\nExperience the pulse of real-time innovation, explore futuristic tech spaces, and engage with industry leaders who are shaping the digital future.\nWitness cutting-edge technologies in action\n🔹 Gain first-hand insights from tech professionals\n🔹 Enhance your knowledge beyond the textbook\n🔹 Boost your resume with real-world exposure"
  },
  {
    id: 6,
    topic: "Talk Session",
    image: "/talk1.jpg",
    description: "We are thrilled to have Mr. Srikanth Pillai, Chair, IAS CMD, joining us as a speaker at the All Kerala IAS Students Conclave (AKIASSC) 2025!\nTopic: IAS Programs and Benefits\nExplore the vast landscape of opportunities, resources, and professional advantages offered by IEEE IAS."
  },
  {
    id: 7,
    topic: "Keynote Address",
    image: "/talk2.jpg",
    description: "Get ready to be inspired by a visionary leader shaping the future of innovation!\n\n🎙 Sri. Anoop P Ambika \n👔 CEO, Kerala Startup Mission \n📢 Keynote Topic: Tech 2030 – What Could Happen in the Next 5 Years \nJoin us as he explores the evolving tech landscape and offers powerful insights into the next big leap in innovation and entrepreneurship."
  },
  {
    id: 8,
    topic: "Keynote Address",
    image:"/keynote1.jpg",
    description: "We’re thrilled to announce that Sri. Mohammed Sajin S, Chief Growth Officer at Arcite Educational Solutions Pvt. Ltd., will be joining us as a Keynote Speaker at AKIASSC 2025!\n\n🌐 Topic: Internet of Energy (IoE) – Explore how digital innovation is reshaping the energy sector for a smarter, sustainable world."
  },
  {
    id: 9,
    topic: "Keynote address",
    image:"/keynote2.jpg",
    description: "🎙 Keynote Speaker:\n👨‍💻 Sri. Rasic A Azeez \nCyber Security Engineer – Kerala State IT Mission\n\n💡 Topic : SafeTech Campaign: Cybersecurity for Engineering Minds\n🔐 Learn from a leading expert how to safeguard digital frontiers and build a secure tech future!"
  }
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
          <h1 className="h-17 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
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