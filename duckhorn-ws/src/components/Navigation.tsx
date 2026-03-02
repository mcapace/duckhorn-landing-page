"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Intro", href: "/#perspective" },
  { label: "Winemakers", href: "/#meet-the-makers" },
  { label: "Wines", href: "/#wines" },
  { label: "Milestones", href: "/#milestones" },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white shadow-sm border-b border-[#E8E4DC] md:bg-white/90 md:backdrop-blur-xl"
    >
      <div className="relative w-full max-w-[1800px] mx-auto flex items-center justify-between md:justify-center md:gap-12 lg:gap-16">
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
          className="md:hidden p-3 -m-2 text-[#2A2A2A] hover:bg-[#E8E4DC]/50 rounded-lg transition-colors"
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

      {/* Mobile: dropdown panel below nav + backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — tap to close */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[65px] z-40 bg-black/40 md:hidden"
            />
            {/* Dropdown panel */}
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-50 mt-0 overflow-hidden md:hidden"
              aria-hidden="false"
            >
              <nav
                className="bg-white border-b border-t border-[#E8E4DC] shadow-lg py-3"
                aria-label="Main"
              >
                <ul className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-6 py-4 text-[#2A2A2A] text-base font-medium tracking-wide hover:bg-[#F5F3EF] active:bg-[#E8E4DC] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
