import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { CountdownSection } from "@/components/sections/countdown-section";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <CountdownSection />
    </main>
  );
}
