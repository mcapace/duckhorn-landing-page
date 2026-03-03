import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { wineryChapters } from "@/lib/data";
import { WineryPageContent } from "./WineryPageContent";

export async function generateStaticParams() {
  return wineryChapters.map((c) => ({ slug: c.id }));
}

export default async function WineryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = wineryChapters.find((c) => c.id === slug);
  if (!chapter) notFound();

  return (
    <main className="relative min-h-screen">
      <Navigation />
      <WineryPageContent chapter={chapter} />
      <Footer />
    </main>
  );
}
