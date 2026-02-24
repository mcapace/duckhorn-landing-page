"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Intro", href: "/#perspective" },
  { label: "Winemakers", href: "/#meet-the-makers" },
  { label: "Wines", href: "/#wines" },
  { label: "Milestones", href: "/#milestones" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-xl border-b border-[#E8E4DC]"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap text-sm md:text-base">
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ y: -2 }}
            className="text-[#3D3D3D] hover:text-[#2A2A2A] transition-colors font-medium tracking-wide"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};
