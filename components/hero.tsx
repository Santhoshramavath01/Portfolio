"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { site } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ---------------------------------------------------------
   LETTER BY LETTER NAME ANIMATION
--------------------------------------------------------- */

function AnimatedName() {
  const words = [`Hi,`, `I’m`, site.name + `.`];

  return (
    <span
      className="inline-flex flex-wrap items-baseline gap-x-[0.25em]"
      aria-label={`Hi, I’m ${site.name}.`}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIndex) => (
        <span key={word} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${word}-${charIndex}`}
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(8px)",
                rotateX: -70,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                rotateX: 0,
              }}
              transition={{
                duration: 0.65,
                delay:
                  0.15 +
                  wordIndex * 0.15 +
                  charIndex * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
                transition: {
                  duration: 0.18,
                  ease: "easeOut",
                },
              }}
              className="inline-block"
              style={{
                transformOrigin: "bottom center",
                willChange: "transform, opacity, filter",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
export function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* ---------------------------------------------------------
          BACKGROUND GRID
      --------------------------------------------------------- */}

      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      {/* ---------------------------------------------------------
          AMBIENT GLOW
      --------------------------------------------------------- */}

      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{
          background: "var(--glow-accent)",
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 0.6,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* ---------------------------------------------------------
          MAIN CONTENT
      --------------------------------------------------------- */}

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[650px]"
        >
          {/* ---------------------------------------------------
              STATUS BADGE
          --------------------------------------------------- */}

          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card-secondary px-3.5 py-1.5 font-mono text-[12px] text-fg-secondary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            Exploring • Building • Learning
          </motion.div>

          {/* ---------------------------------------------------
              MAIN HEADING
          --------------------------------------------------- */}

<motion.h1
  variants={item}
  className="balance font-display text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-fg"
>
  <AnimatedName />

  <br />

  {/* This line does NOT animate */}
  <span className="text-gradient">
    I build modern digital experiences.
  </span>
</motion.h1>

          {/* ---------------------------------------------------
              DESCRIPTION
          --------------------------------------------------- */}

          <motion.p
            variants={item}
            className="mt-6 max-w-prose text-[16px] leading-relaxed text-fg-secondary sm:text-[17px]"
          >
            I&apos;m a B.Tech Computer Science and Engineering student at
            IIIT Vadodara, passionate about web development, exploring
            artificial intelligence, and learning cloud computing.
          </motion.p>

          {/* ---------------------------------------------------
              INTEREST TAGS
          --------------------------------------------------- */}

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap gap-2"
          >
            {site.interests.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 1.75 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11.5px] text-fg-muted transition-colors duration-300 hover:border-accent-soft/50 hover:text-fg"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* ---------------------------------------------------
              BUTTONS
          --------------------------------------------------- */}

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={scrollTo("projects")}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 font-mono text-[13px] font-medium text-bg transition-all duration-300 hover:opacity-90"
            >
              View My Projects

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={scrollTo("contact")}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-[13px] font-medium text-fg transition-colors duration-300 hover:border-border-strong hover:bg-card-secondary"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>

          {/* ---------------------------------------------------
              SOCIAL LINKS
          --------------------------------------------------- */}

          <motion.div
            variants={item}
            className="mt-9 flex items-center gap-4"
          >
            {/* GitHub */}

            <motion.a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-accent-soft/50 hover:text-accent-soft"
            >
              <Github size={16} />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-accent-soft/50 hover:text-accent-soft"
            >
              <Linkedin size={16} />
            </motion.a>

            {/* Email */}

            <motion.a
              href={site.links.email}
              aria-label="Email"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-accent-soft/50 hover:text-accent-soft"
            >
              <Mail size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* =====================================================
            DESKTOP VISUAL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="hidden lg:block"
        >
          <HeroVisual />
        </motion.div>

        {/* =====================================================
            MOBILE VISUAL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="-mt-4 lg:hidden"
        >
          <HeroVisual compact />
        </motion.div>
      </div>

      {/* ---------------------------------------------------------
          BOTTOM FADE
      --------------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}