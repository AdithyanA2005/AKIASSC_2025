import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { CountdownSection } from "@/components/sections/countdown-section";
import EventsSection from "@/components/sections/events-section";
import CommitteeMembersSection from "@/components/sections/committe-members";
import TicketSection from "@/components/sections/ticket-section";
import { ELandingSections } from "@/lib/enum";

export default function Home() {
  return (
    <main>
      <HomeSection
        sectionId={ELandingSections.HOME}
        goToSectionId={ELandingSections.ABOUT}
      />
      <AboutSection sectionId={ELandingSections.ABOUT} />
      <EventsSection sectionId={ELandingSections.EVENTS} />
      <CommitteeMembersSection sectionId={ELandingSections.COMMITTEE} />
      <TicketSection sectionId={ELandingSections.TICKET} />
      <CountdownSection sectionId={ELandingSections.COUNTDOWN} />
    </main>
  );
}
