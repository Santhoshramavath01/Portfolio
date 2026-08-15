"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

interface HeroVisualProps {
  compact?: boolean;
}

const outerParticles = [
  { angle: 15, size: 5, delay: 0 },
  { angle: 105, size: 4, delay: 1.2 },
  { angle: 200, size: 4, delay: 2.2 },
  { angle: 290, size: 5, delay: 0.7 },
];

const middleParticles = [
  { angle: 45, size: 4, delay: 0.4 },
  { angle: 155, size: 3, delay: 1.4 },
  { angle: 270, size: 4, delay: 2.4 },
];

const innerParticles = [
  { angle: 20, size: 3, delay: 0.8 },
  { angle: 180, size: 3, delay: 1.8 },
];

export function HeroVisual({ compact = false }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * ---------------------------------------------------------
   * RESPONSIVE SIZE
   * ---------------------------------------------------------
   */

  const size = compact ? 280 : 470;

  const outerSize = compact ? 250 : 410;
  const middleSize = compact ? 185 : 300;
  const innerSize = compact ? 120 : 205;

  /*
   * ---------------------------------------------------------
   * MOUSE PARALLAX
   * ---------------------------------------------------------
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 18,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 18,
    mass: 0.5,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (compact || shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 14);
    mouseY.set(y * 14);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /*
   * ---------------------------------------------------------
   * PARTICLE COMPONENT
   * ---------------------------------------------------------
   */

  const Particle = ({
    angle,
    size,
    delay,
  }: {
    angle: number;
    size: number;
    delay: number;
  }) => {
    const radians = (angle * Math.PI) / 180;

    return (
      <motion.span
        className="absolute left-1/2 top-1/2 rounded-full bg-accent"
        style={{
          width: size,
          height: size,
          x: `calc(${Math.cos(radians) * 50}% - ${size / 2}px)`,
          y: `calc(${Math.sin(radians) * 50}% - ${size / 2}px)`,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.25, 1, 0.25],
                scale: [0.7, 1.35, 0.7],
              }
        }
        transition={{
          duration: 2.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  };

  if (!mounted) {
    return (
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{
          width: size,
          height: size,
          maxWidth: "100%",
        }}
      />
    );
  }

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{
        width: size,
        height: size,
        maxWidth: "100%",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOW
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute rounded-full bg-accent/10 blur-[100px]"
        style={{
          width: compact ? 180 : 300,
          height: compact ? 180 : 300,
          x: smoothX,
          y: smoothY,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          OUTER ORBIT
      ===================================================== */}

      <motion.div
        className="absolute rounded-full border border-accent/[0.14]"
        style={{
          width: outerSize,
          height: outerSize,
          x: smoothX,
          y: smoothY,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Outer orbit highlight */}
        <div
          className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-xl"
        />

        {outerParticles.map((particle, index) => {
          const radians = (particle.angle * Math.PI) / 180;

          const radius = outerSize / 2;

          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <motion.span
              key={index}
              className="absolute left-1/2 top-1/2 rounded-full bg-accent"
              style={{
                width: particle.size,
                height: particle.size,
                x: x - particle.size / 2,
                y: y - particle.size / 2,
                boxShadow:
                  "0 0 12px rgba(124, 108, 255, 0.8)",
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [0.7, 1.4, 0.7],
                      opacity: [0.3, 1, 0.3],
                    }
              }
              transition={{
                duration: 2.5 + index * 0.4,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>

      {/* =====================================================
          MIDDLE ORBIT
      ===================================================== */}

      <motion.div
        className="absolute rounded-full border border-border-strong/60"
        style={{
          width: middleSize,
          height: middleSize,
          x: smoothX,
          y: smoothY,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {middleParticles.map((particle, index) => {
          const radians = (particle.angle * Math.PI) / 180;

          const radius = middleSize / 2;

          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <motion.span
              key={index}
              className="absolute left-1/2 top-1/2 rounded-full bg-accent-soft"
              style={{
                width: particle.size,
                height: particle.size,
                x: x - particle.size / 2,
                y: y - particle.size / 2,
                boxShadow:
                  "0 0 10px rgba(124, 108, 255, 0.6)",
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [0.7, 1.3, 0.7],
                      opacity: [0.2, 0.9, 0.2],
                    }
              }
              transition={{
                duration: 2.2 + index * 0.35,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>

      {/* =====================================================
          INNER ORBIT
      ===================================================== */}

      <motion.div
        className="absolute rounded-full border border-fg/[0.08]"
        style={{
          width: innerSize,
          height: innerSize,
          x: smoothX,
          y: smoothY,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {innerParticles.map((particle, index) => {
          const radians = (particle.angle * Math.PI) / 180;

          const radius = innerSize / 2;

          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <motion.span
              key={index}
              className="absolute left-1/2 top-1/2 rounded-full bg-fg/70"
              style={{
                width: particle.size,
                height: particle.size,
                x: x - particle.size / 2,
                y: y - particle.size / 2,
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.15, 0.8, 0.15],
                      scale: [0.7, 1.2, 0.7],
                    }
              }
              transition={{
                duration: 1.8,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <motion.span
        className="absolute h-1 w-1 rounded-full bg-accent/60"
        style={{
          top: "18%",
          left: "25%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 12, -5, 0],
                y: [0, -10, 8, 0],
                opacity: [0.15, 0.8, 0.3, 0.15],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute h-1.5 w-1.5 rounded-full bg-accent/40"
        style={{
          right: "17%",
          top: "30%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -10, 7, 0],
                y: [0, 8, -10, 0],
                opacity: [0.2, 0.7, 0.25, 0.2],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.span
        className="absolute h-1 w-1 rounded-full bg-fg/30"
        style={{
          left: "15%",
          bottom: "25%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 8, -8, 0],
                y: [0, -8, 5, 0],
                opacity: [0.1, 0.6, 0.15, 0.1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* =====================================================
          CENTER GLOW
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute rounded-full bg-accent/10 blur-[50px]"
        style={{
          width: compact ? 90 : 145,
          height: compact ? 90 : 145,
          x: smoothX,
          y: smoothY,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.5, 0.25],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CENTER LOGO
      ===================================================== */}

      <motion.div
        className="relative z-20 flex items-center justify-center rounded-full border border-border-strong bg-card/80 backdrop-blur-md"
        style={{
          width: compact ? 78 : 112,
          height: compact ? 78 : 112,
          x: smoothX,
          y: smoothY,
          boxShadow:
            "0 0 40px rgba(124, 108, 255, 0.12), 0 20px 60px rgba(0,0,0,0.25)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.035, 1],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Logo size={compact ? 43 : 58} />
      </motion.div>

      {/* =====================================================
          SMALL CENTER PULSE
      ===================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute rounded-full border border-accent/20"
          style={{
            width: compact ? 82 : 118,
            height: compact ? 82 : 118,
          }}
          animate={{
            scale: [1, 1.35],
            opacity: [0.35, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      {/* =====================================================
          OUTER PULSE
      ===================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute rounded-full border border-accent/[0.08]"
          style={{
            width: outerSize,
            height: outerSize,
          }}
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}