import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { FeaturedWines } from "@/components/sections/FeaturedWines";
import { MeetTheMakers } from "@/components/sections/MeetTheMakers";
import { Video } from "@/components/sections/Video";
import { Milestones } from "@/components/sections/Milestones";
import { WineryDetail } from "@/components/sections/WineryDetail";
import { Ratings } from "@/components/sections/Ratings";
import { RobSorenson } from "@/components/sections/RobSorenson";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Perspective />
      <FeaturedWines />
      <MeetTheMakers />
      <Video />
      <Milestones />
      <WineryDetail />
      <Ratings />
      <RobSorenson />
      <Footer />
    </main>
  );
}
