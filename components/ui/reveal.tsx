"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({ children, delay = 0, className, y }: RevealProps) {
  return (
    <motion.div
      initial={y !== undefined ? { opacity: 0, y } : "hidden"}
      whileInView={y !== undefined ? { opacity: 1, y: 0 } : "show"}
      variants={y === undefined ? variants : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
