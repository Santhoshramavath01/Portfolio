"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";

function AnimatedBorder({ delay = 0 }: { delay?: number }) {
  return (
    <>
      {/* Top line */}
      <motion.span
        className="pointer-events-none absolute left-5 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-accent-soft to-transparent"
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />

      {/* Right line */}
      <motion.span
        className="pointer-events-none absolute right-0 top-5 h-1/2 w-px bg-gradient-to-b from-transparent via-accent-soft to-transparent"
        animate={{
          y: ["-100%", "200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 0.8,
        }}
      />

      {/* Bottom line */}
      <motion.span
        className="pointer-events-none absolute bottom-0 right-5 h-px w-1/2 bg-gradient-to-l from-transparent via-accent-soft to-transparent"
        animate={{
          x: ["100%", "-200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 1.6,
        }}
      />

      {/* Left line */}
      <motion.span
        className="pointer-events-none absolute bottom-5 left-0 h-1/2 w-px bg-gradient-to-t from-transparent via-accent-soft to-transparent"
        animate={{
          y: ["100%", "-200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 2.4,
        }}
      />

      {/* Moving glowing point */}
      <motion.span
        className="pointer-events-none absolute left-0 top-0 z-20 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(129,140,248,0.9)]"
        animate={{
          left: ["0%", "100%", "100%", "0%", "0%"],
          top: ["0%", "0%", "100%", "100%", "0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    </>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          heading="Technologies I'm learning and building with."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (ci % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-strong hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.5)]"
            >
              {/* Animated circuit border */}
              <AnimatedBorder delay={ci * 0.45} />

              {/* Soft ambient glow */}
              <motion.div
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Card content */}
              <div className="relative z-10 min-h-[170px] p-6">
                <h3 className="font-display text-[15px] font-medium text-fg">
                  {category.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: ci * 0.08 + si * 0.04,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="rounded-lg border border-border bg-card-secondary px-2.5 py-1.5 font-mono text-[12px] text-fg-secondary transition-all duration-300 hover:!border-accent-soft/50 hover:!text-fg"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}