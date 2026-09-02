"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { perspectiveContent } from "@/lib/data";
import { ShopCollectionButton } from "@/components/ui/ShopCollectionButton";

export const Perspective = () => {
  return (
    <section id="perspective" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-white scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#425a4d] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {perspectiveContent.title}
          </h2>
          <div className="flex justify-center mt-5 mb-6 w-full max-w-3xl mx-auto px-4" aria-hidden>
            <Image
              src="/images/bottles/Duckhorn-Digital-Edits-Duck-Outline.png"
              alt=""
              width={512}
              height={96}
              className="w-full h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
          <p className="text-[#2A2A2A] italic text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-serif)" }}>
            {perspectiveContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex justify-center mb-8"
        >
          <ShopCollectionButton />
        </motion.div>

        <motion.div
          id="video"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-16 scroll-mt-24"
        >
          <div className="w-full max-w-5xl relative aspect-video overflow-hidden rounded-sm">
            <iframe
              src="https://cdn.jwplayer.com/players/mokhLqg0-9SK0pNl2.html"
              title="The Pinnacle of American Fine Wine"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* CEO letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-5 text-[#3D3D3D] text-base md:text-lg leading-relaxed">
            {perspectiveContent.letter.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 mt-6 flex flex-col sm:flex-row items-center justify-center sm:items-end sm:justify-end gap-6"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 bg-[#E8E4DC]">
              <Image
                src={perspectiveContent.ceoHeadshot}
                alt={perspectiveContent.signature}
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Image
                src={perspectiveContent.ceoSignatureImage}
                alt=""
                width={160}
                height={48}
                className="h-10 w-auto object-contain object-center sm:object-left"
              />
              <p
                className="text-lg font-medium text-[#2A2A2A] mt-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {perspectiveContent.signature}
              </p>
              <p className="text-sm text-[#A07D4E]">
                {perspectiveContent.title_line}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
