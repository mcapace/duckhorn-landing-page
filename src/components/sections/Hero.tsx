"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[115vh] overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 bg-[#FAFAF8]">
        <Image
          src="/images/bottles/Duckhorn-Digital-Edits-Hero-Overlay.jpg"
          alt="The Duckhorn Collection"
          fill
          className="object-contain object-top"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};
