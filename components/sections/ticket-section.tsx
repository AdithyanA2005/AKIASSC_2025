import { LazySection } from "@/components/lazy-section";

export default function TicketSection({ sectionId }: { sectionId: string }) {
  return (
    <LazySection
      id={sectionId}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div></div>
    </LazySection>
  );
}
