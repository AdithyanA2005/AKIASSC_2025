import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { CountdownSection } from "@/components/sections/countdown-section";
import { ELandingSections } from "@/lib/enum";

export default function Home() {
  return (
    <main>
      <HomeSection
        sectionId={ELandingSections.HOME}
        goToSectionId={ELandingSections.ABOUT}
      />
      <AboutSection sectionId={ELandingSections.ABOUT} />
      <CountdownSection sectionId={ELandingSections.COUNTDOWN} />
    </main>
  );
}
