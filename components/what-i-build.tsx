"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildAreas } from "@/data/what-i-build";

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Build"
          heading="Where I'm putting my focus right now."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {buildAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 2) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card-secondary text-accent-soft transition-colors duration-300 group-hover:border-accent-soft/40">
                <area.icon size={19} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-[16px] font-medium text-fg">
                {area.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-secondary">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
