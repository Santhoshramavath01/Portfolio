"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.links.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${site.phone}`,
    href: site.links.phoneTel,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: site.links.whatsapp,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Santhoshramavath01",
    href: site.links.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ramavath-santhosh",
    href: site.links.linkedin,
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <motion.div
          className="absolute left-[20%] top-[35%] h-[420px] w-[420px] rounded-full bg-accent-soft/5 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute right-[10%] top-[20%] h-[360px] w-[360px] rounded-full bg-accent/5 blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-4 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-accent-soft"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 28,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="h-px bg-accent-soft/70"
              />

              Contact
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="balance max-w-xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-fg"
            >
              Let&apos;s connect and build something.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-fg-secondary sm:text-[17px]"
            >
              Have an idea, project, opportunity, or just want to connect?
              Feel free to reach out. I&apos;d love to hear from you.
            </motion.p>

            {/* =================================================
                CONNECTED CONTACT TIMELINE
            ================================================== */}

            <div className="relative mt-10">

              {/* -------------------------------------------------
                  MAIN VERTICAL LINE
              -------------------------------------------------- */}

              <motion.div
                className="absolute left-[20px] top-5 bottom-5 w-px origin-top"
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="h-full w-full bg-gradient-to-b from-accent-soft/70 via-accent-soft/30 to-accent-soft/5" />
              </motion.div>

              {/* -------------------------------------------------
                  GLOWING TRAVELING PARTICLE
              -------------------------------------------------- */}

              <motion.div
                className="pointer-events-none absolute left-[18px] top-5 z-30 h-5 w-[3px] rounded-full bg-accent-soft shadow-[0_0_12px_3px_rgba(129,140,248,0.55)]"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: [0, 1, 1, 0],
                  y: [0, 70, 210, 330],
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 3.8,
                  delay: 1.2,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />

              {/* -------------------------------------------------
                  CONTACT ITEMS
              -------------------------------------------------- */}

              <div className="flex flex-col gap-2">

                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: "-50px",
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.35 + index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative flex min-h-[68px] items-center gap-5 rounded-2xl px-0 py-2 transition-all duration-300"
                    >

                      {/* =================================================
                          ICON / NODE
                      ================================================== */}

                      <motion.span
                        whileHover={{
                          scale: 1.12,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 18,
                        }}
                        className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-fg-secondary transition-all duration-300 group-hover:border-accent-soft/60 group-hover:bg-accent-soft/10 group-hover:text-accent-soft"
                      >

                        {/* Outer hover ring */}
                        <motion.span
                          className="pointer-events-none absolute inset-[-5px] rounded-full border border-accent-soft/0"
                          whileHover={{
                            scale: 1.1,
                            borderColor:
                              "rgba(129, 140, 248, 0.35)",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        />

                        {/* Pulse */}
                        <motion.span
                          className="pointer-events-none absolute inset-0 rounded-full border border-accent-soft/0"
                          whileHover={{
                            scale: [1, 1.35],
                            opacity: [0.5, 0],
                            borderColor:
                              "rgba(129, 140, 248, 0.5)",
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                        />

                        <Icon size={16} />
                      </motion.span>

                      {/* =================================================
                          TEXT
                      ================================================== */}

                      <motion.span
                        className="relative flex-1"
                        whileHover={{
                          x: 6,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                          {item.label}
                        </span>

                        <span className="mt-1 block text-[14px] text-fg transition-colors duration-300 group-hover:text-accent-soft sm:text-[15px]">
                          {item.value}
                        </span>
                      </motion.span>

                      {/* =================================================
                          SMALL ARROW
                      ================================================== */}

                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="mr-2 text-accent-soft"
                      >
                        →
                      </motion.span>

                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — CONTACT FORM
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >

            {/* Animated glow behind form */}
            <motion.div
              className="pointer-events-none absolute -inset-1 rounded-[26px] bg-accent-soft/10 blur-2xl"
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Form card */}
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(99,102,241,0.45)] sm:p-8">

              {/* Form header */}
              <div className="mb-7">
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-soft"
                >
                  Send a message
                </motion.p>

                <h3 className="mt-2 font-display text-xl font-medium text-fg">
                  Tell me about your idea.
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-fg-secondary">
                  Fill out the form below and your email application
                  will open with the message prepared.
                </p>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}