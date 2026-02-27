"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Intro", href: "/#perspective" },
  { label: "Winemakers", href: "/#meet-the-makers" },
  { label: "Wines", href: "/#wines" },
  { label: "Milestones", href: "/#milestones" },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-xl border-b border-[#E8E4DC]"
    >
      <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between md:justify-center md:gap-12 lg:gap-16">
        {/* Desktop: centered links */}
        <div className="hidden md:flex items-center gap-8 md:gap-12 lg:gap-16 flex-wrap text-sm md:text-base">
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

        {/* Mobile: hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 -m-2 text-[#3D3D3D] hover:text-[#2A2A2A]"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl md:hidden"
            aria-hidden="false"
          >
            <nav className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] gap-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-[#3D3D3D] hover:text-[#2A2A2A] text-lg font-medium tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
