"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          heading="Where I'm learning and growing."
        />

        <div ref={containerRef} className="relative pl-9 sm:pl-12">
          {/* Track */}
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border sm:left-[9px]" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-1 w-px bg-gradient-to-b from-accent to-accent-violet sm:left-[9px]"
          />

          <div className="flex flex-col gap-12">
            {education.map((entry, i) => (
              <motion.div
                key={entry.institution}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Dot */}
                <span
                  className={`absolute -left-9 top-1 flex h-4 w-4 items-center justify-center rounded-full border sm:-left-12 ${
                    entry.current
                      ? "border-accent bg-accent/20"
                      : "border-border-strong bg-card"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      entry.current ? "bg-accent" : "bg-fg-muted"
                    }`}
                  />
                </span>

                <div
                  className={`rounded-2xl border p-6 transition-colors duration-300 ${
                    entry.current
                      ? "border-accent/30 bg-card shadow-[0_20px_50px_-30px_rgba(99,102,241,0.5)]"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-accent-soft" />
                        {entry.current && (
                          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-accent-soft">
                            Currently Studying
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-[17px] font-medium text-fg sm:text-[18px]">
                        {entry.institution}
                      </h3>
                      <p className="mt-1 text-[14px] text-fg-secondary">
                        {entry.program}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[12px] text-fg-muted">
                        {entry.duration}
                      </p>
                      <p className="mt-1 font-mono text-[12px] text-fg-muted">
                        {entry.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.meta.map((m) => (
                      <span
                        key={m.label}
                        className="rounded-lg border border-border bg-card-secondary px-3 py-1.5 font-mono text-[12px] text-fg-secondary"
                      >
                        {m.label}: <span className="text-fg">{m.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
