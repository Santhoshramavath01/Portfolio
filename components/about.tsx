"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  {
    icon: GraduationCap,
    label: "IIIT Vadodara",
    sub: "B.Tech CSE, 3rd Year",
  },
  {
    icon: MapPin,
    label: "Gandhinagar, Gujarat",
    sub: "India",
  },
  {
    icon: Sparkles,
    label: "Web · AI · Cloud",
    sub: "Current focus areas",
  },
];

const nodes = [
  { x: "18%", y: "27%", delay: 0 },
  { x: "78%", y: "20%", delay: 0.8 },
  { x: "86%", y: "62%", delay: 1.5 },
  { x: "63%", y: "83%", delay: 2.2 },
  { x: "22%", y: "76%", delay: 1.1 },
  { x: "10%", y: "53%", delay: 2.8 },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          heading="Learning, building, and turning ideas into working products."
        />

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_0.75fr]">
          {/* =====================================================
              ABOUT CONTENT
          ===================================================== */}

          <Reveal delay={0.05}>
            <div className="space-y-5 text-[15.5px] leading-[1.8] text-fg-secondary sm:text-[16.5px]">
              <p>
                I&apos;m a B.Tech Computer Science and Engineering student at{" "}
                <span className="text-fg">
                  Indian Institute of Information Technology Vadodara
                </span>
                , currently in my third year. Most of what I know, I&apos;ve
                learned by building things end to end rather than reading
                about them in isolation.
              </p>

              <p>
                My primary focus is{" "}
                <span className="text-fg">web development</span> — designing
                and building full-stack applications with the MERN stack,
                thinking through authentication, data models, and real-time
                features. Alongside that, I&apos;m actively{" "}
                <span className="text-fg">
                  exploring artificial intelligence
                </span>{" "}
                and{" "}
                <span className="text-fg">learning cloud computing</span>,
                including AWS and CI/CD workflows, to understand how
                applications are actually deployed and scaled.
              </p>

              <p>
                I care about writing code that&apos;s clean and intentional,
                and I try to treat every project — big or small — as a chance
                to get closer to how real-world software is actually built.
                This portfolio itself is one of those projects.
              </p>
            </div>

            {/* =================================================
                FACT CARDS
            ================================================= */}

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="rounded-xl border border-border bg-card px-4 py-3.5 transition-colors duration-300 hover:border-accent/30"
                >
                  <fact.icon
                    size={16}
                    className="mb-2.5 text-accent-soft"
                  />

                  <p className="font-display text-[13.5px] font-medium text-fg">
                    {fact.label}
                  </p>

                  <p className="mt-0.5 font-mono text-[11px] text-fg-muted">
                    {fact.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* =====================================================
              ANIMATED VISUAL
          ===================================================== */}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-[380px] overflow-hidden rounded-3xl border border-border bg-card">
              {/* ---------------------------------------------
                  Background grid
              --------------------------------------------- */}

              <motion.div
                className="bg-grid absolute inset-0 opacity-30"
                animate={{
                  backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* ---------------------------------------------
                  Ambient glow
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[70px]"
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ---------------------------------------------
                  Outer rotating ring
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.12]"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_rgba(124,108,255,0.9)]" />
              </motion.div>

              {/* ---------------------------------------------
                  Middle rotating ring
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-[57%] w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-strong/70"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-soft" />
              </motion.div>

              {/* ---------------------------------------------
                  Inner ring
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/[0.08]"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-fg/50" />
              </motion.div>

              {/* ---------------------------------------------
                  Connecting lines
              --------------------------------------------- */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1="18"
                  y1="27"
                  x2="78"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className="text-accent"
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.line
                  x1="78"
                  y1="20"
                  x2="86"
                  y2="62"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className="text-accent"
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.line
                  x1="86"
                  y1="62"
                  x2="63"
                  y2="83"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className="text-accent"
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.line
                  x1="63"
                  y1="83"
                  x2="22"
                  y2="76"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className="text-accent"
                  animate={{ opacity: [0.1, 0.45, 0.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />

                <motion.line
                  x1="22"
                  y1="76"
                  x2="18"
                  y2="27"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className="text-accent"
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </svg>

              {/* ---------------------------------------------
                  Floating network nodes
              --------------------------------------------- */}

              {nodes.map((node, index) => (
                <motion.span
                  key={index}
                  className="absolute h-2 w-2 rounded-full bg-accent"
                  style={{
                    left: node.x,
                    top: node.y,
                    boxShadow:
                      "0 0 14px rgba(124,108,255,0.7)",
                  }}
                  animate={{
                    scale: [0.7, 1.25, 0.7],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2.5 + index * 0.3,
                    delay: node.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* ---------------------------------------------
                  Small floating particles
              --------------------------------------------- */}

              <motion.span
                className="absolute left-[30%] top-[18%] h-1 w-1 rounded-full bg-fg/40"
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.span
                className="absolute bottom-[20%] right-[24%] h-1 w-1 rounded-full bg-accent/50"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 6, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* ---------------------------------------------
                  Center pulse
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ---------------------------------------------
                  Center point
              --------------------------------------------- */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}