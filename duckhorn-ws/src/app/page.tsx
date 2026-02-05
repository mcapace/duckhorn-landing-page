import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { FeaturedWines } from "@/components/sections/FeaturedWines";
import { MeetTheMakers } from "@/components/sections/MeetTheMakers";
import { RobSorenson } from "@/components/sections/RobSorenson";
import { Video } from "@/components/sections/Video";
import { Milestones } from "@/components/sections/Milestones";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Perspective />
      <FeaturedWines />
      <MeetTheMakers />
      <RobSorenson />
      <Video />
      <Milestones />
      <Footer />
    </main>
  );
}
