"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "wine";
}

export const GlassCard = ({
  children,
  className = "",
  variant = "light",
}: GlassCardProps) => {
  const variants = {
    light: "bg-white/60 border-white/40",
    dark: "bg-[#2A2A2A]/60 border-white/10",
    wine: "bg-[#4A1D23]/40 border-[#B8956A]/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative
        backdrop-blur-xl
        ${variants[variant]}
        border
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        overflow-hidden
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
