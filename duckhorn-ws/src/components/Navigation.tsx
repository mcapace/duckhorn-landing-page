"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "The Duckhorn Perspective", href: "#perspective" },
  { label: "Vineyard Stewardship", href: "#vineyard-stewardship" },
  { label: "The Collection Map", href: "#the-collection-map" },
  { label: "Featured Wines", href: "#featured-wines" },
  { label: "Meet the Makers", href: "#meet-the-makers" },
  { label: "Video", href: "#video" },
  { label: "Milestones", href: "#milestones" },
  { label: "The Collection", href: "#wineries" },
  { label: "Ratings", href: "#ratings" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-xl border-b border-[#E8E4DC]"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center gap-4 md:gap-8 flex-wrap text-xs md:text-sm">
        {navItems.map((item, i) => (
          <span key={item.href} className="flex items-center gap-4 md:gap-6">
            {i > 0 && (
              <span className="text-[#B8956A]/60" aria-hidden>•</span>
            )}
            <motion.a
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-[#3D3D3D] hover:text-[#2A2A2A] transition-colors font-medium tracking-wide"
            >
              {item.label}
            </motion.a>
          </span>
        ))}
      </div>
    </motion.nav>
  );
};
