import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { MeetTheMakers } from "@/components/sections/MeetTheMakers";
import { FeaturedWines } from "@/components/sections/FeaturedWines";
import { Video } from "@/components/sections/Video";
import { Milestones } from "@/components/sections/Milestones";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Perspective />
      <MeetTheMakers />
      <FeaturedWines />
      <Video />
      <Milestones />
      <Footer />
    </main>
  );
}
