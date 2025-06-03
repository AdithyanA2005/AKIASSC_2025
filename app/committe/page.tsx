"use client";
import { motion } from "framer-motion";
import { LazySection } from "@/components/lazy-section";

interface CommitteeMember {
  id: number;
  name: string;
  delegation: string;
}

const committeeMembers: CommitteeMember[] = [
  { id: 1, name: "Ms. Amrita Prashobh", delegation: "Patron" },
  { id: 2, name: "Prof. Jiby Varghese", delegation: "Co-Patron" },
  { id: 3, name: "Prof. Muhammed Kasim", delegation: "Honorary Chair" },
  { id: 4, name: "Dr. Jayaraju M", delegation: "General Convenor" },
  { id: 5, name: "Dr. Biju K", delegation: "General Chair" },
  { id: 6, name: "Dr. Reshmi Krishna Prasad", delegation: "Convenor" },
  { id: 7, name: "Dr. Deepak M", delegation: "Chairman, Programme Committee" },
  { id: 8, name: "Dr. Shiny G", delegation: "Chairman, Sponsorship Committee" },
  { id: 9, name: "Dr. Anjali Anand", delegation: "Chairman, Finance Committee" },
  { id: 10, name: "Dr. Bijuna Kunju", delegation: "Chairman, Registration Committee" },
  { id: 11, name: "Dr. Vasanthi V", delegation: "Chairman, Hospitality Committee" },
  { id: 12, name: "Dr. Aneesh", delegation: "Chairman, Event Management Committee" },
  { id: 13, name: "Prof. Jithin Jacob", delegation: "Chairman, Transportation and Accommodation" },
  { id: 14, name: "Dr. Latha Kumari", delegation: "Chairman, Stage and Venue Arrangements Committee" },
  { id: 15, name: "Mr. Akhil J Babu", delegation: "Chairman, Food Committee" },
];

export default function CommitteeMembersPage() {
  return (
    <div
      className="min-h-screen py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0836] to-[#0e0420]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h-14 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              {/* Card with glassmorphic effect */}
              <div className="relative h-full">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-900/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                
                {/* Card content */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg group-hover:border-purple-500/30 transition-all duration-300">
                  {/* Decorative accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-purple-400/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-purple-400/50 rounded-bl-lg"></div>
                  
                  <div className="flex flex-col h-full">
                    {/* Circle gradient background for initials */}
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-700/40 to-purple-900/40 border border-purple-500/20">
                      <span className="text-lg font-bold text-purple-200">
                        {member.name.split(" ").map(part => part[0]).join("")}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-center text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-center text-purple-300/80">
                      {member.delegation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}