"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/bottles/Duckhorn-Digital-Edits-Hero-Overlay.jpg"
          alt="The Duckhorn Collection"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};
