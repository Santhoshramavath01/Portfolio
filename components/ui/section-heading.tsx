"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="mb-3 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-accent-soft">
        <span className="h-px w-6 bg-accent-soft/60" />
        {eyebrow}
      </span>
      <h2 className="balance max-w-xl font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-fg">
        {heading}
      </h2>
    </motion.div>
  );
}
