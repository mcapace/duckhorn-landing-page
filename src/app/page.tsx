import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { FeaturedWines } from "@/components/sections/FeaturedWines";
import { MeetTheMakers } from "@/components/sections/MeetTheMakers";
import { WineryChapter } from "@/components/sections/WineryChapter";
import { RobSorenson } from "@/components/sections/RobSorenson";
import { Video } from "@/components/sections/Video";
import { Milestones } from "@/components/sections/Milestones";
import { Footer } from "@/components/Footer";
import { wineryChapters } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Perspective />
      <FeaturedWines />
      <MeetTheMakers />
      {wineryChapters.map((chapter, index) => (
        <WineryChapter
          key={chapter.id}
          index={index}
          id={chapter.id}
          name={chapter.name}
          tagline={chapter.tagline}
          image={chapter.image}
          heroDescription={chapter.heroDescription}
          bottleImage={chapter.bottleImage ?? ""}
          wines={chapter.wines}
          winemaker={chapter.winemaker}
        />
      ))}
      <RobSorenson />
      <Video />
      <Milestones />
      <Footer />
    </main>
  );
}
