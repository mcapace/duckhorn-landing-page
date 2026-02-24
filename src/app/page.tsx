import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { MeetTheMakersSection } from "@/components/sections/MeetTheMakersSection";
import { RobSorenson } from "@/components/sections/RobSorenson";
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
      <RobSorenson />
      <DedicatedToExcellence />
      <Milestones />
      <Footer />
    </main>
  );
}
