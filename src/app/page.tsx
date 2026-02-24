import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { MeetTheMakersSection } from "@/components/sections/MeetTheMakersSection";
import { DedicatedToExcellence } from "@/components/sections/DedicatedToExcellence";
import { Milestones } from "@/components/sections/Milestones";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Perspective />
      <MeetTheMakersSection />
      <DedicatedToExcellence />
      <Milestones />
      <Footer />
    </main>
  );
}
