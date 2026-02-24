import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RobSorenson } from "@/components/sections/RobSorenson";

export default function VineyardStewardshipPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <RobSorenson />
      <Footer />
    </main>
  );
}
