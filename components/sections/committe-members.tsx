"use client";

import { LazySection } from "@/components/lazy-section";

interface CommitteeMember {
  id: number;
  name: string;
  delegation: string;
  image: string;
}

const committeeMembers: CommitteeMember[] = [
  { id: 1, name: "Ananthu MS", delegation: "IAS SBC UKFCET Chairperson", image: "/committee/ananthu.jpg" },
  { id: 2, name: "Jishnu H", delegation: "IEEE SB UKFCET Chairperson", image: "/committee/jishnu.jpg" },
  { id: 3, name: "Archa R", delegation: "IEEE SB UKFCET Vice-Chairperson", image: "/committee/archa.jpg" },
  { id: 4, name: "Kaveri KR", delegation: "WIE SBC UKFCET Chairperson", image: "/committee/kaveri.jpg"},
  { id: 5, name: "Abhijith MS", delegation: "ComSoc SBC UKFCET Chairperson", image: "/committee/abhijith.jpg" },
  { id: 6, name: "Abel Sebastian", delegation: "IEEE SB UKFCET Vice-Secretary", image: "/committee/abel.jpg" },
  { id: 7, name: "Aparna S", delegation: "IEEE SB UKFCET Secretary", image: "/committee/aparna.jpg" },
  { id: 8, name: "David William", delegation: "IAS SBC Treasurer", image: "/committee/david.jpg" },
  

  // Add more members as needed
];

export default function CommitteeMembersSection({ sectionId }: { sectionId: string }) {
  return (
    <LazySection
      id={sectionId}
      className="min-h-screen py-24 container mx-auto px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Student Committee</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {committeeMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-center text-white mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-center text-gray-400">{member.delegation}</p>
          </div>
        ))}
      </div>
    </LazySection>
  );
}